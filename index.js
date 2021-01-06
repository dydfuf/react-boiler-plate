const express = require('express')
const app = express()
const port = 3000

const bodyPaerser = require('body-parser')
const { User } = require('./models/User')

const config = require('./config/key')

const cookieParser = require('cookie-parser')

//application/x-www-form-urlencoded
app.use(bodyPaerser.urlencoded({extended: true}))

//application/json
app.use(bodyPaerser.json())

app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))
 
app.get('/', (req, res) => {
  res.send('Hello World! 새해복 많이 받으세요!')
})

app.post('/register', (req, res) => {
    
    //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터 베이스에 넣어 준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})

app.post('/login', (req, res) => {

    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user){//없으면
            return res.json({
                loginSuccess: false,
                message: "해당하는 이메일에 유저가 없습니다."
            })
        }
        //요청된 이메일이 데이터베이스에 있다면, 비밀번호가 맞는 비밀번호인지 확인.

        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(!isMatch)
                return res.json( { loginSuccess: false, message: "비밀번호가 틀렸습니다."})

            //비밀번호까지 맞다면 토큰을 생성하기
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다. 어디에? 쿠키, 로컬 스토리지, 세션 여기서는 쿠키에
                res.cookie("x_auto", user.token)
                .status(200)
                .json({ loginSuccess: true, userID: user._id})

            })

        })




    })

    




})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})