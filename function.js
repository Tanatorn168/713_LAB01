function calculateTotal(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]; 
    }
    return total; 
}

let studentScores = [10, 20, 30];
let totalScore = calculateTotal(studentScores);
console.log("ผลรวมคะแนนทั้งหมด:", totalScore);
