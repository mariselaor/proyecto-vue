<template>
  <div class="p-6 max-w-2xl mx-auto bg-base-100 rounded-xl shadow-lg">
    <router-link to="/days" class="link link-info mb-4">Volver a la página principal</router-link>
    <h2 class="text-2xl font-bold text-primary mb-4">{{ day }}</h2>
    <table class="table table-zebra w-full">
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Día</th>
          <th>Horario</th>
          <th>Docente</th>
          <th>Salón</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="clase in clasesFiltradas" :key="clase.id">
          <td>{{ clase.asignatura }}</td>
          <td>{{ clase.dia }}</td>
          <td>{{ clase.horario }}</td>
          <td>{{ clase.docente }}</td>
          <td>{{ clase.salon }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="clasesFiltradas.length === 0" class="mt-4 text-red-500">No hay clases programadas para este día.</p>
  </div>
</template>

<script>
import { db } from '@/stores/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
  data() {
    return {
      day: this.$route.params.day,
      clases: [],
      horarioFiltrado: ''
    }
  },
  async created() {
    await this.fetchClases()
  },
  computed: {
    clasesFiltradas() {
      return this.clases.filter((clase) => {
        const matchesDia = clase.dia === this.day
        const matchesHorario = this.horarioFiltrado
          ? clase.horario.includes(this.horarioFiltrado) // Filtra por horario
          : true // Si no hay filtro, incluye todas las clases
        return matchesDia && matchesHorario
      })
    }
  },
  methods: {
    async fetchClases() {
      try {
        const horariosCollection = collection(db, 'horarios') // Referencia a la colección de horarios
        const q = query(horariosCollection, where('dia', '==', this.day)) // Filtra por día
        const querySnapshot = await getDocs(q)
        this.clases = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Asigna el id del documento
          ...doc.data() // Obtiene los datos del documento
        }))
      } catch (error) {
        console.error('Error al obtener las clases:', error)
      }
    }
  }
}
</script>

<style scoped>
</style>
