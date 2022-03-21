/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


 /* ============================== DARK MODE ============================ */
 const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

 /* ============================== TYPEWRITER ============================ */

document.addEventListener('DOMContentLoaded', () => {
    // time period for writting the text
    const delay = 50;
    let toWrite = ['suis autonome', 'sais travailler en équipe', 'suis organisée', 'suis flexible', 'suis curieuse'];
  
    let textNode, elm, textWrapper = document.getElementById('typewriter');
  
    function writeText(text) {
      // deleting the text in typewriter method
      const textToDeleteLength = textWrapper.children.length;
  
      for(let i = 0; i < textToDeleteLength; i++) {
        setTimeout(function(){
          textWrapper.removeChild(textWrapper.lastChild)
        }, delay * i)
      }
      // adding a letter one after another
      [...text].map(
        (letter, i) => (
          setTimeout(function(){
            textNode = document.createTextNode(letter);
            elm = document.createElement('span');
            elm.appendChild(textNode);           
            textWrapper.appendChild(elm);
          }, delay * (i + textToDeleteLength))
          )
        )
    }
    
    writeText(toWrite[0]);
    let current = 1
    // change word after 2.5 sec
    setInterval(function(){
      writeText(toWrite[current])
      current++;
      if(current >= toWrite.length) {
        current = 0;
      }
    }, 3000)
  });