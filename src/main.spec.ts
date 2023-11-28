import { describe, it, expect } from 'vitest';
import { Main } from './main';

describe('Main Test', () => {
    it('should test main', () => {
        const main = Main.application();
        const result = 'Hello World typescript!';

        expect(main).toBe(result);
    });
});
