export default {
  global: {
    componenteFormativo: 'Evaluación y análisis de la huella hídrica',
    descripcionCurso:
      'En este componente formativo se abordan temáticas relacionadas con la información sobre el estado y dinámica de las aguas en el país establecida el estudio nacional del agua realizado por el IDEAM, además se describirán las metodologías y fórmulas para calcular la huella hídrica, el análisis de sostenibilidad y las medidas existentes para reducir y mitigar la huella.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio nacional del agua',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cuantificación de la huella hídrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Huella hídrica del sector productivo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Huella hídrica de una etapa del proceso',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Huella hídrica de un producto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Huella hídrica de un consumidor o grupo de consumidores',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Huella hídrica de un área geográfica',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de sostenibilidad de la huella hídrica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medidas para reducir y mitigar la huella hídrica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_22230050.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estudio nacional del agua',
      referencia:
        'IDEAM (2019). Estudio Nacional del Agua 2018. Bogotá: IDEAM: 452 pp.',
      tipo: 'Documento',
      link:
        'https://cta.org.co/descargables-biblionet/agua-y-medio-ambiente/Estudio-Nacional-del-Agua-2018.pdf?',
    },
    {
      tema: 'Cuantificación de la huella hídrica',
      referencia:
        'Zárate Torres, E., Fernández Poulussen, A., Kuiper, D., Resiliencia, P. I., & Europea, U. (2017). Guía metodológica para la evaluación de la huella hídrica en una cuenca hidrográfica.',
      tipo: 'Documento',
      link:
        'https://repositorio.iica.int/bitstream/handle/11324/2996/BVE17068913e.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Cuantificación de la huella hídrica',
      referencia:
        'Arévalo, d., & Campuzano, C. (2013). Evaluación de la Huella Hídrica en la cuenca del río Porce. Resumen de resultados. Agencia suiza para el desarrollo y la cooperación COSUDE. Medellín: Adhouse, 54.',
      tipo: 'Documento',
      link:
        'https://cta.org.co/biblionet/evaluacion-de-la-huella-hidrica-en-la-cuenca-del-rio-porce/',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de sostenibilidad',
      significado:
        'Comparación de los recursos hídricos consumidos con la disponibilidad existente. Se basa en hacer una comparación entre la huella hídrica humana y lo que la tierra puede soportar de manera sostenible, teniendo en cuenta varios factores como son los colores de la huella hídrica, los impactos y sus niveles, como también las dimensiones social, económica y ambiental.',
    },
    {
      termino: 'Cuantificar',
      significado: 'Expresar numéricamente una magnitud',
    },
    {
      termino: 'Demanda hídrica',
      significado:
        'Eliminación de agua de cualquier fuente, ya sea permanentemente o de forma temporal. Extracción hídrica del sistema natural destinada a suplir las necesidades o requerimientos del consumo humano, la producción sectorial y las demandas esenciales de los ecosistemas no antrópicos.',
    },
    {
      termino: 'Evaluación integral de la huella de agua',
      significado:
        'Evaluación de huella de agua que cumple con el principio de integridad, considerando todos los atributos ambientales pertinentes o aspectos del ambiente, la salud humana y los recursos relacionados con el agua, incluyendo la disponibilidad y la degradación.',
    },
    {
      termino: 'Huella hídrica',
      significado:
        'Indicador del agua dulce usada, alterada y contaminada directa o indirectamente por la humanidad, que permite evaluar los riesgos asociados y desarrollar estrategias para mitigarlos.',
    },
    {
      termino: 'Metodología',
      significado:
        'Grupo de mecanismos o procedimientos racionales, empleados para el logro de un objetivo, o serie de objetivos que dirige una investigación científica. Este término se encuentra vinculado directamente con la ciencia.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Conjunto de medidas para contrarrestar o minimizar los impactos ambientales negativos.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Desarrollo que asegura satisfacer las necesidades de las generaciones presentes sin comprometer las necesidades de las generaciones futuras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Becerra, A. T., Bravo, X. B. L., & Membrive, V. J. F. (2013). Huella hídrica y sostenibilidad del uso de los recursos hídricos. M+ A: Revista Electrónica de Medioambiente, 14(1), 56.',
      link: '',
    },
    {
      referencia:
        'Campuzano-Ochoa, C. A., González-Valencia, J. E., Guzmán-Cabrera, A. C., Rodríguez-Ortiz, C. M., Arévalo-Uribe, D., & Parada-Puig, G. (2014). Evaluación multisectorial de la huella hídrica en Colombia. Resultados por subzonas hidrográficas en el marco del Estudio Nacional del Agua',
      link: '',
    },
    {
      referencia:
        'Falkenmark, M. y Rockström, J. (2004) Balancing Water for Humans and Nature: The New Approach in Ecohydrology, Earthscan, Londres.',
      link: '',
    },
    {
      referencia:
        'Hoekstra, A. Y., Chapagain, A. K., Mekonnen, M. M., & Aldaya, M. M. (2011). The water footprint assessment manual: Setting the global standard. Routledge.',
      link: '',
    },
    {
      referencia:
        'Hoekstra, A. Y. y Chapagain, A. K. (2008) Globalization of Water: Sharing the Planet’s Freshwater Resources, Blackwell Publishing, Oxford.',
      link: '',
    },
    {
      referencia:
        'Hoekstra, A. Y. (2008a) “Water neutral: Reducing and offsetting the impacts of water footprints”, Value of Water Research Report Series, n.º28, UNESCO-IHE, Delft, Holanda,',
      link:
        'https://www.waterfootprint.org/resources/Report28-WaterNeutral.pdf',
    },
    {
      referencia:
        'IDEAM. (2010). Estudio Nacional del Agua 2010. Instituto de Hidrología, Meteorología y Estudios Ambientales. Bogotá D.C',
      link: '',
    },
    {
      referencia:
        'IDEAM. (2015). Estudio Nacional del Agua 2014. Bogotá, D. C., 496 páginas. ISBN: 978-958-8067-70-4',
      link: '',
    },
    {
      referencia:
        'IDEAM (2019). Estudio Nacional del Agua 2018. Bogotá: IDEAM: 452 pp',
      link: '',
    },
    {
      referencia:
        'Mekonnen, M. M., & Hoekstra, A. Y. (2011). The green, blue and grey water footprint of crops and derived crop products. Hydrology and Earth System Sciences, 15(5), 1577-1600.',
      link: '',
    },
    {
      referencia:
        'WWF. (2012). Una mirada a la agricultura de Colombia desde su Huella Hídrica.',
      link: 'https://wwfeu.awsassets.panda.org/downloads/hh_colombia_6b.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yisela Andrea Vidales Vásquez',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Caterine Bedoya Mejía ',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Corrector de estilo ',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Sergio Ausguto Ardila Ortiz',
          cargo: 'Diseñador instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
