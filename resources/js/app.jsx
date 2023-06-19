import React from "react";
import { Head, createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

import "./bootstrap";

const appName = "Lamteuba.ltd";

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
