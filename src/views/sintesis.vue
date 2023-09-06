<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido
      h5 Evaluación y análisis de la huella hídrica

    p El conocimiento de la información del patrimonio hídrico y su comportamiento ante factores como el cambio climático y demás que generan variabilidad es de gran relevancia; debido a la importancia de este líquido vital, necesario para desarrollo de la vida, lo que implica desarrollar una gestión integral de este recurso, donde el uso sea de manera responsable, eficiente y sostenible, direccionado a preservar su calidad y cantidad ya que esto permite la conservación de los ecosistemas y la vida en general de los seres humanos. Es por eso que Colombia el Instituto de Hidrología Meteorología y Estudios Ambientales – IDEAM, quien es la máxima autoridad ambiental, realiza el reporte sobre el estado y dinámica de las aguas del país, datos que publican periódicamente mediante el Estudio Nacional del Agua ENA, el cual condensa información como la evaluación multisectorial de la huella hídrica en el país.
    p.mb-5 Referente a la huella hídrica, existen diversas metodologías para su cuantificación y las fórmulas empleadas varían dependiendo de lo que se quiere calcular, por ejemplo a un sector económico (Agropecuario, doméstico, energético, minero, industrial, etc.), organización específica, empresa o sector empresarial, proceso productivo, etapa del proceso, producto o servicio, consumidor o grupo de consumidores o aun nivel geográfico (municipio, provincia, nación, zona de captación o cuenca hidrográfica). Además no solo se determina el valor numérico sino que también se hace necesario realizar un análisis de sostenibilidad que implica varios factores como son los colores de la huella hídrica, los impactos y sus niveles, como también las afectaciones sociales, económicas y ambientales; con el objetivo de tomar medidas enfocadas a reducir la huella hídrica y acciones para compensar y mitigar sus impactos.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="“Síntesis”. En esa imagen se realiza la síntesis del componente formativo CF002 donde se muestran dos subtemas: ⦁ Huella hídrica Donde se habla de los cuantificadores volumétricos, análisis de sostenibilidad y la aplicación de medidas. ⦁ Instituto de hidrología, meterología y estudios ambientales IDEM. Donde se establece los procesos que se realiza la entidad ante la huella hídrica.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
