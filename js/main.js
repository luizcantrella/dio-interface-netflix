$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#filme-principal-info-btn').click(function() {
    const boxInfo = document.querySelector('#filme-principal-info-box');
    boxInfo.classList.add('visivel')
    boxInfo.style.display = 'block';    
});