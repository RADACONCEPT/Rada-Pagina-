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
- **2026-11-10 — Subir el código inicial a `RADACONCEPT/Rada-Pagina-`.** Motivo: solicitud explícita de la usuaria para respaldar el proyecto en ese repositorio. La rama remota `main` quedó siguiendo el remoto local; `Docs/` se mantiene excluida. Fuente: autorización en conversación, `git push` y configuración local de Git.
- **2026-11-10 — No cambiar contenido visible de la landing en el arranque.** Motivo: no se pidió un cambio concreto y faltan ZIP y confirmación de varios textos/datos; proponer una revisión pequeña para elegir. Fuente: solicitud inicial y estado observado.
- **2026-11-10 — Seguir el plan a un paso por vez con revisión local antes de subir cada paso terminado.** Motivo: preferencia explícita de la usuaria: recibir enlace local, pedir ajustes hasta quedar satisfecha y después crear y subir un commit. Fuente: instrucciones de esta conversación y `plan-mejoras.md`.
- **2026-11-10 — Mantener fuera de Git el paquete de facilitación recibido.** Motivo: incluye notas internas, mensajes y ZIPs fuente; solo se publican el plan de trabajo y las skills instaladas. Fuente: inventario del paquete y `.gitignore`.
- **2026-11-10 — Tratar el checkout como fuente de verdad y sincronizar cada paso aceptado mediante commit/push.** Motivo: confirmación explícita de la usuaria.
- **2026-11-10 — Oferta y alcance principales:** mobiliario para acabados de hogares, oficinas y espacios comerciales; segmentos residencial y comercial; destacar región norte de Colombia; equipo incluye arquitectura y diseño. Fuente: respuesta de la usuaria.
- **2026-11-10 — Revisar juntas las imágenes antes de asignarlas; evaluar `TALLER.mp4`; política de datos dentro del plan; cocina interactiva opcional.** Fuente: respuestas de la usuaria y catálogo local.
- **2026-11-10 — `PORTADA.jpeg` no se considera seleccionada para la portada del sitio.** Motivo: muestra materiales y la usuaria aún no ha mapeado proyectos. Fuente: miniatura ID 01 y decisión de revisar el catálogo juntas.
