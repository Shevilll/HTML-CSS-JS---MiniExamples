class Student{
    static numberofstudents = 0
    constructor(name,age,marks){
        this.name = name
        this.age = age
        this.marks = marks
        Student.numberofstudents+=1
    }
    result(){
        if (this.marks >= 50){
            this.create("Good")
        }
        else{
            this.create("Bad")
        }
    }
    create(remarks){
        const items = [this.name,this.age,this.marks,remarks]
        const table = document.getElementById("result")
        const data = table.insertRow()
        for (let i of items){
            const td = document.createElement("td")
            td.textContent = `${i}`
            data.appendChild(td)
        }
    }
}

const student1 = new Student("ABC",20,66).result();
const student2 = new Student("XYZ",25,23).result();
const student3 = new Student("QIQI",10,100).result();



document.getElementById("total").innerHTML = `Total Students: ${Student.numberofstudents}`