/**
 * Documentación asociada: src/docs/05_UtilsAndHelpers.md
 */
import { test, expect } from '@playwright/test';
import { DataGenerator } from '../utils/DataGenerator';

test.describe('Suite de Pruebas: Generación de Datos Dinámicos', () => {

    test('Debería generar y utilizar datos únicos para el registro o checkout', async ({ page }) => {
        // 1. Generamos los datos al vuelo
        const dynamicEmail = DataGenerator.generateRandomEmail('qa_portfolio');
        const dynamicFirstName = `User_${DataGenerator.generateRandomString(5)}`;
        const dynamicZipCode = DataGenerator.generateRandomZipCode();

        // 2. Imprimimos en consola para verificar (Útil para depuración)
        console.log(`Datos generados para esta ejecución:
            Email: ${dynamicEmail}
            Nombre: ${dynamicFirstName}
            Código Postal: ${dynamicZipCode}
        `);

        // 3. Demostración de aserción sobre los datos generados
        expect(dynamicEmail).toContain('@ejemplo.com');
        expect(dynamicEmail).toContain('qa_portfolio');
        expect(dynamicZipCode).toHaveLength(5);
    });
});