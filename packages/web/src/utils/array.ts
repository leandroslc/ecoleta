function ascendingSort<T>(a: T, b: T) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

export const array = {
  sort: <T extends number | string>(values: T[]) => {
    return values.sort((a, b) => ascendingSort<T>(a, b));
  },
};
