# Documentación: LoginPage (Page Object)

**Referencia al código:** `src/pages/LoginPage.ts`

## Descripción General
La clase `LoginPage` hereda de `BasePage` y encapsula la lógica de interacción con la página de inicio de sesión de la aplicación. Aplica el principio de encapsulamiento de la Programación Orientada a Objetos, manteniendo sus selectores (`locators`) de manera privada para que no sean alterados desde los scripts de prueba.

## Selectores (Locators) Privados
- `usernameInput`: Campo de texto para ingresar el nombre de usuario.
- `passwordInput`: Campo de texto para ingresar la contraseña.
- `loginButton`: Botón para ejecutar la acción de inicio de sesión.
- `errorMessage`: Contenedor donde se muestran los errores de autenticación.

## Métodos Públicos
### `login(username, password)`
Ingresa las credenciales proporcionadas y hace clic en el botón de login. Reutiliza los métodos estables (`fillText` y `clickElement`) heredados de `BasePage`.

### `getErrorMessage()`
Extrae y retorna el texto del mensaje de error en caso de fallar la autenticación. Reutiliza el método `getElementText` de `BasePage`.