export default [
  {
    id: 'ICAO01',
    urlImage: 'amk.jpeg',
    title: 'AMK Technologies',
    type: 'Sitio Web',
    descriptions: {
      paragraphs: [
        'Fue un sitio web empresarial con diseño personalizado provisto por el área de diseño.',
        'Se enfocó en el manejo de sliders y tabs con sliders, así como pixel perfect.',
        'El sitio fue hecho responsivo cuidando la semántica HTML para garantizar el SEO, se procuró optimizar lo más posible en la carga de las imágenes, aunque fue limitado por el tiempo de entrega.',
      ],
      technologies: ['SCSS', 'HTML5', 'Javascript(ES6)', 'Gulp Task Runner'],
    },
    link: 'https://bit.ly/3MvMX67',
  },
  {
    id: 'ICAO02',
    urlImage: 'twt.jpeg',
    title: 'The World Times',
    type: 'Aplicación Web',
    descriptions: {
      paragraphs: [
        'Aplicación web de noticias del día hecho con React.',
        'Se desarrolló bajo un diseño propio y la garantía de ser responsivo para todos los dispositivos móviles, se implementó un diseño  masonry usando CSS Grid Layout',
        'Se usaron los ciclos de vida de React para suscribir events listeners y generar el Masonry Grid, así como también para el llamado de un API RESTful que provee la lista de artículos. Se consumió el servicio gratuito API News de Mediastack.',
      ],
      technologies: [
        'Reactjs',
        'Materialize',
        'Custom CSS',
        'API News de Mediastack',
      ],
    },
    link: 'http://project-04-the-world-times.surge.sh',
  },
  {
    id: 'ICAO03',
    urlImage: 'bm.jpeg',
    title: 'Browser Movies',
    type: 'Aplicación Web',
    descriptions: {
      paragraphs: [
        'Aplicación web, buscador de peliculas.',
        'Esta aplicación muestra una lista de resultados de acuerdo a una palabra clave relacionado con el título de la película.',
        'Se implementó la paginación de los resultados, la persistencia de la búsqueda y la visualización de más información detallada de los resultados.',
        'Se hizo el consumo de la API RESTfull omdb que provee la lista de peliculas.',
      ],
      technologies: ['Reactjs', 'React Router', 'Bulma CSS', 'OMDb API'],
    },
    link: 'http://project-02-search-movies-v2.surge.sh/',
  },
  {
    id: 'ICAO04',
    urlImage: 'evently.jpeg',
    title: 'Evently',
    type: 'Aplicación Web',
    descriptions: {
      paragraphs: [
        'Aplicación web para buscar imágenes de stock.',
        'Esta aplicación despliega una lista de resultados mediante un filtro de búsqueda basado en categorías.',
        'Los resultados son desplegados visualmente en  como respuesta al llamado de un API RESTful que provee imágenes de Stock.',
        'Para la gestión del estado se usó Context API, así como la api de Pixabay.',
      ],
      technologies: ['Reactjs', 'Context API', 'Custom CSS', 'Pixabay API'],
    },
    link: 'http://project-05-context-api-buscador-imagenes.surge.sh/',
  },
  {
    id: 'ICAO05',
    urlImage: 'codepen.jpeg',
    title: 'CODEPEN',
    type: 'Open Source',
    descriptions: {
      paragraphs: [
        'Varias colecciones y componentes de interfaces e interacción.',
      ],
      // technologies: [],
    },
    link: 'https://codepen.io/icao',
  },
  {
    id: 'ICAO06',
    urlImage: 'vscode.jpeg',
    title: 'VSCode Themes',
    type: 'Open Source',
    descriptions: {
      paragraphs: [
        'Temas para VSCODE, el editor de código mas usado en el mundo.',
        'Inheritance Theme & Electron Vue Theme',
      ],
      // technologies: [],
    },
    link: 'https://marketplace.visualstudio.com/publishers/icao',
  },
  {
    id: 'ICAO07',
    urlImage: 'wox.png',
    title: 'Jeeves - Theme for WOX launcher',
    type: 'Open Source',
    descriptions: {
      paragraphs: [
        'Tema para WOX lanzador de aplicaciones más usado en windows 10 y 11.',
      ],
      // technologies: [],
    },
    link: 'https://github.com/icao/wox-themes',
  },
]
