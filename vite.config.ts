import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BASE_TYPE: number = Number(process.env.BASE_TYPE);
const PR_NUMBER: number = Number(process.env.PR_NUMBER);
const baseUrls = ["/test-devops/", `/test-devops/pr-preview/pr-${PR_NUMBER}`];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrls[BASE_TYPE],
});
