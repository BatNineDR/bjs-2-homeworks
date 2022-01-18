//Задача 1

function parseCount(value) {
    if(isNaN(Number.parseInt(value))) throw new Error('Невалидное значение');
    return Number.parseInt(value)
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }
}

//Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(a + b < c || a + c < b || b + c < a) throw new Error('Треугольник с такими сторонами не существует')
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const semiPerimeter = 0.5 * this.getPerimeter();
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return {
            getPerimeter: () => 'Ошибка! Треугольник не существует',
            getArea: () => 'Ошибка! Треугольник не существует'
        };
    }
}