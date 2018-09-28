export const scrollTo = (element, to, duration) => {
  console.log(element, to, duration);
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    console.log(start);

    let animateScroll = () => {
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

export function debouncer (func, timeout) {
    let timeoutID
    timeout = timeout || 200;
    return function () {
        let scope = this,
            args = arguments;
        clearTimeout( timeoutID );
        timeoutID = setTimeout( function () {
            func.apply( scope , Array.prototype.slice.call( args ) );
        } , timeout );
    };
}
