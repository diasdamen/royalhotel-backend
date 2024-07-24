module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cqfpa29u0jms73865vug-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'royalhotel'),
      user: env('DATABASE_USERNAME', 'royalhotel_user'),
      password: env('DATABASE_PASSWORD', '16AkmDb2RzHUYC0DXLm3ghfqMvcDaQY'),
      schema: env('DATABASE_SCHEMA', 'public'), // Optional
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true),
      },
    },
    debug: false,
  },
});