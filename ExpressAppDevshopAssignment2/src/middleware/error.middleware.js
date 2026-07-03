// 404 handler - runs when no route matched
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false, message: "Route not found"
    })
}

// error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (res.headersSent) {
        return next(err);
    }

    // mongoose bad objectId
    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid ID format"
        })
    }

    // mongoose validation error
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((e) => e.message)
        return res.status(400).json({
            success: false,
            message: messages.join(", ")
        })
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Server Error"
    })
}

module.exports = {notFound, errorHandler}

