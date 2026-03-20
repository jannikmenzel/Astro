import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://test.jannikmenzel.me",
    base: "/",
    output: "static",
    vite: {
        plugins: [tailwindcss()],
    },
});
