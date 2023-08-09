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
    
      .container.tarjeta(data-aos="fade-right" alt="“Huella hídrica del sector agropecuario”. En este Slider, se habla del agro como en lugar donde mayor huella hídrica se presenta pues es donde más se consume agua. Se dan a conocer las entidades encargadas de entregar la información necesaria para el cálculo de la huella hídrica tal es el caso de: Ministerio de Agricultura y Desarrollo Rural de Colombia (MADR), el Instituto Geográfico Agustín Codazzi, la Organización de las naciones unidas para la alimentación y la agricultura (FAO), el IDEAM, el Departamento de estadística nacional (DANE) entre otros.")        
        SlyderC.mb-0(:datos="datosSlyder")

    .titulo-principal.color-acento-contenido    
    p.mb-5.py-1 La metodología empleada para recolectar información, se basa en los resultados de evapotranspiración (ET), debido a que es fundamental partir del requerimiento y evaporación del recurso hídrico y a través de este concepto (ET) se logra combinar estos dos procesos (evaporación y transpiración), la evaporación de agua del cultivo mediante la superficie del suelo y la transpiración propia del cultivo. Se debe realizar un balance de agua en el suelo y así determinar los requerimientos de agua en los cultivos y  busca diferenciar la parte de la evapotranspiración que se suple con el riego, relacionada con el agua azul definida como la ETaazul; y la parte que se suple con agua de lluvia, que está relacionada con el agua verde y definida como la ETaverde. Para lo cual se emplean las siguientes ecuaciones para la huella hídrica azul y verde:

    .row.justify-content-center.mb-0(data-aos="fade-right", alt="“Ecuaciones huella hídrica”. En estas tarjetas se presentan dos fórmulas matemáticas utilizadas para hallar la huella hídrica azul y verde.")
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style="background-color:#B3DDFF; overflow-x: hidden !important") 
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/6.png',)

          h3.text-center HH azul = 10 * Eta azul * As
          .col-sm-12.col-lg-9.mx-5
            ul(style="color:black").lista-ul--color.pt-4               
              li
                |● 
                b #[i HH verde: ]  
                | Huella hídrica azul (m3/mes) 
              li
                |● 
                b #[i Eta verde: ]  
                | corresponde a la evapotranspiración mensual azul ajustada (mm)
              li
                |● 
                b #[i As: ]  
                | área sembrada (ha). El *10* representa el factor de conversión que permite incorporar la evapotranspiración en mm y el área sembrada en ha para obtener la huella hídrica azul m³
           
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-adicional-3.p-4(style="background-color:#A5D6A7; overflow-x: hidden !important")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/7.png', )

          h3.text-center HH verde = 10 * Eta azul x As
          .col-sm-12.col-lg-9.mx-5
            ul(style="color:black").lista-ul--color.pt-4                
              li
                |● 
                b #[i HH azul: ]  
                | Huella hídrica verde (m3/mes)
              li
                |● 
                b #[i Eta azul: ]  
                | evapotranspiración mensual dada en mm
              li
                |● 
                b #[i As: ]  
                | corresponde al área sembrada de cultivo o tipo de pasto
    p.mt-5 
    | Es importante aclarar que los resultados obtenidos en los diferentes estudios sobre  la cuantificación de los millones de metros cúbicos de agua consumidos en el año por diferentes productos agrícolas difieren significativamente, ya que la huella hídrica promedio por tonelada de cultivo primario varía entre cultivos y regiones de producción; por ejemplo en el reporte de presentado por la WWF (2002) “Una mirada a la agricultura de Colombia desde su Huella Hídrica” que es considera una de las principales organizaciones de conservación de la naturaleza a nivel global, se realiza la estimación de la huella de la producción agrícola de Colombia, estableciendo que el producto con mayor huella hídrica (azul, verde y gris) es el café, mientras que entre los menores se encuentra el coliflor, como se observa en la figura 4.

    .row.align-items-center.my-5.col-lg-12.m-auto              
      .col
        p(data-aos="fade-up" style="overflow-x: hidden !important") Mientras que los resultados de evaluación multisectorial de la huella hídrica en Colombia, donde se realiza la cuantificación para diversos sectores productivos publicados por el IDEAM en el año 2015, arrojan como se puede analizar en la figura 5 que la huella hídrica azul (HHA) de los cultivos permanentes corresponde a 3.918,4 millones de m3 /año; el valor mayor corresponde al cultivo de palma de aceite, seguido del plátano y la caña de azúcar, para el cultivo de café no se reportó HHA, debido a que se considera que este cultivo no se riega en Colombia, Y, para los cultivos transitorios, la HHA anual es de 847,1 millones de m3; teniendo el valor mayor el arroz de riego, seguido de la papa y el maíz. Y, el menor valor fue para el cultivo de soya. En lo relacionado con la huella hídrica verde (HHV) (figura 6), para los cultivos permanentes, el mayor de valor de HHV fue para el café (11.822,3 millones de m3 /año), seguido por el cultivo de caña, palma de aceite y plátano. Y en relación a los cultivos transitorios, es el maíz es el de mayor HHV, seguido del arroz de riego y el secano mecanizado. Por su parte, las menores HHV las presentan la zanahoria, el tomate y el trigo.
        p(data-aos="fade-up" style="overflow-x: hidden !important") Por su parte, el estudio a nivel mundial adelantado por Mekonnen, M. M., & Hoekstra, A. Y., en el año 2011, denominado la huella hídrica verde, azul y gris de los cultivos y productos derivados de cultivos, determinó que la huella hídrica global relacionada con la producción de cultivos en el período 1996-2005 fue de 7404 mil millones de metros cúbicos por año (78 % verde, 12 % azul, 10 % gris) Se calculó una gran huella hídrica total para el trigo (1087), el arroz (992) y el maíz (770) El trigo y el arroz tienen las huellas de agua azul más grandes, y juntos representan el 45 % de la huella de agua azul mundial.
      .col-auto
        figure
          img(src='@/assets/curso/temas/tema2/8.svg').m-auto(data-aos="fade-right")   

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Huella hídrica del sector agropecuario',
        texto:
          'Este sector es el que presenta mayor huella hídrica, debido a que es el principal consumidor de agua, lo que genera la existencia de una fuerte relación con el recurso hídrico y por ende los requerimientos de agua azul o verde tienen un importante impacto en el territorio.',
        imagen: require('@/assets/curso/temas/tema2/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Huella hídrica del sector agropecuario',
        texto:
          'Según Hoeskstra y Chapagain (2008) se calcula que el 86% de la huella hídrica de los seres humanos está relacionada con el sector agrícola; además, para el caso de Colombia su economía se basa en gran parte del sector agropecuario, siendo un país productor de café, las flores, el banano, el cacao, arroz, entre muchos otros productos.',
        imagen: require('@/assets/curso/temas/tema2/5.1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Huella hídrica del sector agropecuario',
        texto:
          'Para lograr realizar el cálculo de la huella hídrica de este sector, se requiere inicialmente de la información estadística sobre los cultivos agrícolas, pecuarios, pastos, clima, suelo, áreas sembradas y demás que sea relevante.   ',
        imagen: require('@/assets/curso/temas/tema2/5.2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Huella hídrica del sector agropecuario',
        texto:
          'Esta información debe ser obtenida de fuentes confiables como por ejemplo el  Ministerio de Agricultura y Desarrollo Rural de Colombia (MADR), el Instituto Geográfico Agustín Codazzi, la Organización de las naciones unidas para la alimentación y la agricultura (FAO), el IDEAM, el Departamento de estadística nacional (DANE), etc.',
        imagen: require('@/assets/curso/temas/tema2/5.3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Huella hídrica del sector agropecuario',
        texto:
          'Al ser el sector agropecuario muy grande incluye una gran variedad de subsectores y sistemas agrícolas, es necesario obtener información referente a los cultivos suministrada por las diferentes entidades y gremios como Asocaña, Fedearroz, Fenalce, Fedepalma y Fedecafé, entre otros.',
        imagen: require('@/assets/curso/temas/tema2/5.4.png'),
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
