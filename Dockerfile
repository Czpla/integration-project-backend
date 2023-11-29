FROM node:18-alpine AS dependencies
WORKDIR /var/app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci --no-audit

FROM node:18-alpine AS build
ENV NODE_ENV production
WORKDIR /var/app
COPY --from=dependencies /var/app/node_modules node_modules/
COPY . .
RUN npm run build

FROM node:18-alpine AS prod_dependencies
WORKDIR /var/app
COPY package.json package-lock.json ./
RUN npm ci --production --omit=dev --ignore-scripts --no-audit

FROM node:18-alpine AS runtime
ARG POSTGRES_HOST
ENV POSTGRES_HOST ${POSTGRES_HOST}

ARG POSTGRES_USER
ENV POSTGRES_USER ${POSTGRES_USER}

ARG POSTGRES_PASSWORD
ENV POSTGRES_PASSWORD ${POSTGRES_PASSWORD}

ARG POSTGRES_DATABASE
ENV POSTGRES_DATABASE ${POSTGRES_DATABASE}

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV production

EXPOSE 8080

WORKDIR /var/app

USER node

COPY --chown=node:node --from=prod_dependencies /var/app/package.json package.json
COPY --chown=node:node --from=prod_dependencies /var/app/node_modules node_modules/
COPY --chown=node:node --from=build /var/app/dist dist/
COPY --chown=node:node --from=build /var/app/scripts scripts/

CMD ["sh", "scripts/init.sh"]