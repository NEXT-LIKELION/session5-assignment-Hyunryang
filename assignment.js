//1
let userInput = prompt("회원등급을 입력해주세요");

if (userInput = "A") {
    console.log("A,B,C 등급의 영화를 모두 열람할 수 있습니다.");
} else if ((userInput = "B")) {
    console.log("B,C 등급의 영화를 열람할 수 있습니다.");
} else {
    console.log("C 등급의 영화를 열람할 수 있습니다. ");
}

//2
for (let M = 0; M < 5; M++) {
    let result = [];
    for (i = 0; i < -1 * M + 4; i++) {result.push(" ");}
    for (j = 0; j < 2 * M + 1; j++) {result.push("*");}

    console.log(result);
}

//3
let userInput = prompt('0과 1 사이 숫자를 입력해주세요');
let comInput = Math.random();

if (userInput> comInput){
    console.log("사용자가 이겼습니다.");
}

else if (userInput===comInput){
    console.log("비겼습니다.")

}
else {
    console.log("컴퓨터가 이겼습니다.")
}
