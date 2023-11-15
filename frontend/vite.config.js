import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bookstore_MERN/", // Replace <REPO> with your repository name
  plugins: [react()],
});
