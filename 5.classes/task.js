class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(currentState) {

        if(currentState < 0) {
            this._state = 0;
        } 
        if(currentState >= 100) {
            this._state = 100;
        }
        if(currentState > 0 && currentState < 100 ) {
            this._state = currentState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];   
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const bookBy = this.books.find(book => book[type] === value);
        return bookBy ? bookBy : null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        return bookIndex === -1 ? null : this.books.splice(bookIndex, 1)[0];
    }
}

//Задача со звездочкой*

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjectList = {};
    }

    addMark(mark, subject) {
        if(mark >= 1 && mark <= 5) {
            if(this.subjectList[subject] === undefined) {
                this.subjectList[subject] = [mark];
            } else {
                this.subjectList[subject].push(mark);
            }
        } else {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }

    getAverageBySubject(subject) {
        if (this.subjectList.hasOwnProperty(subject)) {
            const subjectMarksSum = this.subjectList[subject].reduce((sum, current) => sum + current, 0);
            const subjectMarksAvg = subjectMarksSum / this.subjectList[subject].length;
            console.log('Средний балл по предмету ' + subject + ' ' + subjectMarksAvg.toFixed(2));
            return +subjectMarksAvg.toFixed(2);
        } else {
            return console.log('Несуществующий предмет');
        }
    }

    getAverage() {
        const allMarksList = Object.values(this.subjectList).flat();
        const allMarksMarksAvg = allMarksList.reduce((sum, current) => sum + current, 0) / allMarksList.length;
        console.log('Средний балл по всем предметам ' + allMarksMarksAvg.toFixed(2));
        return +allMarksMarksAvg.toFixed(2);
    }

    exclude(reason) {
        delete this.subjectList;
        this.excluded = reason;
    }
}

const studentFirst = new Student('Helen', 'female', 29);
const studentSecond = new Student('Ross', 'male', 31);
const studentThird = new Student('Harry', 'male', 25);

studentFirst.addMark(5, 'chemistry');
studentFirst.addMark(4, 'chemistry');
studentFirst.addMark(5, 'chemistry');

studentFirst.addMark(5, 'literature');
studentFirst.addMark(3, 'literature');
studentFirst.addMark(4, 'literature');

studentFirst.addMark(4, 'english');
studentFirst.addMark(4, 'english');
studentFirst.addMark(4, 'english');
studentFirst.addMark(6, 'english');

studentFirst.getAverageBySubject('chemistry');
studentFirst.getAverageBySubject('art');

studentFirst.getAverage();

studentFirst.exclude('Исключен за попытку подделать оценки');