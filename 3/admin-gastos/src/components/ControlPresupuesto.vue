<script setup>
import { computed } from 'vue'
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css"
import { formatearCantidad } from '../helpers'
defineEmits(['reset-app'])
const props = defineProps({
    presupuesto: {
        type: Number,
        required: true

    },
    disponible: {
        type: Number,
        required: true

    },
    gastado: {
        type: Number,
        required: true

    },
})
const porcentaje = computed(() => {
    return parseInt(((props.presupuesto - props.disponible) / props.presupuesto) * 100)
})

</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <p class="porcentaje">{{ porcentaje }} %</p>
            <CircleProgress :percent="porcentaje" :size="250" :border-width="30" :border-bg-width="30" fill-color="#3b82f6"
                empty-color="#e1e1e1" />

        </div>
        <div class="contenedor-presupuesto">
            <button type="button" @click="$emit('reset-app')" class="reset-app">
                Resetar App
            </button>

            <p>
                <span>Presupuesto:</span>
                {{ formatearCantidad(presupuesto) }}
            </p>
            <p>
                <span>Disponible:</span>
                {{ formatearCantidad(disponible) }}
            </p>
            <p>
                <span>Gastado:</span>
                {{ formatearCantidad(gastado) }}
            </p>
        </div>
    </div>
</template>


<style scoped>
.dos-columnas {
    display: flex;
    flex-direction: column;
}
.contenedor-grafico{
    position: relative;
    
}
.porcentaje{
    position: absolute;
    margin: auto;
    top: calc(50% - 1.5rem);
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    font-size: 3rem;
    color: var(--grisOscuro);
    font-weight: 900;
    

}
.dos-columnas> :first-child {
    margin-bottom: 3rem;
}

@media(min-width: 768px) {
    .dos-columnas {
        flex-direction: row;
        gap: 4rem;
        align-items: center;
    }

    .dos-columnas> :first-child {
        margin-bottom: 0;
    }
}

.contenedor-presupuesto {
    width: 100%;
    color: var(--grisOscuro);
}

.reset-app {
    background-color: #db2777;
    border: none;
    font-size: 2rem;
    padding: 1rem;
    width: 100%;
    color: var(--blanco);
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 1rem;
    transition-property: background-color;
    transition-duration: 300ms;

}

.reset-app:hover {
    cursor: pointer;
    background-color: #ae175b;
}

.contenedor-presupuesto p {
    font-size: 2.4rem;
    text-align: center;
}

@media(min-width: 768px) {
    .contenedor-presupuesto p {
        text-align: left;
    }
}

.contenedor-presupuesto span {
    font-weight: 900;
    color: var(--azul);
}
</style>