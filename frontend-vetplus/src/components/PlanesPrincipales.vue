<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Titulo de seccion -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Nuestros Planes
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tu mascota y disfruta de la tranquilidad de tener su salud protegida
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center text-gray-600">
        Cargando planes...
      </div>

      <!-- Grid de planes -->
      <div v-else class="grid gap-8 md:grid-cols-3">
        <!-- Card de cada plan -->
        <div
          v-for="plan in planes"
          :key="plan._id"
          class="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow"
        >
          <!-- Imagen -->
          <img
            :src="plan.imagen || '/default-plan.jpg'"
            :alt="plan.nombre"
            class="w-full h-48 object-cover rounded-lg mb-6"
          />

          <!-- Título -->
          <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">
            {{ plan.nombre }}
          </h3>

          <!-- Descripción -->
          <p class="text-gray-600 text-sm mb-4 text-center">
            {{ plan.descripcion }}
          </p>

          <!-- Lista de coberturas -->
          <ul class="space-y-3 flex-1">
            <li
              v-for="(beneficio, index) in plan.coberturas"
              :key="index"
              class="flex items-start gap-2 text-gray-700 text-sm"
            >
              <span class="text-blue-500">✔</span>
              <span>{{ beneficio }}</span>
            </li>
          </ul>

          <!-- Botón opcional -->
          <button
            class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado
const planes = ref([])
const loading = ref(true)

// URL de Render
const API_URL = 'https://api-vetplus.onrender.com'

// Llamado a la API
onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/planes/tipo/dog`)
    planes.value = await res.json()
  } catch (err) {
    console.error('Error al cargar los planes', err)
  } finally {
    loading.value = false
  }
})
</script>
