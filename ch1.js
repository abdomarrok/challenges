const readline = require('readline');
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

function addNumber() {
    rl.question('what number you want to add\n', (number) => {
        rl.question('which position', (index) => {
            arr.splice(index, 0, parseInt(number))
            console.table(arr.sort())
            firstrun()
        })
    })
}

function deleteNumber() {
    rl.question('what number you want to delete\n', (number) => {
        const index = arr.indexOf(parseInt(number));
        if (index > -1) {
            arr.splice(index, 1);
            console.table(arr.sort())
        }
        firstrun()
    })
}

function firstrun() {
    console.table(arr.sort())
    rl.question('1: add number \n2: delete number\n', function (number) {
        if (number == 1) {
            addNumber()
            firstrun()
        }
        if (number == 2) {
            deleteNumber()
            firstrun()
        }
    });
}

firstrun()
rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});
