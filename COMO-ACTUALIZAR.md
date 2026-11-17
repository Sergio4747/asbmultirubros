# Cómo actualizar la web de ASB Multirubros

Casi todo lo que cambia con el tiempo está en **`site/datos.js`**. Se abre con el Bloc de notas o con cualquier editor de texto. Cambiá solo lo que está entre comillas y no borres comas, llaves ni corchetes.

## Qué se cambia en `datos.js`
- **WhatsApp:** `WHATSAPP_NUMBER` (formato `549` + código de área + número, sin espacios ni signos) y `whatsappVisible` (el texto que se ve).
- **Correo, horario, zona, Instagram y TikTok:** dentro de `CONTACTO`. Un dato vacío (`""`) oculta ese renglón. Los días de atención se escriben en `horario` cuando se confirmen.
- **Mensajes de WhatsApp:** `MESSAGES`.
- **Servicios:** `SERVICES`.
- **Fotos de trabajos:** `PROJECTS`. Mientras esté vacía, la web muestra "Estamos reuniendo fotos". Copiá el modelo del archivo, sin las barras `//`.

## Fotos de trabajos
1. Creá la carpeta `site/img/` y guardá ahí las fotos (livianas, de menos de 500 KB; nombres sin espacios, por ejemplo `terraza-1.jpg`).
2. Agregá el trabajo en `PROJECTS` con `imagen:"img/terraza-1.jpg"`. Usá solo fotos propias y autorizadas.

## Lo que está en `site/index.html`
Los textos de las secciones, los "más de 35 años de experiencia", los pasos de "Cómo trabajamos", las preguntas frecuentes y el bloque para buscadores (`application/ld+json`, con teléfono, correo y redes). Buscalos con Ctrl+F. Si cambian el teléfono, el correo o las redes, actualizalos también en ese bloque.

## Cómo publicar los cambios (con GitHub Desktop, sin comandos)
1. Editá los archivos de la carpeta del proyecto.
2. Abrí GitHub Desktop: vas a ver los archivos cambiados.
3. Escribí un mensaje corto abajo a la izquierda (por ejemplo "Agrego horario de sábados") y tocá **Commit to main**.
4. Tocá **Push origin**.
5. Netlify detecta el cambio y publica solo; en su pestaña Deploys se ve el avance. Si no lo ves enseguida, recargá con Ctrl+F5.

## Lo mismo con comandos
```
git add .
git commit -m "Mensaje corto del cambio"
git push
```

## Otras opciones
- **Pedirme los cambios:** me pasás qué cambiar (un horario, un servicio, fotos con sus textos) y te devuelvo los archivos para reemplazar en el proyecto.
- **Editar en GitHub desde el navegador:** en el repositorio abrís el archivo, tocás el lápiz, editás y guardás con Commit; Netlify publica igual.
