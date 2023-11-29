/* eslint-disable no-console */
/* eslint-disable import/no-unassigned-import */

import 'reflect-metadata';
import { KnexHelper } from '@/infrastructure/database';
import { type AddressInfo } from 'net';
import { Environment } from './config/environment';

Environment.load(false);

Promise.all([
    KnexHelper.connect(
        Environment.postgresHost,
        Environment.postgresUser,
        Environment.postgresPassword,
        Environment.postgresDatabase,
    ),
])
    .then(async () => {
        const { setupApp } = await import('./config/app');
        const app = await setupApp();

        const server = app.listen(Environment.port, () => {
            const { address, port } = server.address() as AddressInfo;

            console.log(`Server running at http://${address}:${port}`);
        });
    })
    .catch(console.error);
