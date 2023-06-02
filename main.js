const form = document.getElementById('form-validar');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
        const numeroA = parseFloat(document.getElementById('numero-a').value);
        const numeroB = parseFloat(document.getElementById('numero-b').value);
        
        const mensagemSucesso = `Formulário válido!`
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.textContent = '';
        containerMensagemSucesso.style.display = 'none';
        
        
        const mensagemErro = `Formulário inválido!`
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.textContent = '';
        containerMensagemErro.style.display = 'none';
        
        if(numeroA < numeroB){
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        }else{
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        }
        setTimeout(function() {
            containerMensagemErro.style.display = 'none';
            containerMensagemSucesso.style.display = 'none';
        }, 3000);
});
