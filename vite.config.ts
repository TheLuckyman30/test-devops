import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BASE_TYPE: number = Number(process.env.BASE_TYPE ?? 0);
const PR_NUMBER: number = Number(process.env.PR_NUMBER ?? 0);
const baseUrls = ["/test-devops/", `/test-devops/pr-preview/pr-${PR_NUMBER}`];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrls[BASE_TYPE],
});
