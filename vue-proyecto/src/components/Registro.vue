<script setup>
import { ref } from "vue";
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const error = ref(null);
const userStore = useUserStore();
const router = useRouter();

const register = async () => {
  try {
    await userStore.register(email.value, password.value);
    error.value = null;
    router.push({ name: 'Home' }); // Redirige a la página de inicio
  } catch (err) {
    error.value = "Error de registro. Verifica tus datos.";
  }
};
</script>

<template>
  <div class="register-container">
    <h1>Crear cuenta</h1>
    <form @submit.prevent="register" class="register-form">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
}

.register-form input {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.register-form input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.register-form button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.register-form button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 15px rgba(0, 87, 179, 0.3);
}

.error-message {
  color: #d9534f;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
}
</style>
