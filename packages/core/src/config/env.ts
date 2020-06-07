const envName = process.env.NODE_ENV?.toLowerCase() || 'development';

export const env = {
  name: envName,
  isDevelopment: () => envName === 'development',
  isProduction: () => envName === 'production',
  isTesting: () => envName === 'test',
};
