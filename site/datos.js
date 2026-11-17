/* =========================================================
   DATOS EDITABLES DE LA WEB DE ASB MULTIRUBROS
   Cambiá solo lo que está entre comillas "...". No borres comas,
   llaves ni corchetes. Después de editar, volvé a subir la carpeta
   a Cloudflare Pages (ver COMO-ACTUALIZAR.md).
   ========================================================= */

// WhatsApp en formato internacional, sin +, espacios ni guiones.
// Celular argentino: 549 + código de área + número. Ejemplo: 5491130011523
const WHATSAPP_NUMBER = "5491130011523";

// Datos de contacto que se muestran en la sección Contacto.
// Si dejás un dato vacío (""), ese renglón no se muestra.
const CONTACTO = {
  whatsappVisible: "11 3001-1523",
  correo: "asbmultirubros@gmail.com",
  horario: "de 8:00 a 17:00",          // podés agregar días cuando se confirmen, por ejemplo: "lunes a viernes, de 8:00 a 17:00"
  zona: "Ciudad Autónoma de Buenos Aires (CABA)",
  instagram: "asbmultirubroscaba",      // usuario, sin @
  tiktok: "asbmultirubroscaba"          // usuario, sin @
};

// Mensajes que se escriben solos al abrir WhatsApp.
const MESSAGES = {
  general: "Hola, quisiera hacer una consulta por un trabajo.",
  consorcio: "Hola, soy administrador/a de un consorcio o edificio y quiero consultar por un trabajo.",
  particular: "Hola, quiero consultar por un trabajo para mi vivienda.",
  galeria: "Hola, vi este trabajo en la web y quiero consultar: "
};

// Servicios: nombre y descripción breve.
const SERVICES = [
  {nombre:"Plomería y sanitarios", desc:"Pérdidas y problemas de cañerías, desagües, griferías, tanques de agua, bombas y calefones."},
  {nombre:"Gas", desc:"Instalaciones y trabajos en cañerías y llaves de paso, y pruebas de hermeticidad."},
  {nombre:"Albañilería y mampostería", desc:"Reparaciones y mejoras en paredes y muros de viviendas y edificios."},
  {nombre:"Revestimientos y pisos", desc:"Reparaciones y mejoras en revestimientos y pisos."},
  {nombre:"Pintura", desc:"Pintura de paredes y ambientes para renovar y mantener viviendas y edificios."},
  {nombre:"Impermeabilización y techos", desc:"Filtraciones, humedad y trabajos en techos y terrazas."},
  {nombre:"Cerrajería y carpintería", desc:"Trabajos de cerrajería y carpintería en viviendas y edificios."},
  {nombre:"Mantenimiento general y limpieza", desc:"Tareas de mantenimiento general y limpieza en viviendas y espacios comunes de edificios."}
];

// Trabajos realizados (galería). Mientras la lista esté vacía, la web
// muestra "Estamos reuniendo fotos". Para agregar un trabajo, copiá este
// modelo dentro de los corchetes, sin las barras // del comienzo:
//   {titulo:"Título breve", categoria:"Impermeabilización y techos", zona:"CABA",
//    descripcion:"Qué se hizo, en una o dos frases.",
//    imagen:"img/nombre-de-la-foto.jpg", alt:"Descripción de la foto"},
// Las fotos van en una carpeta llamada img dentro de esta misma carpeta.
// Separá cada trabajo con una coma. "zona" es opcional.
const PROJECTS = [
];
