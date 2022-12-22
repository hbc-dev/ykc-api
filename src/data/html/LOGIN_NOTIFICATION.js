
module.exports = `<!DOCTYPE html>
<html>
    <head>
        <style>
            .container {
                background-color: whitesmoke;
                font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                color: black;
                display: flex;
                flex-direction:column;
                align-items: center;
            }
            .content {
                background-color: white;
                display: block;
                padding: 40px;
                border-radius: 6px;
                margin: 50px;
                text-align: center;
            }
            #code {
                background-color: whitesmoke;
                padding: 0px;
            }
        </style>
    </head>
    <body class="container">
        <table style="min-width:500px" width="100%" cellspacing="0" cellpadding="0" border="0">
        <h1 style="text-align: center;color: black;">Hola, {username}</h1>
                <table style="min-width:500px" width="100%" cellspacing="0" cellpadding="0" border="0">
            <div class="content">
                <br><p>Se ha iniciado sesión a la cuenta desde el usuario {DiscordUsername} ({DiscordUserId})</p>
                <p>¡Disfruta jugando, cazador de yo-kai!</p>
            
                <p>
                    Porfavor, si tu no has iniciado sesión, reportaló <a href="">aquí</a>.
                    <br> No respondas a este mensaje, no será recibido
                </p>
            
                <p>Yo-Kai Cards &copy; 2022</p>
            </div>
        </table>
        </table>
    </body>
</html>`;