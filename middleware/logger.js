const logger = (req, res, next) => {
    console.log('========================================');
    console.log(`[LOGGER] Request Received!`);
    console.log(`[LOGGER] URL: ${req.originalUrl}`);
    console.log(`[LOGGER] Method: ${req.method}`);
    console.log(`[LOGGER] Time: ${new Date().toLocaleString()}`);
    console.log(`[LOGGER] IP: ${req.ip}`);
    console.log('========================================');
    next();
};

module.exports = logger;