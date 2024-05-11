let prev = document.querySelector('.conpre');
let previewBox= prev.querySelectorAll('.pr');

document.querySelectorAll('.container .card').forEach(card =>{
    card.onclick=() =>{
        prev.style.display ='flex';
        let name= card.getAttribute('data-name');
        previewBox.forEach(pr =>{
            let target = pr.getAttribute('data-target');
            if(name == target){
                pr.classList.add('active');
            };
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        prev.style.display ='none'
    }
});