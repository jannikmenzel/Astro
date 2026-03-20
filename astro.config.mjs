import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://test.jannikmenzel.me",
    base: "/",
    output: "static",
    integrations: [icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});
