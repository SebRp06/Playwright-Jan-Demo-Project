# Documentación: Data-Driven Testing (DDT)

**Referencia al código:** `src/tests/loginDdt.spec.ts` y `src/data/users.json`

## Descripción General
El patrón Data-Driven Testing (DDT) permite ejecutar un mismo flujo de prueba múltiples veces utilizando diferentes conjuntos de datos. Esto reduce drásticamente la duplicación de código, mejora el mantenimiento y permite a perfiles no técnicos (como analistas de negocio) agregar nuevos escenarios simplemente modificando un archivo JSON.

## Estructura de Datos (`users.json`)
El archivo de datos contiene un arreglo de objetos. Cada objeto representa un escenario de prueba único e incluye:
- `testCase`: Una descripción legible del escenario para el reporte.
- `username` / `password`: Los datos de entrada.
- `expectedError`: El resultado esperado (oráculo de prueba) contra el cual se hará la aserción.

## Implementación en Playwright
Playwright maneja la parametrización de forma nativa utilizando bucles estándar de JavaScript/TypeScript.
1. Se importa el archivo `.json` en el script de prueba.
2. Se utiliza un ciclo `for...of` fuera de los bloques `test()`, pero dentro del `test.describe()`.
3. Playwright registra en tiempo de ejecución un caso de prueba independiente por cada iteración del bucle, mostrando el nombre dinámico en los reportes (HTML, consola, etc.).

## Consideración de Seguridad
**Regla estricta:** La carpeta `src/data/` es únicamente para datos de prueba estructurales, casos negativos, o flujos de negocio. **Nunca** se deben almacenar contraseñas reales de entornos privados o de producción en estos archivos JSON. Para credenciales reales, se debe continuar usando el archivo `.env` o un gestor de secretos en CI/CD.