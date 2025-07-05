$(document).ready(function() {

    let testTerminado = false

    $(document).on("click", ".botonTest", function() {
        $('input[name=pregunta1]').prop('checked',false)
        $('input[name=pregunta2]').prop('checked',false)
        $('input[name=pregunta3]').prop('checked',false)
        $('input[name=pregunta4]').prop('checked',false)

        testTerminado = false
    })

    $("#enviarRespuestas").on("click", function() {
        if (testTerminado) {
            $("#respuesta1Correcta").slideUp()
            $("#respuesta1Error").slideUp()
            $("#respuesta2Correcta").slideUp()
            $("#respuesta2Error").slideUp()
            $("#respuesta3Correcta").slideUp()
            $("#respuesta3Error").slideUp()
            $("#respuesta4Correcta").slideUp()
            $("#respuesta4Error").slideUp()
            $("#enviarRespuestas").text("Enviar respuestas")
            $("#modalTest").modal("hide")
        } else {
            let pregunta1Respuesta = document.querySelector('input[name="pregunta1"]:checked')
            let pregunta2Respuesta = document.querySelector('input[name="pregunta2"]:checked')
            let pregunta3Respuesta = document.querySelector('input[name="pregunta3"]:checked')
            let pregunta4Respuesta = document.querySelector('input[name="pregunta4"]:checked')

            // Bloque de codigo que permite verificar que las cuatro preguntas se encuentren contestadas; en caso contrario, informa,
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
            } else if (!pregunta4Respuesta) {
                alert("No ha seleccionado opcion en la cuarta pregunta")
                return
            }

            // if (testTerminado) {
                
            // }

            // Bloque de verificacion de las respuestas, y activacion del cuadro que corresponda, segun se la respuesta esta correcta o no
            if (pregunta1Respuesta.value == "1") {
                $("#respuesta1Correcta").slideDown()
            } else {
                $("#respuesta1Error").slideDown()
            }
            if (pregunta2Respuesta.value == "1") {
                $("#respuesta2Correcta").slideDown()
            } else {
                $("#respuesta2Error").slideDown()
            }
            if (pregunta3Respuesta.value == "1") {
                $("#respuesta3Correcta").slideDown()
            } else {
                $("#respuesta3Error").slideDown()
            }
            if (pregunta4Respuesta.value == "1") {
                $("#respuesta4Correcta").slideDown()
            } else {
                $("#respuesta4Error").slideDown()
            }

            $("#enviarRespuestas").text("Cerrar Test")
            testTerminado = true
        }
        
    })
})