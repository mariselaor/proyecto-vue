<template>
  <div class="p-6 max-w-md mx-auto bg-base-100 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold text-primary mb-4">Carreras</h2>
    <input
      type="text"
      placeholder="Buscar"
      v-model="search"
      class="input input-bordered w-full mb-4"
    />
    <ul class="space-y-2">
      <li
        v-for="categoria in filteredCategorias"
        :key="categoria"
        @click="selectCategoria(categoria)"
        class="p-4 bg-base-200 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition-colors"
      >
        {{ categoria }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      categorias: [
        'Ingeniería Agroecológica',
        'Licenciatura en Ciencias de la Computación',
        'Técnico en Ingeniería Agroecológica',
        'Técnico en Desarrollo de Aplicaciones Informáticas',
        'Licenciatura en Trabajo Social',
        'Licenciatura en Teología',
        'Licenciatura en Idioma Inglés',
        'Licenciatura en Contaduría Pública',
        'Licenciatura en Ciencias Jurídicas',
        'Licenciatura en Administración de Empresas',
        'Licenciatura en Psicología',
      ],
    };
  },
  computed: {
    filteredCategorias() {
      return this.categorias.filter((categoria) =>
        categoria.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    selectCategoria(categoria) {
      const categoriaSlug = categoria.replace(/\s+/g, '-').toLowerCase();
      this.$router.push(`/days?category=${categoriaSlug}`);
    },
  },
};
</script>

<style scoped>
</style>
