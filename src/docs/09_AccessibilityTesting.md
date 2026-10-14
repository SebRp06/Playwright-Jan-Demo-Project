# Documentación: Pruebas de Accesibilidad (a11y)

**Referencia al código:** `src/tests/accessibility.spec.ts`

## Descripción General
La calidad de software moderna exige que las aplicaciones sean usables por todas las personas, incluyendo aquellas con discapacidades. Este framework integra `@axe-core/playwright` para automatizar la detección de violaciones de accesibilidad en el DOM (Document Object Model) directamente durante la ejecución de las pruebas funcionales.

## Estándares Evaluados (WCAG)
El motor de Axe se ha configurado para auditar la interfaz contra las Pautas de Accesibilidad para el Contenido Web (WCAG) en sus niveles **A** y **AA** (versiones 2.0 y 2.1). Esto cubre problemas críticos como:
- Contraste de color insuficiente.
- Falta de atributos `aria-label` o `alt` en imágenes y botones.
- Jerarquía incorrecta de encabezados (H1, H2, etc.).
- Formularios sin etiquetas vinculadas.

## Estrategia de Implementación
1. **Inyección del Motor:** `AxeBuilder` se inyecta en el contexto de la página actual de Playwright una vez que el DOM está completamente cargado.
2. **Análisis Estático:** Se escanea la estructura HTML buscando patrones que rompan las reglas de accesibilidad.
3. **Aserción Estricta:** La prueba fallará y detendrá el pipeline (CI/CD) si el arreglo `violations` contiene uno o más errores, garantizando que no se despliegue código inaccesible a producción.