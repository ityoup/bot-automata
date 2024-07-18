import { Router } from "express";

// Crear una instancia del Router
const botRouter = Router();

// Definir las rutas
botRouter.get('/prueba', (req, res) => {
    res.send('hola mundo');
});

// Exportar el Router configurado
export const botRoutes = botRouter;
