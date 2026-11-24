---
tipo: bitacora
estado: vigente
creado: 2026-11-10
actualizado: 2026-11-24
tags: [log]
fuentes: ["instrucciones pegadas", "archivos del proyecto", "inventario local de Docs/"]
---
# Registro cronológico

## [2026-11-10] configuración | wiki inicial y diagnóstico del proyecto
- Leídos los dos textos pegados: instrucciones para el agente de Rada Concept y patrón LLM Wiki.
- Inventariada la raíz y `Docs/`: proyecto React/TypeScript/Vite; un PDF de marca, 26 JPEG y 4 MP4. No se encontró ZIP, lockfile ni wiki previa.
- PDF de 14 páginas: extracción automática solo devolvió crédito NEMA; portada revisada y logo RADA CONCEPT visto, páginas restantes pendientes.
- Miniaturas de 26 JPEG revisadas: identificado logo, interiores/cocinas, muestras, aviso de servicios y retrato grupal; cuatro videos pendientes.
- SHA-256 halló dos pares de JPEG idénticos; originales conservados.
- Se creó `AGENTS.md` y las páginas iniciales de la wiki. Se excluye `Docs/` de Git por privacidad.
- Git inicializado y base del proyecto/wiki preparada en el índice; no hay identidad local para commit. `Docs/` está ignorada.
- Se actualizó `esbuild` a `^0.28.2` para resolver el conflicto con Vite 8.3.7. npm instaló 179 paquetes; auditoría sin vulnerabilidades reportadas.
- `npm run build` y `npm run lint` pasaron. `npm run dev -- --host 127.0.0.1` anunció `http://127.0.0.1:3000/`; consulta HTTP local no respondió y la herramienta de navegador se detuvo por no poder determinar con seguridad la URL actual. Revisión visual pendiente.
- Siguiente paso: abrir la vista previa manualmente; confirmar datos/testimonios y permisos de activos; pedir identidad Git local para commit.

## [2026-11-10] sincronización | repositorio GitHub Rada-Pagina-
- La usuaria confirmó `RADACONCEPT` como cuenta y solicitó subir el proyecto al remoto `https://github.com/RADACONCEPT/Rada-Pagina-.git`.
- La cuenta autenticada en la web mostró el repositorio vacío. Se creó commit inicial `3644a65` con nombre `RADACONCEPT` y correo noreply; se configuró `main` y `git push -u origin main` terminó correctamente.
- El commit contiene 34 archivos de código, dependencias y wiki. `Docs/` permanece ignorada; `.env.example` conserva solo marcadores. El sitio no se publica por subir código a GitHub.
- Pendiente: comprobar en GitHub que el commit y archivos se muestran; abrir vista previa local para revisión visual; validar contenido de negocio y autorizaciones de activos.

## [2026-11-10] plan | skills iniciales y flujo de revisión
- Revisado el paquete local de plan y validación. `entrega-rada-concept.zip` contiene un plan de 13 pasos y dos ZIPs de skills; no contiene la exportación de la landing. Los archivos de validación/mensaje quedan solo locales.
- Instaladas y verificadas en `.agents/skills/` las cinco skills para el plan: `seo-organico-ia`, `tratamiento-datos-landing`, `emil-design-eng`, `mobile-native` e `impeccable`. Transitions es opcional y queda para decidir en el Paso 10.
- Copiado el plan fuente sin alterar el original a `plan-mejoras.md`; Paso 0 marcado como verificado. Acordado el ciclo local: cambio de un paso, vista previa, feedback/iteración hasta satisfacción, comprobaciones, commit y push a `origin/main`.
- Pendiente entonces: respuestas sobre negocio, activos y alcance; ahora recibidas y registradas abajo.

## [2026-11-10] alcance | decisiones de negocio y catálogo conjunto
- La usuaria confirmó que el checkout actual es la fuente de verdad y que los pasos aceptados se sincronizan a GitHub con commits.
- Alcance confirmado: mobiliario para acabados de hogares, oficinas y espacios comerciales; enfoque residencial/comercial en la región norte de Colombia; equipo que incluye arquitectura y diseño.
- WhatsApp `+57 350 289 9088`, Instagram `@rada_concept` y redes actuales siguen correctos. Eligió revisar el catálogo juntas antes de mapear fotos; eligió `TALLER.mp4`. Política de datos incluida; cocina interactiva opcional.
- Se encontró y registró `RUT GRUPO VILORIA RADA.pdf` en `Docs/`; solo consulta local de datos mínimos, nunca subir el documento ni copiar su contenido sensible a wiki/Git.
- Actualizados plan, estado, empresa, catálogo, pendientes y decisiones. La hoja visual tiene 26 fotos numeradas; no se editaron archivos de la landing ni se declaró terminado el Paso 1.
- Próxima acción: elegir IDs para portada/galerías y revisar en conjunto; continuar auditoría del Paso 1.

## [2026-11-20] activos | permiso de publicación de fotografías
- La usuaria confirmó que todas las fotografías del catálogo tienen permiso de publicación.
- Registrado el permiso en el catálogo, estado, pendientes y decisiones. Aún falta asociar las fotos con proyectos/galerías y escoger la portada.

## [2026-11-24] auditoría | carpetas de activos y vista local
- La usuaria nombró y organizó los activos en `Docs/` por categorías/proyectos. Inventario recursivo: 42 JPEG, 17 MP4 y 1 MOV; hay 2 PDF. Se encontró un par de JPEG idénticos; originales intactos.
- Generada una nueva hoja visual de 42 fotos con nombre y carpeta. Se revisaron visualmente las miniaturas; los 18 videos no se reprodujeron.
- Vite se inició con autorización de la usuaria en `http://127.0.0.1:3000/`. En el navegador local se revisaron Inicio, Galería, Quiénes somos y Contacto. No se editó la landing.
- Todas las imágenes fotográficas del sitio actual son URLs remotas `lh3.googleusercontent.com`, no referencias a `Docs/`. La imagen de logo remota no cargó en el navegador; el nombre de marca en texto aparece. El mapa también usa recurso remoto. El simulador usa ilustración SVG. La procedencia de los recursos externos sigue sin confirmar.
- Al registrar esta auditoría, quedaba pendiente el visto bueno para cerrar Paso 1; se resolvió en la entrada siguiente. El video elegido permanece `Docs/TALLER E INSTALACION/TALLER.mp4`.

## [2026-11-24] aprobación | cierre del Paso 1
- La usuaria dio visto bueno a la auditoría visual y de materiales. Se marcó el Paso 1 como completado; no se modificó la landing.
- Actualizados plan, estado y pendientes. Siguiente paso acordado: preparar los activos aprobados localmente y mantener intactos los originales de `Docs/`.

## [2026-11-24] activos | preparación local para Paso 2
- Copiadas 42 fotos aprobadas a `public/assets/rada/`, preservando la organización por carpetas y reencodificando JPEG a calidad 82, máximo 1800 px por lado. Tamaño de imagen pasó de 8.253.382 a 6.838.860 bytes (17,1 % menor).
- Copiado el video elegido `TALLER E INSTALACION/TALLER.mp4` sin cambios; hash SHA-256 idéntico al original. Los originales de `Docs/` no se modificaron.
- Recargada la landing local: respondió y conservó la vista, sin cambios visuales ni referencias nuevas. En esta entrada, el Paso 2 estaba listo para revisión.

## [2026-11-24] aprobación | cierre del Paso 2
- La usuaria aprobó las copias locales de los activos. Se marcó el Paso 2 como completado; todavía no se modificaron las referencias de imágenes en la landing.
- Próximo paso: elegir la imagen principal para portada; `Docs/RADA/PORTADA.jpeg` contiene muestras de acabado y no fue elegida.
