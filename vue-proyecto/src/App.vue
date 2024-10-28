<template>
  <div id="app">
    <Menu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'; // Importar desde components

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Menu,
  },
};
</script>

<style>
/* Estilos globales aquí */

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #e7f3ff; /* Fondo azul claro */
  color: #333; /* Color del texto */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Altura mínima para cubrir la pantalla */
}

.content {
  flex: 1; /* Ocupa el espacio restante */
  padding: 20px;
  background-color: #ffffff; /* Fondo blanco para el contenido */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

h1 {
  text-align: center; /* Centrar títulos */
  color: #007bff; /* Color azul para títulos */
}

/* Estilos para el menú (puedes personalizarlos) */
.menu {
  background-color: #007bff; /* Fondo azul */
  padding: 15px; /* Espaciado */
  color: white; /* Color del texto */
  text-align: center; /* Centrar texto del menú */
}

.menu a {
  color: white; /* Color de los enlaces en el menú */
  margin: 0 15px; /* Espaciado entre enlaces */
  text-decoration: none; /* Sin subrayado */
}

.menu a:hover {
  text-decoration: underline; /* Subrayar al pasar el mouse */
}
</style>
