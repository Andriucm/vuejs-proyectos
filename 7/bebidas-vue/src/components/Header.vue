<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from 'vue-router';
import { useBebidasStore } from "../stores/bebidas";
import { useNotificacionStore } from "../stores/notificaciones";


const route = useRoute();

const store = useBebidasStore();
const notificaciones = useNotificacionStore();

const paginaInicio = computed(() => route.name === 'inicio');

const handleSubmit = () => {
    //TODO Validar
if (Object.values(store.busqueda).includes('')) {
    notificaciones.$patch({
        texto: 'Todos los campos son obligatorios',
        show: true,
        error: true
    })
    return
}


    store.obtenerRecetas()
}



</script>
 
<template>
    <header class="bg-slate-800" :class="{ header: paginaInicio }">
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{ name: 'inicio' }">
                        <img src="/img/logo.svg" class="w-32" alt="Logotipo ">
                    </RouterLink>
                </div>
                <nav class="text-white flex gap-4">
                    <RouterLink :to="{ name: 'inicio' }" active-class="text-orange-500" class="  uppercase font-bold">
                        Inicio</RouterLink>
                    <RouterLink :to="{ name: 'favoritos' }" active-class="text-orange-500" class="  uppercase font-bold">
                        Favoritos</RouterLink>
                </nav>
            </div>

            <form @submit.prevent="handleSubmit" v-if="paginaInicio"
                class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounder-lg shadow space-y-6">
                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente">Nombre o
                        Ingredientes</label>
                    <input type="text" id="ingrediente" class="p-3 w-full rounded-lg focus:outline-none"
                        placeholder="Nombre o Ingrediente: ej. Vodka, Tequila etc" v-model="store.busqueda.nombre">
                </div>
                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg" for="categoria">categoría</label>
                    <select v-model="store.busqueda.categoria" id="categoria"
                        class="p-3 w-full rounded-lg focus:outline-none" placeholder="">
                        <option value="">--Seleccione --</option>
                        <option v-for="categoria in store.categorias" :key="categoria.strCategory"
                            :v-value="categoria.strCategory"> {{ categoria.strCategory }} </option>
                    </select>
                </div>
                <input type="submit" value="Buscar Receta"
                    class="bg-orange-800 hover:bg-orange-900 w-full p-2 text-white uppercase font-extrabold rounded-lg">
            </form>

        </div>

    </header>
</template>
<style scoped>
.header {
    background-image: url('/img/bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>