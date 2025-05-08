export class Optional<T> {
  private constructor(private readonly value: T | null | undefined) {}

  // Crea un Optional de tipo T, asegurándose de que no sea null ni undefined
  static of<T>(value: T): Optional<T> {
    if (value === null || value === undefined) {
      throw new Error("Optional.of() no permite null o undefined");
    }
    return new Optional(value);
  }

  // Crea un Optional que puede ser null o undefined
  static ofNullable<T>(value: T | null | undefined): Optional<T> {
    return new Optional(value ?? null);
  }

  // Crea un Optional vacío
  static empty<T>(): Optional<T> {
    return new Optional<T>(null);
  }

  // Verifica si el valor está presente (es decir, no es null ni undefined)
  isPresent(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  // Obtiene el valor si está presente, lanza un error si no lo está
  get(): T {
    if (this.value === null || this.value === undefined) {
      throw new Error("No hay valor presente");
    }
    return this.value;
  }

  // Si el valor está presente, devuelve el valor, si no, devuelve el valor proporcionado como fallback
  orElse(other: T): T {
    return this.value !== null && this.value !== undefined ? this.value : other;
  }

  // Similar a orElse, pero en vez de un valor fijo, acepta una función para obtener el valor
  orElseGet(supplier: () => T): T {
    return this.value !== null && this.value !== undefined ? this.value : supplier();
  }

  // Aplica una transformación al valor si está presente
  map<U>(mapper: (value: T) => U): Optional<U> {
    if (this.value === null || this.value === undefined) {
      return Optional.empty<U>();
    }
    return Optional.ofNullable(mapper(this.value));
  }

  // Ejecuta una función sobre el valor si está presente
  ifPresent(consumer: (value: T) => void): void {
    if (this.value !== null && this.value !== undefined) {
      consumer(this.value);
    }
  }

  // Filtra el valor basándose en una condición
  filter(predicate: (value: T) => boolean): Optional<T> {
    if (this.value === null || this.value === undefined || !predicate(this.value)) {
      return Optional.empty();
    }
    return this;
  }
}
