export default {
  toArray(value?: string) {
    return !value ? [] : value.split(',').map((item) => item.trim());
  },
};
