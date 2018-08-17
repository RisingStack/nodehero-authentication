const config = {}

config.redisStore = {
  host: process.env.REDIS_STORE_HOST,
  port: process.env.REDIS_STORE_PORT,
  password: process.env.REDIS_STORE_PASSWORD
}

module.exports = config
