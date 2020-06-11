export type Dictionary<T> = { [K in keyof T]: T[K] };
