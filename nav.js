const header = `

    <a href="/">
        <div class="logo">
            <img src="/Icons/Logo_600.png" alt="Logo">
            <div></div>
        </div>
        <h1>Leon Mayer</h1>
    </a>
    <nav>
        <a class="aFotos" href="/fotos">Fotos</a>
        <a class="aFilme" href="/filme">Filme</a>
        <a class="aAbout" href="/über-mich">Über Mich</a>
        <a class="aKonkt" href="/kontakt">Kontakt</a>
    </nav>
    <div class="socials">
        <a href="https://instagram.com/leonm.fotos/" target="_blank"><img src="/Icons/Insta.jpg" alt="Instagram"></a>
        <a href="https://youtube.com/@leonm.videos/" target="_blank"><img src="/Icons/YTube.jpg" alt="YouTube"></a>
    </div>

`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("headerJS").innerHTML = header
})




const footer = `

    <div class="fSocials">
        <a href="https://instagram.com/leonm.fotos/" target="_blank"><img src="/Icons/Insta.jpg"></a>
        <a href="https://youtube.com/@leonm.videos/" target="_blank"><img src="/Icons/YTube.jpg"></a>
    </div>
    <div class="fPages">
        <a href="/">Home</a>
            <p class="dot">•</p>
        <a href="/fotos">Fotos</a>
            <p class="dot">•</p>
        <a href="/filme" >Filme</a>
            <p class="dot">•</p>
        <a href="/über-mich">Über Mich</a>
            <p class="dot">•</p>
        <a href="/kontakt">Kontakt</a>
    </div>
    <p class="fCopyright">© Leon Mayer, 2026</p>

`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footerJS").innerHTML = footer
})
