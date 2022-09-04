$(document).ready(function () {
  $('#galeria a').fancybox({
    overlayColor: '#f5074f',
    overlayOpacity: 0.3,
    titlePosition: 'over',
    easingOut: 'easeOutBounce',
    easingIn: 'easeInBounce',
    transitionIn: 'fade',
    transitionOut: 'elastic',
    cyclic: true,
    speedIn: 1000,
    speedOut: 1000,
  });

  $('.iframe').fancybox({
    width: '90%',
    height: '90%',
    overlayColor: '#f5074f',
    overlayOpacity: 0.3,
    titlePosition: 'over',
    easingOut: 'easeOutBounce',
    easingIn: 'easeInBounce',
    transitionIn: 'fade',
    transitionOut: 'elastic',
    cyclic: true,
    speedIn: 1000,
    speedOut: 1000,
  });

  $('#titulo').animate(
    {
      width: '20px',
    },
    1000,
    'easeInBounce'
  );
});
