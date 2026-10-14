/**
 * Documentación de este enfoque: src/docs/09_AccessibilityTesting.md
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Suite de Pruebas: Accesibilidad Web (a11y)', () => {

    test('La página de inventario no debe tener violaciones de accesibilidad detectables', async ({ page }) => {
        // Navegación a la página que se debe auditar (asumiendo que el Storage State inyecta la sesión)
        await page.goto('/inventory.html');

        // Instanciamos el motor de Axe y análisis de la página actual
        const accessibilityScanResults = await new AxeBuilder({ page })
            // Exclusión de elementos de terceros que no se controlan (ej. iframes de anuncios)
            // .exclude('#ads-iframe') 
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Estándares WCAG
            .analyze();

        // Aserción: El arreglo de violaciones debe estar vacío
        expect(accessibilityScanResults.violations).toEqual([]);
    });
});