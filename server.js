// const http = require('http')

// let server = http.createServer((request, response)=> {
//     response.writeHead(200);
//     response.end('Serik Kamidolla')
// })
// server.listen(7878, () => {
//     console.log('server listens on port 7878')
// })


const express = require('express')
const randomizer = require('./randomizer')

const app = new express();
app.use(express.json());
const responseObj = {};
const responseUser = {
    money:5000
};



app.post('/name', (request, response)=> {
    
    // responseUser.name = request.body
    // response.send(JSON.stringify(responseUser));
    responseUser.userNameForPlay = request.body.userName
    console.log(request.body.userName)
    response.send(JSON.stringify(responseUser));
    
    
})

app.post('/user', (request, response)=> {
    let randomNumber = randomizer();
    if(+request.body.userNumber === randomNumber){
        responseObj.message = `You win ${responseUser.userNameForPlay}`
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber} YOU WON`)
    }else{
        responseObj.message = `You lost ${responseUser.userNameForPlay}`
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber} YOU LOST LOSER`)
    }
    response.send(JSON.stringify(responseObj));
})

app.use(express.static('static')).listen(5000, () => {
    console.log('Express Server POST 5000')
})