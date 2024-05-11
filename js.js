var pv = document.querySelectorAll('.conpre');
var pb = document.querySelectorAll('.card');
var close = document.querySelectorAll('.fa-times');

var popup = function(popupClick){
    pv[popupClick].classList.add('.active');
}
pb.forEach((card, i) => {
    pb.addEventListener("click", () => {
        popup(i);
    });
});

close.forEach((fa-times) => {
    fa-times.addEventListener("click", () => {
        pv.forEach((conpre) => {
            conpre.classList.remove('active');
        });
    });
});