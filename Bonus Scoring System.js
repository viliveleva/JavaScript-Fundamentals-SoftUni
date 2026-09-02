function solve(input) {
    input = input.map(x => Number(x))
    let students = input.shift()
    let lectures = input.shift()
    let initBonus = input.shift()
    if (lectures === 0 || students === 0) {
        console.log(`Max Bonus: ${totalBonus}.`);
        console.log(`The student has attended ${highestScore} lectures.`);
        return;

    }

    let highestScore = 0;
    let totalBonus = 0;
    for (let i = 0; i < students; i++) {
        let student = input[i];
        if (student <= lectures) {
            if (student > highestScore) {
                highestScore = student;
                totalBonus = Math.ceil(highestScore / lectures * (5 + initBonus))
            }
        }
    }

    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${highestScore} lectures.`);


}
solve([3, 25, 30, 12, 19, 24])