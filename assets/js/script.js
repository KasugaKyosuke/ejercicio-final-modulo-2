$(document).ready(function() {
    $(document).on("click", ".botonTest", function() {
        $('input[name=pregunta1]').prop('checked',false)
        $('input[name=pregunta2]').prop('checked',false)
        $('input[name=pregunta3]').prop('checked',false)
    })

    $("#enviarRespuestas").on("click", function() {
        let pregunta1Respuesta = document.querySelector('input[name="pregunta1"]:checked')
        let pregunta2Respuesta = document.querySelector('input[name="pregunta2"]:checked')
        let pregunta3Respuesta = document.querySelector('input[name="pregunta3"]:checked')

        // Bloque de codigo que permite verificar que las tres preguntas se encuentren contestadas; en caso contrario, informa,
        // por medio de un alert, cual es la pregunta que falta por responder
        if (!pregunta1Respuesta) {
            alert("No ha seleccionado opcion en la primera pregunta")
            return
        } else if (!pregunta2Respuesta) {
            alert("No ha seleccionado opcion en la segunda pregunta")
            return
        } else if (!pregunta3Respuesta) {
            alert("No ha seleccionado opcion en la tercera pregunta")
            return
        }

        // Bloque de verificacion de las respuestas
        if (pregunta1Respuesta.value == "1") {
            alert("Respuesta correcta!!!!")
        } else {
            alert("Respuesta incorrecta ToT")
        }
    })
})