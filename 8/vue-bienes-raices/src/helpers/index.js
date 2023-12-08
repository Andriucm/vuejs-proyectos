export const propiedadPrecio = (price) =>
      Number(price).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      })