<script>

jQuery(window).on('load', function(){

  let mobile = new mobileMenu('slide');

  // On Open
  mobile.state.afterOpen = function(){
    let time = 0;
    document.querySelector('#menu-primary').childNodes.forEach(
      child => {
        var timer = setTimeout( () => {
          child.classList ? child.classList.add('animate') : null;
        }, time);
        jQuery("#header-bars-wrap").on('click', () => clearTimeout(timer) );
       time += 200;
      }
    );
  }

  // On Close
  mobile.state.whenClosing = function(){
    document.querySelector('#menu-primary').childNodes.forEach(
      child => {
          child.classList ? child.classList.remove('animate') : null;
      }
    );
  }

});

</script>

<style>

#menu-primary li {
    position: relative;
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -o-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
    margin-bottom: 10px;
    -webkit-transition: transform 0.5s ease-in-out;
    -moz-transition: transform 0.5s ease-in-out;
    -o-transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
}


#menu-primary li a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 2.2em;
    opacity: 0;
    -webkit-transition: opacity 0.5s ease-in-out, color 0.4s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out, color 0.4s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out, color 0.4s ease-in-out;
    transition: opacity 0.5s ease-in-out, color 0.4s ease-in-out;
}

#menu-primary li.animate {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}

#menu-primary li.animate a {
    opacity: 1;
}

</style>
