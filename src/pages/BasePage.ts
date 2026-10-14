import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navega a una ruta especifica combinada con la baseURL del config.
     */
    async navigate(path: string = '/') {
        await this.page.goto(path);
    }

    /**
     * Espera a que un elemento sea visible y luego hace clic.
     */
    async clickElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    /**
     * Espera a que un elemento sea visible, lo limpia y escribe el texto.
     */
    async fillText(locator: Locator, text: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
    }

    /**
     * Obtiene el texto de un elemento visible.
     */
    async getElementText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return locator.innerText();
    }
}