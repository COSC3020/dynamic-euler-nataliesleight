function factorial(n) {
    var fact_new;
    var fact = 1;
    var fact_num = 1;
    while (n>0) {
        fact_new = fact * fact_num;
        fact = fact_new;
        fact_num += 1;
        --n;
    }
    return fact;
}

function e(n) {
    var e_new;
    var e_old = 0;
    var e_curr = 1;
    var fact_new;
    var fact = 1;
    var fact_num = 1;
    while (n>0) {
        fact_new = fact * fact_num;
        fact = fact_new;
        fact_num += 1;
        e_new = e_old + e_curr;
        e_old = e_new;
        e_curr = 1.0 / fact;
        --n;
    }
    return e_old;
}
