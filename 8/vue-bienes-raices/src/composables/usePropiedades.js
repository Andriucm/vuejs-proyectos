import { computed, ref } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire";
/**
 * Custom hook for managing properties.
 * @returns {object} - An object containing the properties collection, a boolean value for "piscina",
 *                     the filtered properties collection, and a function to delete an item.
 */
export default function usePropiedades() {
  // Boolean value for "piscina"
  const piscina = ref(false);

  // Firebase storage instance
  const storage = useFirebaseStorage();
  // Firestore instance
  const db = useFirestore();
  // Firestore collection reference
  const propiedadesCollection = useCollection(collection(db, "propiedades"));

  /**
   * Deletes an item from the database and associated image from storage.
   * @param {string} id - The ID of the item to be deleted.
   * @param {string} urlImage - The URL of the image associated with the item.
   */
  async function deleteItem(id, urlImage) {
    // Prompt the user for confirmation
    if (confirm("¿Deseas eliminar esta propiedad?")) {
      // Get a reference to the document in the "propiedades" collection
      const docRef = doc(db, "propiedades", id);
      // Get a reference to the image in storage
      const imageRef = storageRef(storage, urlImage);

      await Promise.all([
        // Delete the document from the database
        await deleteDoc(docRef),
        // Delete the image from storage
        await deleteObject(imageRef),
      ]);
    }
  }

  // Computed property for filtered properties collection
  const propiedadesFiltradas = computed(() => {
    return piscina.value
      ? propiedadesCollection.value.filter((propiedad) => propiedad.piscina)
      : propiedadesCollection.value;
  });

  return {
    propiedadesCollection, // Properties collection
    piscina, // Boolean value for "piscina"
    propiedadesFiltradas, // Filtered properties collection
    deleteItem, // Function to delete an item
  };
}
