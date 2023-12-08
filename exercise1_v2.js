for (let step = 1; step <= 100; step++) {
    const divide3 = step % 3 == 0;
    const divide5 = step % 5 == 0;
    const divideboth = divide3 && divide5;

    /**
     * Short circuiting
     * With the operator ||, returns the first true statement 
     * With the operator &&, if both are true, returns whatever it has on the second operator
     */

    let value =
        (divideboth && "SiteHost") ||
        (divide5 && "Host") ||
        (divide3 && "Site") ||
        step;

    /**
     * {} = Devuelve "value" como parte de la salida
    */
    console.log({value});

}