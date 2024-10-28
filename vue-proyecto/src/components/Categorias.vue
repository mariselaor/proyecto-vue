<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-4">Carreras</h2>
    <input
      type="text"
      placeholder="Buscar"
      v-model="search"
      class="mb-4 w-full p-2 border border-gray-300 rounded"
    />
    <ul class="space-y-2">
      <li
        v-for="categoria in filteredCategorias"
        :key="categoria"
        @click="selectCategoria(categoria)"
        class="p-4 border-b border-gray-300 cursor-pointer hover:bg-blue-100 transition"
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
        'Licenciatura en Psicología'
      ]
    }
  },
  computed: {
    filteredCategorias() {
      return this.categorias.filter((categoria) =>
        categoria.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    selectCategoria(categoria) {
      const categoriaSlug = categoria.replace(/\s+/g, '-').toLowerCase()
      this.$router.push(`/days?category=${categoriaSlug}`)
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.border-b {
  border-bottom-width: 1px;
}

.hover\:bg-blue-100:hover {
  background-color: #ebf8ff; /* color de fondo azul claro */
}

.transition {
  transition: background-color 0.2s ease;
}
</style>
