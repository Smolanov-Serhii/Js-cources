
function CheckDigit(){
    let ThinkDigit = 83;
    NewDigit();
    function NewDigit(){
        let CurrentDigit = "";
        CurrentDigit = prompt('Угадай число от 1 до 100');
        if (CurrentDigit === null) {
            return;
        } else if(!Number.isInteger(Number.parseInt(CurrentDigit))) {
            alert("Нужно ввести число");
            NewDigit();
        };
        if(CurrentDigit > ThinkDigit){
            alert('Загаданное число меньше');
            CheckDigit(CurrentDigit)
        } else if(CurrentDigit < ThinkDigit){
            alert('Загаданное число больше');
            CheckDigit(CurrentDigit);
        } else {
            alert('Поздравляю, Вы угадали!!!');
            return;
        }
    }


}

CheckDigit();

