document.onmousemove = function(event) {
    let x = event.x - 50; //50, потому что у нас центр цвижения на середине круга
    let y = event.y - 50;
    console.log(x + ' ' + y);
    document.querySelector('.y-1').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)';
    document.querySelector('.y-3').style.transform = 'rotate(' + 57.2958 * arcctg(x - 116, y) + 'deg)';//это событие на второй глаз

    function arcctg (x, y) {
       if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
       if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
       if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
       if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
}