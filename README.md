# ASB Multirubros: sitio web

Sitio estático (HTML, CSS y JavaScript) de ASB Multirubros. Dominio previsto: https://asbmultirubros.com

## Estructura
- `site/`: lo que se publica (`index.html`, `datos.js`, `404.html`, `robots.txt`, `sitemap.xml`, `_headers`, `favicon.svg`; las fotos van en `site/img/`).
- `netlify.toml`: le indica a Netlify que publique la carpeta `site` y que no hay compilación.
- `COMO-ACTUALIZAR.md`: guía para cambiar datos y publicar.

## Publicación con Git + Netlify
1. Subir este proyecto a un repositorio de GitHub (puede ser privado).
2. En Netlify: Add new project > Import an existing project > GitHub > elegir el repositorio.
3. Dejar vacío el comando de compilación. La carpeta de publicación (`site`) la toma de `netlify.toml`.
4. Deploy. Desde ahí, cada cambio que se suba a la rama principal (`main`) se publica solo.
5. Conectar el dominio: Domain management > Add a domain > `asbmultirubros.com` y seguir los pasos de DNS.

No se supone que el dominio esté conectado ni que la web esté publicada hasta completar estos pasos.
