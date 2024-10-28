<template>
  <div>
    <h1>Agregar Horario</h1>
    <form @submit.prevent="addSchedule">
      <input v-model="asignatura" placeholder="Asignatura" required />
      <input v-model="dia" placeholder="Día" required />
      <input v-model="horario" placeholder="Horario" required />
      <input v-model="docente" placeholder="Docente" required />
      <input v-model="salon" placeholder="Salón" required />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';



export default {
  data() {
    return {
      asignatura: '',
      dia: '',
      horario: '',
      docente: '',
      salon: '',
    };
  },
  methods: {
    async addSchedule() {
      try {
        const horariosCollection = collection(db, 'horarios');
        await addDoc(horariosCollection, {
          asignatura: this.asignatura,
          dia: this.dia,
          horario: this.horario,
          docente: this.docente,
          salon: this.salon,
        });
        // Resetea el formulario o redirige
        this.asignatura = '';
        this.dia = '';
        this.horario = '';
        this.docente = '';
        this.salon = '';
      } catch (error) {
        console.error('Error al agregar horario:', error);
      }
    },
  },
};
</script>
