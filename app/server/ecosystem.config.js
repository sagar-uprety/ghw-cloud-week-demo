export default {
    apps: [{
      name: "app",
      script: "./server.js",
      env_vm: {
        NODE_ENV: "development",
        ATLAS_URI: "mongodb://localhost:27017",
        PORT: 5050
      },
      env_azure: {
        NODE_ENV: "production",
        ATLAS_URI: "mongodb+srv://admin:password@ghw-cloud-b2.xrdxz.mongodb.net/?retryWrites=true&w=majority&appName=ghw-cloud-b2",
        PORT: 5050
      }
    }]
  };