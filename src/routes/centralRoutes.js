import { botRoutes } from "./bot.routes.js";
import { Router } from "express"; // Importa express

// Crear el Router principal
const centralRouter = Router();

// Usar botRoutes como middleware
centralRouter.use('/bot', botRoutes);

// Exportar el Router configurado
export const AppRoutes = centralRouter;
