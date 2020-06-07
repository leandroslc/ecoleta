const envName = process.env.NODE_ENV?.toLowerCase();

export const env = {
  name: envName,
  isDevelopment: () => !envName || envName === 'development',
  isProduction: () => envName === 'production',
  isTesting: () => envName === 'test',
};
