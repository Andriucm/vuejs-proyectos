import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(14);
  const center = ref([43.2638131, -2.9341267]);

  function pin(e) {
    const marker =   e.target.getLatLng()
    center.value = [marker.lat, marker.lng]
    console.log(center.value);
    
  }

  return {
    zoom,
    center,
    pin
  };
}
