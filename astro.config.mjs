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
        build: {
            rollupOptions: {
                onLog(level, log, handler) {
                    const isKnownAstroUnusedImportWarning =
                        level === "warn" &&
                        log.code === "UNUSED_EXTERNAL_IMPORT" &&
                        typeof log.message === "string" &&
                        log.message.includes(
                            "@astrojs/internal-helpers/remote",
                        ) &&
                        log.message.includes(
                            "node_modules/astro/dist/assets/utils/index.js",
                        );

                    if (!isKnownAstroUnusedImportWarning) {
                        handler(level, log);
                    }
                },
            },
        },
    },
});
