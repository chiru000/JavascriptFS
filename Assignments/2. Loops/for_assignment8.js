let high = 100;
for (let low = 10; low <= high; low++) {
    if (low % 4 == 0 && low % 5 != 0) {
        console.log(low);
    }
}