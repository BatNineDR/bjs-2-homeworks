function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const studentFirst = new Student('Helen', 'female', 29);
const studentSecond = new Student('Ross', 'male', 31);
const studentThird = new Student('Harry', 'male', 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marksList) {
  if(this.marks === undefined) {
    this.marks = marksList;
  } else {
    this.marks = [...this.marks, ...marksList];
  }
}

Student.prototype.getAverage = function() {
  return this.marks.reduce(function(sum, current) {
    return sum + current;
  }, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}