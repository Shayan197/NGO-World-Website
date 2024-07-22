const scrollToTopButton = document.getElementById('chevron');
const btnLogin = document.getElementById("btn-login");
const close_modal = document.getElementById("close_modal");
const form_data = document.getElementById("login_modal");
const overlay = document.getElementById('overlay');

const hamburger = document.getElementById('hamburger');
const li_items = document.getElementById('li-items');
const cross_1 = document.getElementById('close_modal-1')


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


hamburger.addEventListener('click',function(){
    li_items.style.right = "0"
    hamburger.style.display = "none";
})
cross_1.addEventListener('click', function(){
    if(li_items.style.right = "0"){
        li_items.style.right = "100%";
        hamburger.style.display = "block"
    }
    else{
        li_items.style.right = "0"
    }
})