import { Router, type Express } from 'express';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

async function load(app: Express, prefixo: string = ''): Promise<void> {
    const directs = await readdir(join(__dirname, `../routes/${prefixo}`), {
        withFileTypes: true,
    });

    for (const direct of directs) {
        if (direct.isDirectory()) {
            await load(app, `${prefixo}/${direct.name}`);
            continue;
        }

        if (direct.isFile() && (direct.name.endsWith('.ts') || direct.name.endsWith('.js'))) {
            const router = Router();

            (await import(`../routes${prefixo}/${direct.name}`)).default(router);

            app.use(`${prefixo}`, router);
        }
    }
}

export default async (app: Express): Promise<void> => {
    await load(app);
};
