import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';


export function initializeWhatsAppClient() {

    const { Client, MessageMedia, LocalAuth } = pkg;

    const client = new Client({
        authStrategy: new LocalAuth({
            dataPath: "sessions",
        }),
        webVersionCache: {
            type: 'remote',
            remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
        }
    });

    client.on('qr', (qr) => {
        // Genera el código QR en la terminal
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('WhatsApp Web Client is ready!');
    });

    client.on('message', async (msg) => {
        const messageBody = msg.body.toLocaleLowerCase();


        switch (true) {
            case messageBody === "!hola":
                await msg.reply('hola desde bot')
        }
    })

    client.initialize();
}
