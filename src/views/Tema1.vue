<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estudio nacional del agua
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        figure
          .row.justify-content-center(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/1.svg" data-aos="zoom-in-up" alt= " ")

    p.mt-5 En Colombia, el Instituto de Hidrología Meteorología y Estudios Ambientales – IDEAM que es la máxima autoridad ambiental, realiza el reporte de información sobre el estado y dinámica de las aguas del país, datos que, publican periódicamente mediante el Estudio Nacional del Agua ENA. Específicamente, el objetivo de este estudio es establecer la actual y futura situación del agua en aspectos relacionados con la oferta, demanda, calidad, disponibilidad y riesgo hidrológico a partir de su dinámica e interacciones con la sociedad y el medio ambiente. Esto sirve como base para que a partir de los resultados publicados se adopten decisiones sobre los usos, conservación y cuidado del agua.

    .row.pt-5.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-1
              img.m-3(src='@/assets/curso/temas/tema1/2.svg', style="width:80px")
            .col-sm-12.col-lg-11
              p.m-2.py-1 El conocimiento de la información del patrimonio hídrico y su comportamiento ante factores como el cambio climático y demás que generan variabilidad es de gran relevancia; debido a que, la importancia de este líquido vital es necesario para desarrollo de la vida, lo que implica desarrollar una gestión integral de este recurso, donde el uso sea de manera responsable, eficiente y sostenible, direccionado a preservar  su calidad y cantidad, así, permite la conservación de los ecosistemas y la vida en general de los seres humanos. 

    p.mt-5 Además, aunado a lo anterior, debe existir la prevención y evaluación de riesgos y alteraciones de las condiciones naturales por actividades antropológicas, para así lograr definir estrategias integrales de conservación de los sistemas hídricos, los cuales, incluyan la participación de los diversos sectores e instituciones. Para lo cual, el Estudio Nacional del Agua (ENA), estableció un modelo básico de evaluación integrada del agua como se observa a continuación en el siguiente video: 
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mt-5 Según lo visto, el modelo básico de evaluación integrada del agua, tiene en cuenta  las características y procesos del agua, es decir, el ciclo del agua, para a raíz de esta identificación lograr conocer las afectaciones generadas por el uso y contaminación en los procesos de transformación, lo que permite determinar los efectos e impactos sobre el recurso hídrico y así lograr establecer políticas orientadas a la gestión integral del recurso hídrico.

    .row.p-5.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-2
              img.m-3.pt-4(src='@/assets/curso/temas/tema1/3.svg', )
            .col-sm-12.col-lg-2
              img.m-3.pt-4(src='@/assets/curso/temas/tema1/4.svg', )
            .col-sm-12.col-lg-2
              img.m-3.pt-4(src='@/assets/curso/temas/tema1/5.svg', )    
            .col-sm-12.col-lg-6
              p.m-2.py-1 Para lograr determinar el estado de recurso hídrico en el país, el IDEAM en el documento del Estudio Nacional del Agua - ENA, emplea unos indicadores tales como: la aridez, regulación hídrica, rendimiento de sedimentos y sequía que permiten establecer el estado natural del recurso y, otros indicadores como los de estado de calidad y presión por contaminación, los de presión por uso del agua y los de riesgo que definen las variaciones debido a la intervención antrópica y sus efectos de carácter parcial o total y temporal o definitivo en la calidad y cantidad del agua, esto facilita explicar la relación entre oferta y demanda del agua tanto superficial como subterránea, como lo describe el gráfico de Sistema de indicadores hídricos a continuación:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8
        figure
          .row.justify-content-center(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/6.svg" data-aos="zoom-in-up" alt= " ")


    p.mt-5 En conclusión, se tiene que gran variedad de factores naturales como los antrópicos afectan la disponibilidad, calidad y cantidad del recurso hídrico, teniendo gran influencia sobre el nivel de afectación y la vulnerabilidad de los sistemas hídricos, así como la gestión que se realice.

    .row.pt-5.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #E1F5FE; border-radius: 15px")
          .row
            .col-sm-12.col-lg-3
              img.m-4(src='@/assets/curso/temas/tema1/8.svg', style="width:200px")
            .col-sm-12.col-lg-9
              p.m-2.py-5 Por tanto, desempeña un papel de gran importancia la demanda hídrica; la cual, hace referencia a la extracción de agua de cualquier fuente con la finalidad de satisfacer las necesidades del consumo humano, de la producción de los diferentes sectores o actividades económicas y los requerimientos esenciales de los ecosistemas para su sostenimiento. En esa medida, esto genera alteración, desviación y retención del recurso hídrico, como también pérdidas que pueden presentarse desde el punto de captación hasta la descarga nuevamente en la fuente. 


    



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
