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