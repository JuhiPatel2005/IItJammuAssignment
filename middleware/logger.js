const logger = (req, res, next) => {
    console.log(`[logger] URL: ${req.originalUrl}`);
    console.log(`[logger] Method: ${req.method}`);
    console.log(`[logger] Time: ${new Date().toLocaleString()}`);
    console.log(`[logger] IP: ${req.ip}`);
    next();
};

module.exports = logger;