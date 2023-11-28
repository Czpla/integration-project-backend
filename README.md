# Projeto Template TypeScript

Este é um projeto de template em TypeScript com as configurações iniciais para iniciar o desenvolvimento de um projeto.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

-   Node.js
-   npm (Node Package Manager)

## Configuração

1. Clone o repositório para o seu ambiente local:

```shell
git clone https://github.com/czpla/template-typescript.git
```

2. Navegue até o diretório do projeto:

```shell
cd template-typescript
```

3. Instale as dependências do projeto:

```shell
npm install
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm run start`

Executa o projeto.

### `npm run build`

Executa o build do projeto fazendo a transpilação para javascript.

### `npm run start:dev`

Executa o projeto em modo de desenvolvimento.

### `npm test`

Executa os testes do projeto usando o framework vitest de testes.

### `npm run test:watch`

Executa os testes em mode watch, para que cada mudança ser rodado novamente todos os testes.

### `npm run lint:fix`

Executa o linter para verificar e corrigir problemas de estilo de código.

### `npm run lint:check`

Executa o linter para verificar problemas de estilo de código, mas não realiza correções.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte maneira:

```

├── .husky/
│   ├── _/
│   │   ├── .gitignore
│   │   └── husky.sh
│   └── pre-push
├── .vscode/
│   ├── launch.json
│   └── settings.json
├── src/
│   ├── main.ts
│   └── main.spec.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vitest.config.ts

```

-   A pasta `.husky` contém as configurações do husky e um script de pre-push, que é executado ao fazer um push para o github.
-   A pasta `.vscode` contém arquivos de configurações para debug do código quanto configurarções padrões para o editor.
-   A pasta `src` contém o código-fonte principal do projeto e os testes.
-   Os arquivos `.editorconfig`, `.eslintignore`, `.eslintrc.js` e `.gitignore` são arquivos de configuração para o editor, o linter e o controle de versão.
-   O arquivo `package.json` contém as dependências do projeto e scripts associados.
-   O arquivo `README.md` é este arquivo de documentação.
-   O arquivo `tsconfig.json` contém as configurações do TypeScript.
-   O arquivo `vitest.config.ts` contém as configurações do framework vitest.

## Contribuição

Sinta-se à vontade para contribuir com este projeto abrindo um pull request.\
Certifique-se de discutir e propor mudanças significativas através de issues primeiro.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
