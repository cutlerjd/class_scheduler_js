class Course {
    constructor(name){
        this.name = name;
    }

    scheduleClass(date){
        let classObject = {
         started: false,
         finished: false   
        };
        classObject.name = this.name;
        classObject.startClass = function(){
            this.started = true;
            return "Class has started!"
        }
        classObject.finishClass = function(){
            this.started = false;
            this.finished = true;
            return "Class has finished"
        }
        return classObject
    }
}

let sample = new Course("Hello")
console.log(sample.name)
let sampleClass = sample.scheduleClass("DEC12")
console.log(sampleClass.started)
console.log(sampleClass.startClass())
console.log(sampleClass.finished)
console.log(sampleClass.finishClass())
console.log(sampleClass.finished)