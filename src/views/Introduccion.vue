<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.px-5(data-aos="fade-up") Le damos la bienvenida al componente formativo denominado “Evaluación y análisis de la huella hídrica”, el cual, hace parte del programa de formación complementaria “Medición de la huella hídrica”, para conocer un poco más sobre las temáticas a desarrollar, le extendemos la invitación a observar el siguiente video:

    figure.mt-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WTQzWcNSG8E" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
