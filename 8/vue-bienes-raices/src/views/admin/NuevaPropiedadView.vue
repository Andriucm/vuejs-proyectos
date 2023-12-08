<script setup>
import { useForm, useField } from "vee-validate";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useRouter } from "vue-router";
import { validationSchema, imageSchema } from "@/validations/propiedadSchema";
import useImage from "@/composables/useImage";
import useLocationMap from "@/composables/useLocationMap";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";


const items = [1, 2, 3, 4, 5]

const { url, image, uploadImage } = useImage()
const {zoom, center,pin} = useLocationMap()
const db = useFirestore()
const router = useRouter()

const { handleSubmit } = useForm({
    validationSchema: {
        ...validationSchema,
        ...imageSchema
    }
});

const titulo = useField('titulo')
const precio = useField('precio')
const habitaciones = useField('habitaciones')
const estacionamiento = useField('estacionamiento')
const wc = useField('wc')
const descripcion = useField('descripcion')
const imagen = useField('imagen')
const piscina = useField('piscina', null, { initialValue: false })


const submit = handleSubmit(async (values) => {
    const { imagen, ...propiedadSinImagen } = values
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "propiedades"), {
        ...propiedadSinImagen,
        imagen: url.value,
        ubicacion: center.value
    });
    if (docRef.id) {
        router.push({ name: 'admin-propiedades' })
    }

})
</script>
 
<template>
    <v-card width="800" flat class="mx-auto">
        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Nueva Propiedad
        </v-card-title>
        <v-card-subtitle class="text-h6">
            Crea una nueva propiedad llenando el siguiente formulario
        </v-card-subtitle>
        <v-form class="mt-10">
            <v-text-field v-model="titulo.value.value" class="mb-5" label="Titulo de la Propiedad"
                :error-messages="titulo.errorMessage.value" />
            <v-file-input @change="uploadImage" v-model="imagen.value.value" label="Fotografia" accept="image/jpeg"
                prepend-icon="mdi-camera" class="mb-5" :error-messages="imagen.errorMessage.value" />
            <div class="my-5" v-if="image">
                <p class="font-weight-bold"> Imagen Propiedad:</p>
                <img :src="image" class="w-50" />
            </div>
            <v-text-field v-model="precio.value.value" :error-messages="precio.errorMessage.value" label="Precio"
                class="mb-5" />
            <v-row>
                <v-col cols="12" md="4">
                    <v-select v-model="habitaciones.value.value" :error-messages="habitaciones.errorMessage.value"
                        label="Habitaciones" class="mb-5" :items="items"></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="wc.value.value" label="WC" :error-messages="wc.errorMessage.value" class="mb-5"
                        :items="items"></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="estacionamiento.value.value" :error-messages="estacionamiento.errorMessage.value"
                        label="Plazas de garage" class="mb-5" :items="items"></v-select>
                </v-col>

            </v-row>
            <v-textarea v-model="descripcion.value.value" :error-messages="descripcion.errorMessage.value" mb="5"
                label="Descripción"></v-textarea>
            <v-checkbox label="Piscina" v-model="piscina.value.value"
                :error-messages="piscina.errorMessage.value"></v-checkbox>
                <h2 class="font-weight-bold text-center my-5">Ubicación</h2>
            <div class="pb-10 ">
                <div style="height:600px">
                    <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
                        <LMarker :lat-lng="center" draggable @moveend="pin"></LMarker>
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
                    </LMap>
                </div>
            </div>
            <v-btn @click="submit" color="pink-accent-3" block>Agregar Propiedad</v-btn>
        </v-form>
    </v-card>
</template>
