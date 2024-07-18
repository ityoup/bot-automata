import express from "express";
import { AppRoutes } from "../routes/centralRoutes.js"; // Importa el router directamente

const defaultOptions = {
    port: 3000
};

export class server {
    constructor() {
        this.app = express();
        this.port = defaultOptions.port;
        this.routes = AppRoutes; // Usamos AppRoutes como middleware
    }

    async startServer() {
        // Usamos las rutas de AppRoutes
        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
