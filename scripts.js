let CurrentDigit = 0;

function ChackDigit(){
    let ThinkDigit = 83;
    function NewDigit(){
        CurrentDigit = +prompt('Угадай число от 1 до 100');
        if(!Number.isInteger(Number.parseInt(CurrentDigit))) {
            alert("Нужно ввести число");
            NewDigit();
        };
        if (CurrentDigit === null) {
            return;
        }
    }
    NewDigit();
    if(CurrentDigit > ThinkDigit){
        console.log('Загаданное число меньше');
        ChackDigit(CurrentDigit)
    } else if(CurrentDigit < ThinkDigit){
        console.log('Загаданное число больше');
        ChackDigit(CurrentDigit);
    } else {
        console.log('Поздравляю, Вы угадали!!!');
        return;
    }
}

ChackDigit();

