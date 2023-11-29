import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore("notificacion", () => {
  const texto = ref("");
  const error = ref(false);
  const show = ref(false);

  watch(show, () => {
    if (show.value) {
      setTimeout(() => {
        show.value = false;
        texto.value = "";
        error.value = false;
      }, 3000);
    }
  });

  return {
    texto,
    error,
    show,
  };
});
