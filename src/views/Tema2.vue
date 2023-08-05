<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cuantificación de la huella hídrica

    p.mb-5.py-1 La demanda hídrica hace referencia a la extracción de agua para un uso determinado y para su cuantificación se emplea la huella hídrica, esta, tiene por objetivo dar cuenta del uso del agua y su contaminación, debido a  que es un indicador de consumo y contaminación con fines productivos, además, permite saber el volumen de agua directa e indirecta usada y contaminada que se emplea. 
    .row.align-items-center.my-3.col-lg-12.m-auto        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema2/1.svg').m-auto(data-aos="fade-right")
        .col
          p(data-aos="fade-up" style="overflow-x: hidden !important") Existen diversas metodologías para la cuantificación de la huella hídrica, entre las que se encuentra la de la Water Footprint Network (WFT) que tiene un enfoque volumétrico que permite cuantificar el volumen de agua usado y con este determinar el impacto humano sobre los recursos globales de agua dulce y aporta una base para formular las estrategias enfocadas a minimizar los impactos negativos generados sobre el agua.
          .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#FFF59D; overflow-x: hidden !important")
            p.mb-2.py-2(style="overflow-x: hidden !important") La otra metodología es la ISO 14046 del 2014 que se basa en el análisis del ciclo de vida, siendo útil para realizar estudios relacionados con la sostenibilidad ambiental de un producto o una organización, ya que además de contabilizar el agua consumida, realiza una evaluación de los impactos medioambientales relacionados con dicho consumo, a través de distintos indicadores relacionados con el agua.

    .row.py-3.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-1
              img.m-3(src='@/assets/curso/temas/tema2/2.svg', style="width:80px")
            .col-sm-12.col-lg-11
              p.m-2.py-1 La selección de la metodología empleada para la cuantificación de la huella hídrica, depende de diversos factores, entre los que se encuentran el acceso y disponibilidad de la información requerida, la población al que va dirigido, el tipo de agua empleada y extraída, el grado de detalle que se quiere alcanzar con el estudio; todo esto define como sería el procedimiento de cuantificación

      p.mb-0.py-5(data-aos="fade-up") Siendo posible emplear en el proceso de cuantificación de la huella hídrica más de una metodología, ya que estas son compatibles y complementarias, permitiendo obtener un estudio más detallado, mediante herramientas que permiten desarrollar una evaluación y a su vez una gestión sostenible de este recurso natural, en diferentes campos de aplicación.
    
        Separador.mt-0


      .cont_2_1(style="position:relative;")
        .titulo-segundo.color-acento-contenido(style="position:relative")
          h2#t_2_1 2.1  Huella hídrica del sector productivo.   

        p.mb-5.py-1 Todos los sectores productivos usan agua en el desarrollo de sus actividades, es decir, hacen una demanda hídrica como se observa en la figura 1 y, mediante la cuantificación de la huella hídrica, se puede establecer el volumen de agua directa e indirecta usada y contaminada asociada al desarrollo de la actividad económica y el proceso productivo del sector, para así lograr fortalecer el concepto de sostenibilidad ambiental, encaminado al aprovechamiento y uso racional del recurso.
        p.mb-5.py-1 Dentro los sectores productivos más estudiados, a los cuales se les ha determinado la huella hídrica en diversos países, están:

      .row.align-items-center.my-5.col-lg-8.m-auto        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema2/3.svg').m-auto(data-aos="fade-right")

      .row.justify-content-center.mb-5(data-aos="fade-right")        
        .col-sm-12.col-lg-10
          .titulo-sexto.mb-0.color-secundario.mb-1
            p.mb-0 #[b Figura 2] 
              i Componentes de la huella hídrica 

      .row.align-items-center.my-0.col-lg-10.m-auto.mb-5        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema2/4.svg').m-auto(data-aos="fade-right")

      p.mb-5.py-1 A nivel mundial se han adelantado por varias entidades de carácter público y privado estudios sobre la cuantificación de la huella hídrica los cuales, han permitido conocer el volumen real de agua empleado por cada sector de la economía; para el caso específico de Colombia, el Instituto de Hidrología Meteorología y Estudios Ambientales – IDEAM en coordinación con Embajada Suiza - Agencia Suiza para la Cooperación y el Desarrollo – COSUDE, Good Stuff International Latinoamérica y El Caribe GSI-LAC y Corporación Centro de Ciencia y Tecnología de Antioquia –CTA, llevaron a cabo la evaluación multisectorial de la huella hídrica en Colombia, donde se realiza la cuantificación para diversos sectores productivos, en los que se incluyen agropecuario, doméstico, industrial, energético y petrolero. A pesar de que el objetivo para cada sector es cuantificar la huella hídrica, todos emplean fórmulas y procedimientos distintos, acordes a la información existente y a los resultados que se quieren obtener.
      p.mb-5.py-1 El siguiente recurso toma por ejemplo el sector agropecuario:

      .row.align-items-center.my-0.col-lg-12.m-auto.mb-5        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema2/5.png').m-auto(data-aos="fade-right")

    
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        SlyderB.mb-5(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
