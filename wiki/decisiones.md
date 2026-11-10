---
tipo: decisiones
estado: vigente
creado: 2026-11-10
actualizado: 2026-11-10
tags: [decisiones]
fuentes: ["instrucciones del agente", ".gitignore", "inventario local"]
---
# Decisiones

- **2026-11-10 — Mantener Docs como originales locales y excluirla de Git.** Motivo: contiene materiales empresariales que pueden ser privados; el catálogo conserva referencias sin copiar los archivos. Fuente: instrucciones del agente y presencia de documentos/fotos/videos en `Docs/`.
- **2026-11-10 — Conservar React + TypeScript + Vite.** Motivo: framework existente identificado en archivos del proyecto; no se justificó reconstrucción. Fuente: `package.json`, `src/`.
- **2026-11-10 — Actualizar `esbuild` de `^0.25.0` a `^0.28.2`.** Motivo: npm resolvía Vite `8.3.7`, cuyo peer opcional requiere esbuild `^0.27.0 || ^0.28.0`; con la versión original la instalación falló (`ERESOLVE`). Tras el ajuste, npm instaló y la compilación pasó. Fuente: informe de resolución de npm y `package.json`.
- **2026-11-10 — No cambiar contenido visible de la landing en el arranque.** Motivo: no se pidió un cambio concreto y faltan ZIP y confirmación de varios textos/datos; proponer una revisión pequeña para elegir. Fuente: solicitud inicial y estado observado.
