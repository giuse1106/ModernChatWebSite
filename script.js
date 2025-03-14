function inviaWhatsApp() {
    const nome = document.getElementById('nome').value;
    const messaggio = document.getElementById('messaggio').value;
    const numeroTelefono = '393445461546'; // Il tuo numero di telefono

    const messaggioWhatsApp = `Ciao, sono ${nome}. ${messaggio}`;
    const messaggioEncoded = encodeURIComponent(messaggioWhatsApp);

    const url = `https://wa.me/${numeroTelefono}?text=${messaggioEncoded}`;
    window.open(url);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});