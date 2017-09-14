
let ExampleStr = (location.hash).replace('#','');
function goExample(name) {
    $('html, body')
        .animate({scrollTop: $('.' + name + '').offset().top - 50}, 750);
}

if(ExampleStr){
    goExample(ExampleStr);
}

