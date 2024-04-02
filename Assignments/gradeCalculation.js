function studentGrade(score) {

    switch (true) {
        case (score <= 100 && score >= 90):
            return "'A' Grade"
            break;
        case (score < 90 && score >= 80):
            return "'B' Grade"
            break;
        case (score < 80 && score >= 70):
            return "'C' Grade"
            break;
        default:
            return "JUST PASS"
            break;
    }
}

console.log(studentGrade(69));
