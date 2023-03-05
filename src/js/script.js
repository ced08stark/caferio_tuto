

const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');


open.addEventListener('click', function(){
    nav.classList.remove('-right-full');
    nav.classList.add('right-0');
})


close.addEventListener('click', function(){
    nav.classList.remove('right-0');
    nav.classList.add('-right-full');
})


//lightbox
const lightbox = document.querySelector('.lightbox');

const lightboxbody = document.querySelector('.lightbox-body');

const images = document.querySelectorAll('#gallery');
cd
console.log(images);

images.forEach(function(image){
    image.addEventListener('click', function(){
        lightbox.classList.remove('scale-0');
        lightbox.classList.add('scale-100');
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('w-full');
        img.classList.add('h-full');
        img.classList.add('object-cover');
        if(lightboxbody.children[0]){
            lightboxbody.removeChild(lightboxbody.children[0]);
        }
        lightboxbody.appendChild(img);
       
    })
})

lightbox.addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id'));
    const idName = e.target.getAttribute('id');
    if(idName === 'lightbox'){
        lightbox.classList.remove('scale-100');
        lightbox.classList.add('scale-0');
    }
    
})


const year = document.querySelector('.year');
const getYear = new Date().getFullYear();
year.innerText = getYear;


const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
    loader.classList.remove('flex');
    loader.classList.add('hidden');
    console.log(loader.classList);
})
