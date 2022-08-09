'use strict';

const imagesFsBgr2 = 'img/bgr1.*n*.jpg';
const countAllImagesFsBgr2 = 4;


function changeMainImg() {

    gsap.to('.firstScreen__bgr2-2', {
        opacity: 0, 
        duration: 3,
        onComplete: () => {
    
            const elements = document.querySelectorAll('.firstScreen__bgr2');
    
            for(let i = 0; i < elements.length; i++) {
    
                elements[i].children[1].src = elements[i].children[0].src;
    
                let arr = elements[0].children[1].src.split('.');
                let nowImg = +arr[arr.length - 2];
    
                if (nowImg < countAllImagesFsBgr2) {
                    elements[i].children[0].src = imagesFsBgr2.replace('*n*', nowImg + 1);
                } else elements[i].children[0].src = imagesFsBgr2.replace('*n*', 1);
                
                elements[i].children[1].style.opacity = 1;
                elements[i].children[0].after(elements[i].children[1]);
    
            }
    
        }
    });

}


setInterval( changeMainImg, 5000 );