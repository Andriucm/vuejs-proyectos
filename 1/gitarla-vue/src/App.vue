<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { db } from './data/guitarras'
import Guitarra from "./components/Guitarra.vue";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

//Utilizando REACTIVE
// const state = reactive({
//   guitarras: db
// })
//Utilizando REF
const guitarras = ref([])
const carrito = ref([])
const guitarra = ref({})

// const state = reactive({
//   guitarras:[]
// })
watch(
  carrito, () => {
    guardarLocalStorage();
  }, {
  deep: true
}
)
onMounted(() => {
  guitarras.value = db;
  // state.guitarras = db;
  guitarra.value = db[3]
  const carritoStorage = localStorage.getItem('carrito')
  if (carritoStorage) {
    carrito.value = JSON.parse(carritoStorage)
  }
})
const guardarLocalStorage = () => {
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}
const agregarCarrito = (guitarra) => {
  const existeCarrito = carrito.value.findIndex(producto => producto.id === guitarra.id)
  if (existeCarrito >= 0) {
    carrito.value[existeCarrito].cantidad++
  } else {
    guitarra.cantidad = 1;
    carrito.value.push(guitarra)
  }
}
const decrementarCantidad = (id) => {
  const index = carrito.value.findIndex(producto => producto.id === id)
  if (carrito.value[index].cantidad <= 1) {
    return
  } else carrito.value[index].cantidad--
}
const incrementarCantidad = (id) => {
  const index = carrito.value.findIndex(producto => producto.id === id)
  if (carrito.value[index].cantidad >= 5) {
    return
  } else
    carrito.value[index].cantidad++
}
const eleimiarProducto = (id) => {
  carrito.value = carrito.value.filter(producto => producto.id !== id)
}
const vaciarCarrito = () => {
  // carrito.value = []
  carrito.value.splice(0, carrito.value.length)
}
</script>
<template>
  <Header :guitarra="guitarra" :carrito="carrito" @incrementar-cantidad="incrementarCantidad"
    @decrementar-cantidad="decrementarCantidad" @agregar-carrito="agregarCarrito" @eliminar-producto="eleimiarProducto"
    @vaciar-carrito="vaciarCarrito" />
  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>
    <div class="row mt-5">
      <Guitarra v-for="guitarra in guitarras" :key="guitarra.id" :guitarra="guitarra" @agregar-carrito="agregarCarrito">
        <!-- Definimos la propiedad para pasarla al componente -->
      </Guitarra>
    </div>

    <Footer />
  </main>
</template>