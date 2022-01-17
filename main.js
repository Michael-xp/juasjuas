const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
   document.getElementById ('sidebar').classList.toggle('active');

});


function hide(){
   let over = document.getElementById("overlay")
   over.style.display = 'none'
}