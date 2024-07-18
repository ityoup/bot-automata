import { server } from "./server/server.js";
import { initializeWhatsAppClient } from './services/whatsapp/whatsappClient.js';



(async () => {

    await Promise.all([
        new server()
            .startServer(),
        initializeWhatsAppClient()

    ])

})()