import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const auth = useFirebaseAuth();
  const authUser = ref(null);
  const router = useRouter();
  // console.log(authUser.value);
  const errorCodes = {
    "auth/invalid-credential": "Credenciales inválidas",
    "auth/user-not-found": "Usuario no encontrado",
    "auth/wrong-password": "Credenciales inválidas",
  };
  const errorMsg = ref("");

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        authUser.value = user;
      }
    });
  });
  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        authUser.value = user;

        errorMsg.value = "";
        router.push({ name: "admin-propiedades" });
      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code];
      });
  };
  const loggout = () => {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: "login" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hasError = computed(() => {
    return errorMsg.value;
  });

  const isAuth = computed(() => {
    return authUser.value;
  });

  return {
    login,
    loggout,
    hasError,
    errorMsg,
    isAuth,
  };
});
