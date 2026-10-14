/**
 * Documentación de esta utilidad: src/docs/05_UtilsAndHelpers.md
 */

export class DataGenerator {
    /**
     * Generación de un correo electrónico aleatorio con un prefijo personalizado.
     */
    static generateRandomEmail(prefix: string = 'testuser'): string {
        const timestamp = new Date().getTime();
        return `${prefix}+${timestamp}@ejemplo.com`;
    }

    /**
     * Generación de una cadena de texto alfanumérica aleatoria.
     */
    static generateRandomString(length: number = 8): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    /**
     * Genera un código postal aleatorio de 5 dígitos.
     */
    static generateRandomZipCode(): string {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
}