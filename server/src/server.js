require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Connect to database (local standalone or embedded fallback)
    await connectDB();

    app.listen(PORT, () => {
      console.log(`====================================================`);
      console.log(`🏥 CarePulse HMS API Server running on localhost:${PORT}`);
      console.log(`📡 Health Check: http://localhost:${PORT}/api/v1/health`);
      console.log(`🔒 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`====================================================`);
    });
  } catch (err) {
    console.error(`Failed to launch server:`, err);
    process.exit(1);
  }
}

startServer();
