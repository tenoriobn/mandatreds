const btnCliqueAqui = document.getElementById("footer__link");

btnCliqueAqui.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Você não receberá mais nossos e-mails. Obrigado!');
});