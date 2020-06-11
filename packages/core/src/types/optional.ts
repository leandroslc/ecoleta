type OptionalType<T> = T | undefined;

export interface Optional<T> {
  hasValue: boolean;
  value: T;
}

class OptionalValue<T> implements Optional<T> {
  private optionalValue: OptionalType<T>;

  constructor(value: OptionalType<T>) {
    this.optionalValue = value;
  }

  get hasValue() {
    return this.optionalValue !== undefined;
  }

  get value() {
    if (this.optionalValue !== undefined) {
      return this.optionalValue;
    }

    throw new Error('No value');
  }
}

function OptionalConstructor<T>(value: OptionalType<T>) {
  return new OptionalValue(value);
}

export const Optional = OptionalConstructor;
