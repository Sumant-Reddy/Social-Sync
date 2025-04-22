const redisClient = require('../config/redis');

const cache = (duration) => {
  return async (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = `cache:${req.originalUrl || req.url}`;

    try {
      const cachedResponse = await redisClient.get(key);
      
      if (cachedResponse) {
        return res.json(JSON.parse(cachedResponse));
      }

      res.originalJson = res.json;
      res.json = (body) => {
        redisClient.setEx(key, duration, JSON.stringify(body));
        res.originalJson(body);
      };

      next();
    } catch (error) {
      console.error('Redis cache error:', error);
      next();
    }
  };
};

module.exports = cache; 