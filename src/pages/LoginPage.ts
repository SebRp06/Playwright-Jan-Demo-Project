/**
 * Documentacion de esta clase: src/docs/02_LoginPage.md
 */
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Encapsulamiento: Los locators son privados y de solo lectura
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        // Inicializamos los selectores (Ejemplo enfocado en saucedemo.com)
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    /**
     * Flujo completo de inicio de sesion.
     */
    async login(username: string, password: string): Promise<void> {
        // Uso de los metodos provenientes de la clase padre (BasePage)
        await this.fillText(this.usernameInput, username);
        await this.fillText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    /**
     * Retorno de mensaje de error si aplica
     */
    async getErrorMessage(): Promise<string> {
        return await this.getElementText(this.errorMessage);
    }
}