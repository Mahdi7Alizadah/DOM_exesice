// Code here!
let articleClass = document.querySelector('.art-1')
let h3Article = document.querySelector('h3')
h3Article.innerText = 'Potato';

var navChange = document.querySelector('nav');
var linkNav = document.querySelector('a');
linkNav.innerText= 'Start';

var contactLink = document.querySelector('article a[href="#"]:nth-child(4)');
contactLink.innerText='Mail Us';

var articleClassFire=document.querySelector('.art-2')
var changeP= document.querySelector('p')
changeP.innerText= 'hello my firends!How are you today'

var changeBtnClr= document.querySelectorAll('button');
changeBtnClr.forEach(function(button) {
    button.style.backgroundColor = 'blue';
    button.innerText= 'add to cart'
});

var articelBkg= document.querySelector('art-1')
var figureBkg=document.querySelector('figure')
figureBkg.style.backgroundColor='blue';

//window.location.href = 'https://www.example.com';

var changePclr = document.querySelectorAll('p');

changePclr.forEach(function(p) {
    p.style.backgroundColor = 'red';
});

var navcls= document.querySelector('nav')
var activeClass= document.querySelector('a')
activeClass.classList.add('active')

var logoElement = document.querySelector('.logo');
logoElement.classList.remove('logo');
logoElement.addEventListener('click',()=>{
    console.log('Found you1')
})