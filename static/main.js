const playBtn = document.querySelector('.play-btn');
const userInput = document.querySelector('.user-input')
const resultUser = document.querySelector("#result-user")

const userName = document.querySelector("#user-name")
const enterBtn = document.querySelector(".enter-btn")

const boxName = document.querySelector("#box-name")


enterBtn.addEventListener('click', ()=> {
   
    const object = {userName: userName.value}  

    fetch('/name', {
    method: 'POST',
    
    headers: {
         'Content-Type': 'application/json'
        },
    body: JSON.stringify(object),
    }).then(response=> response.json())
    .then(response => {
    console.log((response.userNameForPlay));
    boxName.innerHTML = response.userNameForPlay;
    });
    

})




playBtn.addEventListener('click', ()=> {
    
    if(userInput.value == ''){
        alert("Введите число")
    }else if( isNaN(userInput.value)){
        alert("Введите число")
    }
    else if(userInput.value == ' '){
        alert("Введите число, а не ПРОБЕЛ")
    }else if(Number(userInput.value) > 5){
        alert("Введите число меньше 6")
    }else{

        userInput.disabled = true;
        playBtn.disabled = true;

        const obj = {userNumber: userInput.value}    
        fetch('/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(obj),
        }).then(response=> response.json())
        .then(response => {
            console.log(response);
            resultUser.innerHTML =response.message;
        })
        .then(() => {
            setTimeout(() => {
                userInput.disabled = false;
                playBtn.disabled = false;
                resultUser.innerHTML ="Play again";

            }, 1000)
        });
        
    }

})