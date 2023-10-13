(() => { 

    const cursor = document.querySelector('.cursor');
 
    document.addEventListener('mousemove', e => {
       cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
    });
 
    document.addEventListener('click', () => { 
       console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");
 
       cursor.classList.add('cursor--expand');
       console.log(cursor.classList);
    
       setTimeout(() => {
          cursor.classList.remove('cursor--expand');
       }, 500);
    });
 })();
 
 
 