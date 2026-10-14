# Documentación: Pruebas de Regresión Visual (VRT)

**Referencia al código:** `src/tests/visualRegression.spec.ts`

## Descripción General
Las Pruebas de Regresión Visual (Visual Regression Testing) aseguran que la interfaz de usuario mantenga su apariencia exacta a lo largo del tiempo, previniendo regresiones causadas por modificaciones en las hojas de estilo (CSS) o actualizaciones de componentes del sistema de diseño.

## Funcionamiento Técnico (Instantáneas)
Playwright maneja VRT tomando capturas de pantalla de la página completa o de componentes específicos y comparándolas píxel a píxel contra una imagen de referencia (Baseline Snapshot) aprobada previamente.

1. **Generación de Baseline:** En la primera ejecución, o al ejecutar el comando con el flag `--update-snapshots`, Playwright guarda la imagen de referencia en el directorio del proyecto.
2. **Ejecuciones Subsecuentes:** Playwright toma una nueva captura y crea un mapa de diferencias visuales (Diff). Si la diferencia supera el umbral configurado (`maxDiffPixelRatio`), la prueba falla.

## Manejo de Elementos Dinámicos
Para evitar la fragilidad o "flakiness" en las pruebas visuales debido a datos que cambian constantemente (ej. fechas, horas, números de ID, banners de publicidad), se utiliza la propiedad `mask`. Esta propiedad coloca un bloque de color sólido sobre el localizador especificado antes de tomar la captura, permitiendo comparar la estructura del componente sin importar el dato temporal que contenga.