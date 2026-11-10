# Plan de mejoras · Rada Concept

Guarda este archivo en la carpeta de tu página, junto al código. Pídele a tu agente **un paso a la vez**, en una conversación nueva cada vez, copiando el mensaje del paso. Así gastas menos tokens.

## Cómo trabajaremos cada paso

1. Haré solamente el paso elegido y guardaré el cambio en esta carpeta local.
2. Te daré el enlace `http://127.0.0.1:3000/` para revisar la página en tu computador, y te indicaré qué sección comprobar.
3. Me dirás qué cambiar o qué no te convence. Si tu comentario admite más de una interpretación, te preguntaré antes de modificar. Repetiremos revisión y ajustes hasta que digas que el paso está listo.
4. Entonces ejecutaré las comprobaciones pertinentes, marcaré el paso como terminado solo si quedó verificado, crearé un commit de esos archivos y lo subiré a `origin/main`.
5. Subir código a GitHub no publica el sitio. No desplegaré ni cambiaré dominio sin una autorización aparte.

## Reglas para el agente (léelas siempre antes de trabajar)

- Haz **solo el paso que te pidan**. No adelantes otros pasos.
- Mejora la página que ya existe; **no la rehagas desde cero** ni cambies su estructura sin que te lo pida.
- Usa **solo fotos y videos reales** de la carpeta `Docs`. **Nunca** generes imágenes ni uses fotos de internet o de otras carpinterías. No inventes proyectos, textos, reseñas ni datos de contacto. Si falta algo, dilo y pregunta (máximo cinco preguntas).
- Guarda las fotos y videos **dentro del proyecto** (no como enlaces externos) y conserva los originales de `Docs` sin modificarlos.
- Antes de cambiar, guarda una versión recuperable (commit de Git o copia de la carpeta).
- Comprueba el resultado en **celular y computador**. Explícame en palabras simples qué cambiaste y qué revisaste.
- Marca el paso con `[x]` en este archivo **solo cuando esté comprobado**. Si quedó algo pendiente, anótalo debajo del paso.

## Antes de empezar

- [x] **Paso 0 · Instalar skills.** Instaladas en `.agents/skills/`: `seo-organico-ia`, `tratamiento-datos-landing`, `emil-design-eng`, `mobile-native` e `impeccable`. **Transitions** es opcional para el paso 10 y se deja sin instalar por ahora. *(Comprobado el 2026-11-10; nivel de modelo: medio)*

---

- [ ] **Paso 1 · Revisar la página y el material** *(Nivel de modelo: alto)*

  > Lee `plan-mejoras.md` y haz solo el paso 1. Abre la última versión exportada de mi página que está en `Docs` y hazla funcionar en mi computador. Hazme una lista de todas las imágenes de la página: cuáles son fotos mías y cuáles son genéricas o generadas, y en qué sección está cada una. Revisa qué fotos, videos y textos hay en `Docs` y dime qué falta. No cambies nada todavía.

  **Necesitas en Docs:** el ZIP de la última versión y tus fotos por proyecto.
  **Quedó bien si:** tienes la lista de imágenes genéricas por cambiar y sabes qué material falta.

- [ ] **Paso 2 · Guardar tus fotos dentro del proyecto** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 2. Copia mis fotos y videos de `Docs` a una carpeta del proyecto, organizados por proyecto, con nombres claros y en un tamaño liviano para web, sin tocar los originales. Guarda una versión con Git. Luego cierra y vuelve a abrir la página en mi computador y confirma que todo sigue igual.

  **Quedó bien si:** tus fotos están dentro del proyecto y nada se pierde al reiniciar.

- [ ] **Paso 3 · Portada con tu mejor proyecto** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 3. Cambia la imagen principal genérica por la foto de portada que indiqué en `Docs`. Que se vea completa en celular y computador, sin recortes que oculten el acabado, y que el texto encima se lea bien.

  **Necesitas en Docs:** la foto elegida para la portada.
  **Quedó bien si:** la portada muestra un trabajo real de Rada Concept y se ve bien en el teléfono.

- [ ] **Paso 4 · Galerías con las fotos correctas** *(Nivel de modelo: alto)*

  > Lee `plan-mejoras.md` y haz solo el paso 4. Cambia todas las imágenes genéricas de las galerías, incluida la cocina, por las fotos de cada proyecto según las carpetas de `Docs`. Cada galería debe mostrar solo fotos de su proyecto. Al abrir una foto en grande y volver, la persona debe seguir en el mismo lugar de la página. Muéstrame la lista de cambios: qué imagen había y cuál quedó.

  **Necesitas en Docs:** fotos en carpetas por proyecto.
  **Quedó bien si:** no queda ninguna imagen genérica y cada galería corresponde a un proyecto real.

- [ ] **Paso 5 · Quiénes somos** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 5. Revisa la identidad, la misión, la visión y la descripción del trabajo realizado, y pon solo los textos aprobados de `Docs`. Quita cualquier texto de ejemplo o dato que no venga de mis documentos. Si un texto no está en `Docs`, no lo escribas tú: avísame.

  **Necesitas en Docs:** misión, visión y textos de marca.
  **Quedó bien si:** todos los textos son de Rada Concept y no queda ninguno de ejemplo.

- [ ] **Paso 6 · WhatsApp y redes** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 6. Deja un botón de WhatsApp siempre visible que lleve al número comercial de `Docs`, con un mensaje inicial que diga que la persona viene de la página y qué espacio le interesa. Agrega los enlaces a las redes que están en `Docs`. Pruébalo en celular.

  **Necesitas en Docs:** número comercial y enlaces de redes.
  **Quedó bien si:** la consulta llega a tu número y las redes abren tus perfiles.

- [ ] **Paso 7 · Videos de tus trabajos** *(Nivel de modelo: alto)*

  > Lee `plan-mejoras.md` y haz solo el paso 7. Agrega los videos que elegí en `Docs` de forma ligera: con una imagen de portada, que carguen solo cuando la persona llegue a ellos y **sin sonido automático**. No deben tapar textos ni hacer lenta la página. Comprueba en celular que la página sigue rápida.

  **Necesitas en Docs:** los videos elegidos.
  **Quedó bien si:** los videos se ven bien, no suenan solos y la página no se volvió lenta.

- [ ] **Paso 8 · Acabado profesional** *(Nivel de modelo: alto)*

  > Lee `plan-mejoras.md` y haz solo el paso 8. Usa la skill emil-design-eng para pulir los detalles de lo que ya existe: botones, galería y espacios. Luego usa la skill impeccable para ordenar la presentación de los proyectos y dar protagonismo a los materiales, los acabados y las fotos. No cambies fotos, textos, logo ni la estructura aprobada.

  **Quedó bien si:** la página se ve más cuidada y tus trabajos lucen más.

- [ ] **Paso 9 · Revisión en celular** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 9. Usa la skill mobile-native para revisar en celular el menú, la portada, las galerías, las fotos ampliadas, los videos y el WhatsApp. Corrige lo que se vea mal o sea incómodo de tocar.

  **Quedó bien si:** la página se usa cómodamente desde el teléfono.

- [ ] **Paso 10 · Transiciones suaves (opcional)** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 10. Agrega transiciones suaves al ampliar una foto y al cambiar de categoría o proyecto. La foto debe aparecer enseguida, funcionar sin animación y con teclado (Esc para cerrar), y respetar a quien tiene desactivado el movimiento.

  **Quedó bien si:** se siente más fluido y nada tarda ni distrae.

- [ ] **Paso 11 · Política de tratamiento de datos** *(Nivel de modelo: alto)*

  > Lee `plan-mejoras.md` y haz solo el paso 11. Usa la skill tratamiento-datos-landing. Revisa qué datos personales recoge mi página, hazme las preguntas que falten para la política y, cuando la tengas, ponla en su propia página con un enlace en el pie y un aviso corto junto al botón de WhatsApp. No publiques la política si faltan los datos de la empresa.

  **Necesitas en Docs:** NIT o RUT, dirección y un correo para temas de datos.
  **Quedó bien si:** la política abre desde el pie de página.

- [ ] **Paso 12 · SEO: que te encuentren en Google** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 12. Usa la skill seo-organico-ia para revisar mi página y aplicar las mejoras básicas: título, descripción, textos de las fotos que describan cada proyecto y datos del negocio de carpintería y espacios residenciales. No inventes direcciones ni horarios; pregúntame lo que falte.

  **Quedó bien si:** el agente te explica qué mejoró y qué datos faltan.

- [ ] **Paso 13 · Revisión final** *(Nivel de modelo: medio)*

  > Lee `plan-mejoras.md` y haz solo el paso 13. Revisa toda la página en celular y computador. Confirma que no queda ninguna imagen genérica, abre una foto de cada galería, reproduce un video y prueba el WhatsApp. Cierra y vuelve a abrir la página para confirmar que las fotos siguen ahí. Dime qué comprobaste de verdad y guarda la versión final.

  **Quedó bien si:** todo muestra tu trabajo real y tienes la versión guardada.

---

Cuando termines todos los pasos, avísale a tu facilitador para revisar y publicar.
