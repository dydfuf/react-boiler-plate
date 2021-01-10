import React, {useState} from 'react'
// import axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';


function LoginPage(props) {

    const dispatch = useDispatch()

    const [Email, setEmail] = useState("") //useState를 누르면 자동으로 생성
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 이게 없으면 버튼을 누를때마다 페이지가 리프레쉬 된다.

        let body = {
            "email": Email,
            "password": Password
        }
        console.log("Password", Password)
        console.log(body)

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/')
            } else {
                alert('Error')
            }
        })


    }

    return (
        <div style={{
            display:'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label> Email </label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label> Password </label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <br/>

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
