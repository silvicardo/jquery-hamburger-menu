// jquery(ALSO)-hamburger-menu

var navBarlinks = [
                    { html: 'Home', isButton: false },
                    { html: 'Scopri il corso', isButton: false },
                    { html: 'La nostra storia', isButton: false },
                    {html: 'Iscriviti', isButton: true}
                  ];

var navBarRight = document.getElementsByClassName('navbar_right')[0];
var dropdownMenu = document.getElementsByClassName('dropdown_menu')[0];

provideLinksFor(navBarRight, navBarlinks, true);
provideLinksFor(dropdownMenu, navBarlinks, false);

var jQueryObjectsToHandle = [$('.nav_bar'), $('#logo'), $('#menu_unlock'), $('.navbar_menu'), $('.dropdown_menu')];

$('#menu_unlock').click(function () {
  console.log('cliccato');
  toggleOn(jQueryObjectsToHandle, 'menu_active');
});

$('#menu_lock').click(
  function () {
    console.log('cliccato');
    toggleOn(jQueryObjectsToHandle, 'menu_active');
  });

//FUNCTIONS

function toggleOn(jQueryObjects, yourClass) {
  for (var i = 0; i < jQueryObjects.length; i++) {
    jQueryObjects[i].toggleClass(yourClass);
  }
}

function provideLinksFor(element, links, withButtons) {

  for (var i = 0; i < links.length; i++) {
    if (links[i].isButton && withButtons == true) {
      element.innerHTML += '<a href="#" class="button navbar_button">' + links[i].html + '</a>';
    } else {
      element.innerHTML += '<a href="#">' + links[i].html + '</a>';
    }
  }

}
