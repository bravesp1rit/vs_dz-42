void function (){
    'use strict';

    function Student (name, surname, birthYear){
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.attendance = new Array(10);
        this.scores = new Array(10);

    }
    Student.prototype.getAge = function (){
        return new Date().getFullYear() - this.birthYear;
    }
    Student.prototype.averageScore = function (){
        if(this.scores.length === 0) return 0;
        const sum = this.scores.reduce((acc, item) => acc + item, 0)
        return sum / this.scores.flat().length

    }
    Student.prototype.present = function (){
        for(let i = 0; i < this.attendance.length; i++){
            if(this.attendance[i] === undefined){
                this.attendance[i] = true;
                return;
            } 
        }
    }
    Student.prototype.absent = function (){
        for(let i = 0; i < this.attendance.length; i++){
            if(this.attendance[i] === undefined) {
                this.attendance[i] = false;
                return;
            }
        }
    }
    Student.prototype.mark = function (score){
        for(let i = 0; i < this.scores.length; i++){
            if(score >= 11) return "score can't be bigger than 10";
            if(score < 0) return "score can't be less then 0";
            if(this.scores[i] === undefined){
                this.scores[i] = score;
                return;
            } 
        }
    }
    Student.prototype.summary = function(){
        const numOfVisits = this.attendance.reduce((acc, item) => acc + item, 0);
        const averageVisits = numOfVisits / this.attendance.flat().length;

        console.log(averageVisits, this.averageScore());
        if(averageVisits >= 0.9 && this.averageScore() >= 9) return 'good job!';
        else if (averageVisits >= 0.9 || this.averageScore() >= 9) return 'not bad, but could be better'
        else if (averageVisits < 0.9 && this.averageScore() < 9) return 'take a grip';
    }
    console.dir(Student);

    const student1 = new Student('Sawa', 'Pychev', 1998);

    console.log(student1);
    console.log(student1.getAge());
    student1.present();
    student1.present();
    student1.present();
    student1.present();
    student1.present();
    student1.absent();
    student1.present();
    student1.present();
    student1.present();
    student1.present();
    student1.mark(10);
    student1.mark(8);
    student1.mark(10);
    student1.mark(10);
    student1.mark(10);
    student1.mark(6);
    student1.mark(7)
    console.log(student1.attendance);
    console.log(student1.scores);
    console.log(student1.attendance.flat().length);
    console.log(student1.summary());
}()