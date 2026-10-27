export default () => ({
  port: parseInt(process.env.PORT ?? '', 10) || 3000,
  env: process.env.NODE_ENV ?? 'development',
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '', 10) || 5432,
    username: process.env.DB_USER ?? 'todonest',
    password: process.env.DB_PASSWORD ?? 'todonest',
    name: process.env.DB_NAME ?? 'todonest',
  },
});
