// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageYOffset ||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    }else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop


});

// typed 

var typed3 = new Typed('.typed', {
    strings: ["Bonjour à tous et a toutes, je m'apelle thomas","Bonjour je m'appelle thomas. Je suis actuellement une formation informatique. J'ai decidé de me lancer dans l'apprentissage du code, cela fait 6 mois que ma formation a débuté. Je me forme le plus rapidement possible pour devenir développeur ou adiministrateur réseau."],
    typeSpeed: 20,
    
   
    
  });