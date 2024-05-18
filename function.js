
/* Funcion dia y noche */
function toggleTheme() {
    var body = document.querySelector('body');
    var button = document.querySelector('.button');
    
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        button.classList.add('dark-theme');
    } else {
        button.classList.remove('dark-theme');
    }
}

/* Boton Check validado */
function validarFormulario() {
    if (!document.getElementById("miCheck").checked) {
        alert("Por favor, marca la casilla de aceptación de los términos y condiciones.");
        return false; 
    }
    return true; 
}

/* Preguntas y respuestas ocultas/visibles */
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var isAnswerVisible = answer.style.display === 'block';
    var allAnswers = document.querySelectorAll('dd');
    allAnswers.forEach(function(item) {
        item.style.display = 'none';
    });
    if (!isAnswerVisible) {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}
