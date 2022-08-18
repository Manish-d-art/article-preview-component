`use strict`

const shareBtn=document.querySelector('.container__share-icon-block ');
const lastSection=document.querySelector('.container__last-section');
const jsFooter=document.querySelector('.social-media-block');

shareBtn.addEventListener('click' , function(){
    jsFooter.classList.remove('hidden');
})