# Documentación: Suite de Pruebas de Login

**Referencia al código:** `src/tests/login.spec.ts`

## Descripción General
Este archivo contiene los casos de prueba automatizados para el flujo de inicio de sesión. Consume el Page Object `LoginPage` para separar de manera limpia la lógica de navegación y selectores de las aserciones puras de la prueba.

## Configuración Global (`beforeEach`)
Antes de cada caso de prueba, se instancia un nuevo objeto de `LoginPage` y se navega a la ruta raíz (`/`). La URL base de la aplicación se inyecta directamente desde el entorno virtual usando el archivo `playwright.config.ts` y `.env`.

## Casos de Prueba Implementados

### 1. Inicio de sesión exitoso con credenciales válidas
- **Objetivo:** Verificar que un usuario válido pueda acceder al dashboard principal del sistema.
- **Flujo:** Llama al método `login` pasando las credenciales seguras obtenidas de las variables de entorno (`process.env.TEST_USER`, etc.).
- **Aserción (`expect`):** Valida que la URL de la página cambie a la vista de inventario (`/inventory.html`).

### 2. Error por credenciales inválidas
- **Objetivo:** Asegurar que el sistema rechace el acceso y muestre el mensaje correspondiente si las credenciales no existen o son erróneas.
- **Flujo:** Intenta iniciar sesión quemando datos erróneos de manera intencional en el test.
- **Aserción (`expect`):** Valida que el texto capturado por el método `getErrorMessage()` contenga la alerta de error esperada por el negocio ("Epic sadface...").