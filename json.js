//const object = {
    //name: "John",
    //age: 30,
    //city: "New York"
//}
//console.log(object.name)
//const jsonStr = JSON.stringify(object)
//console.log(jsonStr)

const checkStudentStatus = (student) => {
    if (student.gpa > 2) {
        return JSON.stringify(student)
    } else {
        return `คุณ ${student.name} พ้นสภาพ`
    }
}

const student1 = {
    name: "Jonathan",
    lastname: "Jackson",
    age: 25,
    gpa: 1
}
console.log(checkStudentStatus(student1))