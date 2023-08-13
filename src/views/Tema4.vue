<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas para reducir y mitigar la huella hídrica.

    .row.align-items-center.my-5.col-lg-12.m-auto        
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema4/1.svg').m-auto(data-aos="fade-right")
        .col
          p.mb-0(data-aos="fade-up" ) Cada vez el término huella hídrica es más conocido y apropiado por los diferentes actores de la sociedad, reconociendo que es un indicador del uso del agua; lo que conlleva a pensar y hacer el pregunta de qué hacer para reducir huella hídrica que generamos, encontrando la respuesta en la neutralidad del agua, que según Hoekstra, A. Y. (2008ª) significa reducir la huella hídrica de una actividad tanto como sea razonablemente posible y compensa las externalidades negativas de la huella hídrica restante.
          .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0(style="background-color:#00574F; overflow-x: hidden !important")
            p.mb-2.py-2(style=" color: #FFF59D !important") Entonces, una vez realizado el análisis de sostenibilidad y determinar las afectaciones sociales, económicas y ambientales, existe la oportunidad para traducir los impactos de la huella hídrica en acciones para mitigarlos, siendo necesario adoptar medidas enfocadas a reducir y compensar, pero estas medidas deben estar direccionadas al componente o sector donde fueron originadas, debido a que algunas huellas hídricas puede lograr ser reducidas a cero mientras que otras no, como por ejemplos las relacionadas con el sector agrícola (que es una de las que genera la mayor huella hídrica) es difícil reducir las huellas verde y azul a cero, mientras que la gris sí evitando la aplicación de sustancias químicas en el suelo o implementado una agricultura orgánica; también en el sector industrial y doméstico es posible llevarlas a cero mediante estrategias como el reciclaje. En lo referente a la huella hídrica de un proceso o producción para disminuirla se puede reemplazar las técnicas empleadas o evitar el uso de una materia prima determinada.
    
    .row.align-items-center.my-5.col-lg-12.m-auto                
        .col
          p.mb-0(data-aos="fade-up" ) Cuando un componente o sector de la económica aplica medidas para reducir su huella hídrica y adelanta acciones para compensar los impactos, genera beneficios no solo para él, sino que también indirectamente beneficia a otros sectores, como ejemplo cuando una empresa genera sus productos reduciendo su huella, por ende los consumidores al hacer uso del producto también la minimizan. En el caso de neutralización del agua, puede ser total, es decir se anula la huella hídrica mediante la aplicación de medidas y estrategias, pero en otros casos es imposible lograrlo, lo que indicia que el concepto agua neutral no siempre está relacionado a cero huella hídrica, sino también se busca que los aspectos externos sociales, económicos y ambientales negativos sean reducidas tanto como sea posible y que la los impactos restantes derivados del uso del agua sean totalmente compensados mediante la inversión en proyectos que promuevan el uso sostenible y equitativo del agua en el medio ambiente y en la comunidad afectada.
        .col-auto.align-items-center
          figure.align-items-center
            img(src='@/assets/curso/temas/tema4/2.svg').m-auto(data-aos="fade-right")

    .row.py-3.justify-content-center(data-aos="fade-right")
      .col-lg-12        
        .bloque-texto-a__texto.caja_escalada_hover(style="background-color: #FFF59D; border-radius: 15px")
          .row
            .col-sm-12.col-lg-1
              img.m-3(src='@/assets/curso/temas/tema4/3.svg', style="width:80px")
            .col-sm-12.col-lg-11
              p.m-2.mt-4 Por ejemplo, la huella hídrica se puede reducir invirtiendo en tecnología para el ahorro del agua y medidas de conservación de agua y tratamiento de aguas residuales. Por su parte, los impactos negativos se pueden compensar invirtiendo en una mejor gestión de las cuencas hidrográficas o apoyando a las comunidades pobres que no tienen acceso a agua limpia para establecer y mantener su propio sistema de suministro de agua.

    p.mt-5 Estas medidas para reducir la huella hídrica y mitigar sus impactos, no son de uso exclusivo para cierto sector, pueden ser aplicadas en diversos ámbitos, de forma individual o colectiva, ya que sucede que un bien, servicio, consumidor individual, comunidad o negocio es agua neutra cuando las externalidades negativas se han reducido y compensado la huella hídrica del bien, servicio, consumidor individual, comunidad o empresa. Algunos ejemplos son:

    .row.justify-content-center(data-aos="fade-right" alt="“Evolución del concepto”. En esta slider se habla sobre la evolución que ha tenido el concepto de huella hídrica al pasar el tiempo, partiendo de huella ecológica en el año 1992 por William Rees y Mathis Wackernagel, agua vital en 1998 por John Anthony Allan, huella hídrica en el 2002 por Arjen Hoekstra y huella de agua en el 2014 por la ISO 14046.")
        .col-lg-10
        .tarjeta.color-secundario
          .p-4.p-lg-5
            SlyderA(tipo="b")
              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Sector Agrícola
                  ul(style="color:black").lista-ul--color.pt-4               
                    |● Reemplazar la agricultura tradicional por la orgánica <br>
                    |● Reemplazar el sistema de riego tradicional a un por goteo o aspersores <br>
                    |● Aumentar la productividad del suelo mediante la implementación de la producción secano y mejorando las prácticas agrícolas <br> 
                    |● Reducir el uso de fertilizantes y pesticidas <br>
                    |● Optimizar el volumen y técnica de aplicación de sustancias químicas <br>
                    |● Usar la cobertura del suelo para reducir la evaporación de la capa superficial
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/tema4/4.svg', style="width:650px", alt="“Medidas para reducir la huella hídrica”. En este slider, se muestran las medidas que se pueden tomar para reducir y mitigar la huella hídrica desde el sector agrícola, industrial, del consumidor y del gobierno. ").m-auto

              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Sector Industrial y General 
                  ul(style="color:black").lista-ul--color.pt-4               
                    |● Aplicar las 3R (Reducir, Reutilizar y Reciclar) <br>
                    |● Reducir el consumo de agua en todas las  operaciones <br>
                    |● Reducir la producción de aguas residuales <br>
                    |● Mejorar la calidad de aguas vertidas o servidas <br>
                    |● Implementar  sistemas de ahorro de agua <br>
                    |● Divulgar información sobre la huella hídrica <br>
                    |● Reciclar las sustancias químicas. <br>
                    |● Aplicar medidas de compensación social, económico y ambiental 
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/tema4/5.svg', style="width:650px").m-auto
                    
              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Consumidores 
                  ul(style="color:black").lista-ul--color.pt-4               
                    |● Evitar el uso de biocombustibles que requieran mucha agua <br>
                    |● Implementar la energía solar o eólica <br>
                    |● Hacer una gestión del agua en el hogar (cerrando las llaves del agua al bañarse, cepillarse y lavar la loza, cambiando los inodoros y duchas por unos que tengan ahorro de agua, etc.) <br>
                    |● Evitar tirar contaminantes como grasas y pinturas por el desagüe <br>
                    |● Realizar una evaluación comparativa de los productos y servicios ofrecidos en el mercado <br>
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/tema4/6.svg', style="width:650px").m-auto

              .row.align-items-center.m-1
                .col-lg-5.mb-4.mb-lg-0
                  h4 Denominación: huella de agua - ISO 14046 . - Año: 2014
                  ul(style="color:black").lista-ul--color.pt-4               
                    |● Desarrollar e implementar políticas de protección y uso sostenible del recurso hídrico  <br>
                    |● Fomentar el uso de tecnologías de ahorro de agua en todos los sectores de la economía <br>
                    |● Concientizar sobre el agua a consumidores, productores y población en general <br>
                    |● Desarrollar políticas de desarrollo sostenible sobre la agricultura, el medio ambiente, la industria, el comercio, la energía y demás sectores que involucran y emplean el agua <br>
                    |● Apoyar las inversiones en sistemas y técnicas de riego que ahorren agua  <br>
                    |● Fomentar la agricultura orgánica <br>
                .col-lg-7
                  figure
                    img(src='@/assets/curso/temas/tema4/7.svg', style="width:650px").m-auto
    .row.align-items-center.my-5.col-lg-10.m-auto     
        .col-auto
          figure
            img(src='@/assets/curso/temas/tema4/8.svg').m-auto(data-aos="fade-right")           
        .col
          p.mt-5(data-aos="fade-up" ) Además, es importante resaltar que estas medidas no solo deben ser implementadas donde hayan problemáticas evidentes de contaminación y escasez, siempre se deben ser aplicadas, sin importar que exista gran disponibilidad de agua, siempre se debe buscar la reducción de la huella hídrica        .col-auto
          p.my-3(data-aos="fade-up" ) Otro factor importante para resaltar es que las medidas de reducción y mitigación que pueden ser adoptadas no necesariamente deben estar enfocadas a la reducción del consumo de agua, sino que también pueden estar direccionadas al aumento de la eficiencia y equidad en el uso del agua, como también en la productividad económica o protección de ecosistemas estratégicos.
        

        

</template>

<script>
export default {
  name: 'Tema4',
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
