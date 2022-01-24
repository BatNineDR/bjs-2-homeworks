class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) throw new Error('error text');
        if (this.alarmCollection.find(alarm => alarm.id === id)) {
            console.error('Будильник с таким id уже существует')
        } else {
            this.alarmCollection.push({
                time: time,
                callback: callback,
                id: id
            });
        }  
    }

    removeClock(id) {
        const idIndex = this.alarmCollection.findIndex(alarm => alarm.id === id);
        let idDelete = false;
        if (idIndex >= 0) {
            idDelete = this.alarmCollection.splice(idIndex, 1);
        }
        return idDelete ? true : false;
    }

    getCurrentFormattedTime(addMinutes = 0) {
        const currentTime = new Date(new Date().setTime(new Date().getTime() + (addMinutes * 60 * 1000)));
        const formattedHrs = currentTime.getHours();
        const formattedMns = currentTime.getMinutes();
        let formattedTime;
        if (formattedHrs < 10 && formattedMns < 10) {
            formattedTime = '0' + formattedHrs + ':' + '0' + formattedMns;
        } else if (formattedHrs < 10) {
            formattedTime = '0' + formattedHrs + ':' + formattedMns;
        } else if (formattedMns < 10) {
            formattedTime = formattedHrs + ':' + '0' + formattedMns;
        } else {
            formattedTime = formattedHrs + ':' + formattedMns;
        }
        return formattedTime;
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    if (this.checkClock(alarm)) {
                        alarm.callback();
                    }
                });
            }, 1000);
        }
    }

    checkClock(alarm) {
        return alarm.time === this.getCurrentFormattedTime();
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log('Будильник: ' + alarm.id + ' ' + 'Заведен на ' + alarm.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

function testCase() {
    const testAlarmClock = new AlarmClock();
    testAlarmClock.addClock(testAlarmClock.getCurrentFormattedTime(), () => console.log('Пора сдавать ДЗ'), 1);
    testAlarmClock.addClock(
    testAlarmClock.getCurrentFormattedTime(1), () => {
        console.log('Точно пора')
        testAlarmClock.removeClock(2)
    }, 2)

    //testAlarmClock.addClock(testAlarmClock.getCurrentFormattedTime(), () => console.log('Дедлайн вот-вот')); /id не передан
    testAlarmClock.addClock(testAlarmClock.getCurrentFormattedTime(2), () => {
        console.log('Не тяни');
        testAlarmClock.clearAlarms();
        testAlarmClock.printAlarms();
    }, 3)
    testAlarmClock.printAlarms();
    testAlarmClock.start();
    
}

testCase();