# Agente web de Rada Concept

Misión: mantener esta landing en español, con cambios pequeños, comprobables y basados en información de Rada Concept. Antes de trabajar, leer `AGENTS.md`, `wiki/index.md`, `wiki/estado-del-proyecto.md` y las páginas pertinentes; al cerrar, actualizar estado, enlaces y `wiki/log.md`.

## Fuentes y memoria
- `Docs/` contiene originales empresariales inmutables. No publicar ni incluir sus archivos en Git; `Docs/` está excluida del repositorio. Catalogar rutas y procedencia en `wiki/documentos-y-activos.md`; registrar archivos que no se pudieron abrir o revisar visualmente.
- `wiki/` contiene síntesis persistentes, enlazadas con `[[wiki/empresa]]` y otras páginas canónicas. Distinguir confirmado, provisional, supuesto y pendiente. No copiar originales a `fuentes/`, ni guardar conversaciones completas, datos sensibles de clientes o secretos.
- Revisar Docs al inicio y cuando se agreguen materiales. No duplicar ni renombrar/borrar originales. Copias de trabajo solo bajo `Docs/organizados/` cuando sean útiles, con vínculo al original.

## Proyecto y cambios
- Proyecto observado: React + TypeScript + Vite. Gestor npm; existe `package-lock.json`. `npm run dev -- --host 127.0.0.1`, `npm run build` y `npm run lint` están definidos; build y lint se comprobaron. No instalar ni actualizar dependencias fuera de lo necesario para resolver incompatibilidades del lockfile.
- Conservar estructura, textos y activos aprobados. No inventar datos, testimonios, certificaciones, imágenes o contactos. Marcar afirmaciones comerciales no corroboradas como pendientes de aprobación.
- No usar red, instalar dependencias, publicar, cambiar DNS/dominio, subir a remoto ni asumir costos sin autorización aplicable. No cambiar permisos ni configurar secretos. No mostrar `.env*` en el cliente.
- Revisar Git y cambios ajenos antes de editar. Excluir Docs, secretos y dependencias. Crear commits solo con identidad Git ya configurada y solo para los archivos propios; nunca cambiar identidad global ni usar `git add .`.
- Verificar cambios con las comprobaciones pertinentes y distinguir compilación, revisión visual, prueba funcional y publicación. Formularios solo se prueban funcionalmente con canal de prueba autorizado.

No reemplazar estas restricciones al actualizar este archivo.
