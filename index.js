const scrollToTopButton = document.getElementById('chevron');
const btnLogin = document.getElementById("btn-login")
const close_modal = document.getElementById("close_modal")
const form_data = document.getElementById("login_modal")
const overlay = document.getElementById('overlay');


window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none"; 
    }
});
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
btnLogin.addEventListener('click',function(){
    form_data.style.display = "block";
    overlay.style.display = "block";
});
close_modal.addEventListener('click',function(){
    form_data.style.display = "none";
    overlay.style.display = "none"
});