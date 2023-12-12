/**
 * If the number if divisible by 3 and 5, shows "Site Host"
 * Otherwise, if the number is divisible only by 3, shows "Site"
 * If the number is divisible only by 5, shows "host"
 * In any other case, shows the cycle number
 */

for (let step = 1; step < 101; step++) {
    const three = step % 3 == 0;
    const five =  step % 5 == 0;

    switch(true) {
        case (three && five):
            console.log("Site Host");
            break;
        case (three):
            console.log("Site");
            break;
        case (five):
            console.log("Host");
        default:
            console.log(step);
    }

}