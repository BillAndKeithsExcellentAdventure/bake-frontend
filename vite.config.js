import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": 'http://wgstodo.azurewebsites.net', // Proxy API requests to the Express server
    },
  },
});
