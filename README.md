# optional-ts

´´´typescript
import { Optional } from 'optional-ts';

// Crear un Optional con un valor no nulo
const nombre = Optional.of("Juan");

// Verificar si el valor está presente
if (nombre.isPresent()) {
  console.log(nombre.get()); // "Juan"
} else {
  console.log("No hay nombre");
}

// Crear un Optional que puede ser null o undefined
const edad = Optional.ofNullable(30);
console.log(edad.orElse(0)); // 30

// Aplicar una transformación al valor si está presente
const longitud = nombre.map(n => n.length).orElse(0);
console.log(longitud); // 4

// Usar filter para filtrar valores
const nombreLargo = nombre.filter(n => n.length > 3);
nombreLargo.ifPresent(n => console.log("Nombre largo:", n)); // "Juan"
´´´
