<!-- Sitio en Construccion -->
<template>
  <div class="content">
    <img :src="`src/assets/img/foto.jpg`" alt="Imagen en construcción" />
  </div>
</template>

<script>
export default {
  name: 'Construccion',
};
</script>

<style scoped>
.content {
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho de main-content */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px; /* Espacio adicional bajo el Navbar */
  box-sizing: border-box; /* Asegura que los padding no afecten el ancho total */
}

img {
  max-width: 100%; /* Ocupa todo el ancho disponible */
  height: auto; /* Mantiene la proporción de la imagen */
  object-fit: contain; /* Ajusta la imagen dentro del espacio sin perder proporción */
}
</style>
