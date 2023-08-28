<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de sostenibilidad de la huella hídrica

    .row.align-items-center.my-3.col-lg-12.m-auto        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema3/1.png').m-auto(data-aos="fade-right")
        .col
          pmb-0(data-aos="fade-up" ) Una vez calculado y determinado el volumen de agua usado y contaminado, es decir la huella hídrica, es necesario y fundamental ir más allá de este cálculo y hacer un análisis de sostenibilidad donde se compara los recursos hídricos consumidos con la disponibilidad existente.
          p.mb-2(data-aos="fade-up" style=" color: #00574F !important") Según Hoekstra, et, al., (2011) el análisis de sostenibilidad se basa en hacer una comparación entre la huella hídrica humana y lo que la tierra puede soportar de manera sostenible, teniendo en cuenta varios factores como son los colores de la huella hídrica, los impactos y sus niveles, como también las dimensiones social, económica y ambiental.
          .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#00574F; overflow-x: hidden !important")
            p.mb-2.py-2(style=" color: #FFF59D !important") Siendo necesario considerar desde puntos de vista y criterios distintos acorde a su aplicación. Los cuales permiten establecer cuándo una huella hídrica deja de considerarse sostenible, para lo cual existe un paso a paso o metodología para desarrollo el análisis, como por ejemplo en el caso específico del análisis de sostenibilidad para una cuenca hidrográfica, se empieza con la identificación y cuantificación de los criterios de sostenibilidad, se identifica los puntos críticos y los impactos primario y por último los impactos secundarios como se presenta en el siguiente recurso:
  
    .row.justify-content-center.m-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-lg
              p.my-5(style="position:relative") Identificación de los 
                b #[ criterios de sostenibilidad ]
                | (ambientales, sociales y económicos)                
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/2.png', alt='“Fases del análisis de sostenibilidad”. En la imagen se muestra un paso a paso que se debe seguir para considerar si la huella hídrica ha dejado de ser sostenible. Estos pasos son: ⦁ Identificación de criterios de sostenibilidad. ⦁ Identificación de puntos críticos. ⦁ Cuantificación de los impactos primarios. ⦁ Cuantificación de los impactos secundarios.').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/3.png', alt='“Identificación de puntos críticos”. En esta tarjeta se muestra como se indentifican los puntos críticos a nivel: ⦁ Social. ⦁ Económico. ⦁ Ambiental.').img125
            .col-lg
              p.my-5(style="position:relative") Identificación de los 
                b #[ puntos críticos ]
                | (subzonas de captación específicas, períodos del año)    
          .row
            .col-lg
              p.my-5(style="position:relative") Identificación y cuantificación de los 
                b #[ impactos primarios ]
                | en los puntos críticos.   
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/4.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/5.png', alt='').img125
            .col-lg
              p.my-5(style="position:relative") Identificación y cuantificación de los 
                b #[ impactos secundarios ]
                | en los puntos críticos.    

    p.m-5 La identificación de los puntos críticos permite analizar las implicaciones sociales, económicas y ambientales de forma detallada como se observa en el recurso, debido a que estos se originan cuando existe escasez de agua o niveles superiores de contaminación y, por su parte los impactos primarios hacen referencia al agua a la alteración que sufre mientras que los impactos secundarios tratan de los bienes y servicios ecológicos que se deterioran como consecuencia de los impactos primarios. Por ejemplo, la pérdida de biodiversidad, extinción de flora y fauna, afectación a la salud humana, pérdidas de ingresos monetarios, etc., tal como se muestra a continuación: 

    .row.justify-content-left.mb-5
        .col-sm-12.col-lg-4.mt-2
          .tarjeta--boton.color-secundario.p-4.min-height 
            .crd.crd--avatarHorizontal.crd--first.py-2
              .col.align-items-center                
                figure
                  img(src="@/assets/curso/temas/tema3/6.svg", alt="alt"  style="height: 120px").img250
              .col
                  h3.mt-3.mx-3.text-center Puntos críticos sociales 
              .col-sm-12.col-lg-10.mx-5
                ul(style="color:black").lista-ul--color.pt-4               
                  li
                    |● No se cubren las necesidades humanas básicas para todos los habitantes (equidad en el acceso.) <br>
                    |● Se pone en riesgo el trabajo (contaminación de agua que afecta a los pescadores) <br>
                    |● Los primeros usuarios contaminan el agua y no compensan a los últimos.                      
                    
        .col-sm-12.col-lg-4.mt-2
          .tarjeta--boton.color-secundario.p-4.min-height 
            .crd.crd--avatarHorizontal.crd--first.py-2
              .col.align-items-center                
                figure
                  img(src="@/assets/curso/temas/tema3/7.svg", alt="alt"  style="height: 120px").img250
              .col
                  h3.mt-3.mx-3.text-center Puntos críticos económicos 
              .col-sm-12.col-lg-10.mx-5
                ul(style="color:black").lista-ul--color.pt-4               
                  li
                    |● El agua no se usa ni se asigna de manera económicamente eficiente. <br>
                    |● El precio del agua para el usuario está por debajo de su coste económico real. <br>
                    |● No hay eficiencia en la asignación ni eficiencia productiva.                    

        .col-sm-12.col-lg-4.mt-2
          .tarjeta--boton.color-secundario.p-4.min-height 
            .crd.crd--avatarHorizontal.crd--first.py-2
              .col.align-items-center                
                figure
                  img(src="@/assets/curso/temas/tema3/8.svg", alt="alt"  style="height: 120px").img250
              .col
                  h3.mt-3.mx-3.text-center Puntos críticos ambientales
              .col-sm-12.col-lg-10.mx-5
                ul(style="color:black").lista-ul--color.pt-4               
                  li
                    |● No se garantiza agua para los ecosistemas. <br>
                    |● Se excede la disponibilidad de agua para la subsistencia humana. <br>
                    |● Excedencia de la capacidad de asimilación de contaminantes.                     
                                
    p.m-5 Estos impactos de la huella hídrica varían dependiendo de varios factores como son la disponibilidad de recursos hídricos en el lugar determinado, el nivel de competencia entre los usuarios del agua, la capacidad de asimilación de los sistemas del agua; pero se tiene que el impacto del consumo de agua o la contaminación en un lugar determinado es claramente mayor cuando el volumen de consumo de agua o la contaminación es relativamente importante y cuando la escasez local de agua es relativamente alto también.

    .row.py-3.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-1
              img.m-3(src='@/assets/curso/temas/tema3/9.svg', style="width:80px")
            .col-sm-12.col-lg-11
              p.m-2.mt-4 Pero, en conclusión, el objetivo principal de realizar el análisis de sostenibilidad es lograr tomar medidas apropiadas para reducir la huella hídrica y mitigar sus impactos, mediante una responsabilidad compartida entre productores, consumidores, agricultores, gobierno y demás actores.


</template>

<script>
export default {
  name: 'Tema3',
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
