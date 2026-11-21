export function errorHandler(err, req, res, next) {
  // Central error handler: never leak internal stack traces or database errors
  console.error(`Error processing ${req.method} ${req.url}:`, err.message || err);
  
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    error: 'An unexpected server error occurred. Please try again later.'
  });
}
