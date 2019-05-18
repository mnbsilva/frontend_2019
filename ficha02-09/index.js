const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('bodyparser')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 *1000 //24 horas
}))

app.use(passport.initialize());
app.use(passport.session());

const publicRoot = './wwwroot/'
app.use(express.static(publicRoot))

let users = [{
    id: 1,
    name: "Jude",
    email: "user@email.com",
    password: "password"
    },
    {
    id: 2,
    name: "Emma",
    email: "emma@email.com",
    password: "password2"
    },
   ]

app.get("/", (req, res, next) => {
    res.sendFile("index.html", {root:publicRoot})
})

//fiquei aqui 17/05/2019
//Temos agora que adaptar a nossa API para retornar o utilizador autenticado

app.get("/api/user", (req, res) => {
    console.log(users)
    res.send(users)
})

app.listen(3000, () => {
    console.log("port: 3000")
})