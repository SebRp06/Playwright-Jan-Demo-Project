# Documentación: Funciones Transversales (Utils)

**Referencia al código:** `src/utils/DataGenerator.ts`

## Descripción General
La carpeta `src/utils/` contiene clases, funciones y configuraciones transversales que dan soporte al framework de pruebas pero que no están directamente ligadas a la interacción con la interfaz de usuario (DOM). Esto incluye formateadores de fechas, manejadores de bases de datos, integraciones con APIs externas y generadores de datos.

## Clase `DataGenerator`
Implementada bajo el patrón de métodos estáticos (`static`), permite invocar sus funcionalidades sin necesidad de instanciar la clase (`new DataGenerator()`), agilizando su uso dentro de los scripts de prueba.

### Métodos Principales:
- `generateRandomEmail(prefix)`: Retorna un string con formato de correo electrónico garantizando unicidad mediante un sello de tiempo (`timestamp`). Vital para flujos de registro (`Sign Up`).
- `generateRandomString(length)`: Retorna una cadena alfanumérica de longitud variable, útil para nombres, descripciones de productos o comentarios en formularios.
- `generateRandomZipCode()`: Genera una estructura numérica estándar, útil para flujos de facturación o Checkout.

## Buenas Prácticas Aplicadas
- **Desacoplamiento:** Los tests no contienen lógica de generación de cadenas o números aleatorios.
- **Reusabilidad:** Cualquier Page Object o script dentro del directorio `src/` puede importar y consumir estas reglas de negocio estandarizadas.