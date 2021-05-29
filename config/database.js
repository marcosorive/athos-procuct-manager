module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: process.env.DATABASE_TYPE_SQLITE ? sqliteSettings : postgresSettings,
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

const postgresSettings = {
  client: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || "5432",
  database: process.env.DATABASE_NAME || "strapi",
  username: process.env.DATABASE_USERNAME || "strapi",
  password: process.env.DATABASE_PASSWORD || "strapi"
}

const sqliteSettings = {
client: 'sqlite',
filename: '.tmp/data.db'
}


