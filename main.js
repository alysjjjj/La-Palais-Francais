let prev = document.querySelector('.conpre');
let previewBox= prev.querySelectorAll('.pr');

document.querySelectorAll('.foo .food').forEach(food =>{
    food.onclick=() =>{
        prev.style.display ='flex';
        let name= food.getAttribute('data-name');
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