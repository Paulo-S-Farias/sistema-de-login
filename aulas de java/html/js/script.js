const emailinput = document.getElementById('email')
const senhainput = document.getElementById('senha')
const entrarinput = document.getElementById('entrar')

entrarinput.addEventListener('click', () => {
    if(emailinput.value == 'admin@admin.com' & senhainput.value == 1234){
        alert('Login successful')
    } else{
        alert('Login failed')
    }
})
