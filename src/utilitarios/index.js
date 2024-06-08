document.addEventListener('DOMContentLoaded', function () {
    
    if (JSON.parse(localStorage.getItem("Logado"))) {
        user = JSON.parse(localStorage.getItem("Logado"))
    } else {
        window.location.href = '../Home/login.html'
    }
    
})

const TestePrimario = () => {
    alert('Hellow Word')
}

export default TestePrimario;