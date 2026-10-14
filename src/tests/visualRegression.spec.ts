/**
 * Documentación de este enfoque: src/docs/10_VisualRegressionTesting.md
 */
import { test, expect } from '@playwright/test';

test.describe('Suite de Pruebas: Regresión Visual (VRT)', () => {

    test('El diseño de la página de login debe mantenerse consistente (Pixel Perfect)', async ({ page }) => {
        await page.goto('/');

        // Aserción visual: Comparación de la pantalla actual contra una captura base guardada.
        // La primera vez que se ejecuta, fallará y creará la imagen base.
        await expect(page).toHaveScreenshot('login-page-baseline.png', {
            // Umbral de tolerancia para pequeños cambios de renderizado entre sistemas operativos
            maxDiffPixelRatio: 0.05,
        });
    });

    test('El diseño del componente de carrito debe mantenerse consistente, ignorando datos dinámicos', async ({ page }) => {
        await page.goto('/inventory.html');

        const headerContainer = page.locator('.primary_header');

        // Posibilidad de enmascarar (mask) elementos dinámicos que cambian en cada ejecución
        // como el número del carrito o un reloj, para evitar falsos positivos.
        await expect(headerContainer).toHaveScreenshot('header-baseline.png', {
            mask: [page.locator('.shopping_cart_badge')]
        });
    });
});