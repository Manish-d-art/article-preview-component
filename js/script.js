`use strict`

const shareBtn=document.querySelector('.container__share-icon-block ');
// const lastSection=document.querySelector('.container__last-section');
const jsFooter=document.querySelector('.social-media-block');
const shareBlock=document.querySelector('.share-block');

shareBtn.addEventListener('click' , function(){
    jsFooter.classList.toggle('hidden');
})

shareBlock.addEventListener('click',function(){
    jsFooter.classList.add('hidden');
})