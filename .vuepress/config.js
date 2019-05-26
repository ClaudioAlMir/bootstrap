module.exports = {
  title: 'Bootstrap 4',
  description: 'Aprende a utilizar Bootstrap 4 en tus proyectos web',
  base: '/bootstrap/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Inicio', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      // { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Completo Bootstrap 4', link: 'https://goo.gl/PCDzNm' },
      { text: 'Curso HTML y CSS', link: 'https://www.udemy.com/curso-html5-css3/' },
    ],
    sidebar:{
      '/':[
        '',
        'fundamentos',
        'practica'
      ]
    }
  }
 
}