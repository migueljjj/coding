function verificarRespuesta () {

    var respuestaCorrecta = document.getElementById('ejercicio').innerText;
    if (respuestaUsuario.trim().toLowerCase() === respuestaCorrecta.toLowerCase ()) {
        document.getElementById('resultado').innerText='correct';

    } else {
        document.getElementById('resultado').innerText = 'incorrect.try again';

    }
}

// Variables para WebRTC
let localStream;
let peerConnection;

// Función para iniciar la captura de pantalla
async function iniciarCompartirPantalla() {
    try {
        // Obtener la pantalla del usuario
        localStream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        // Mostrar el video de la pantalla compartida
        const videoContainer = document.getElementById('video-container');
        const videoElement = document.createElement('video');
        videoElement.srcObject = localStream;
        videoElement.autoplay = true;
        videoElement.controls = true;
        videoContainer.innerHTML = '';
        videoContainer.appendChild(videoElement);

        // Configurar la conexión peer-to-peer (puedes implementar esto según tus necesidades)
        // peerConnection = new RTCPeerConnection();
        // localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        // Implementar la lógica de ejercicios aquí

    } catch (error) {
        console.error('Error al iniciar la captura de pantalla:', error);
    }
}

// Función para verificar la respuesta del ejercicio
function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('ejercicio').innerText;
    // Lógica de verificación del ejercicio
    // ...

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = '¡Correct! o Incorrect. try again.';
}


    // Función para cambiar el video en la pantalla pequeña
    function reproducirVideo(src) {
        var videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '<video controls width="300"><source src="' + src + '" type="video/mp4">Tu navegador no soporta el tag de video.</video>';
    }
                                                                                                         
    // Ejemplo: llamada a la función al hacer clic en un enlace
    document.getElementById('downloaded-videos').addEventListener('click', function(event) {
        if (event.target.tagName === 'SOURCE') {
            var videoSrc = event.target.getAttribute('src');
            reproducirVideo(videoSrc);
        }
    });

