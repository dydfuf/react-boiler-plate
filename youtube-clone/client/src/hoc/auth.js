import React, { useEffect } from 'react'
import { useDispatch, useSelector }from 'react-redux'
import {auth} from '../_actions/user_action'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(SepecificComponent, option, adminRoute = null){

    /* 
    option
    null => 아무나 출입이 가능한 페이지
    true => 로그인한 유저만 출입이 가능한 페이지
    false => 로그인한 유저는 출입 불가능한 페이지

    adminRoute
    true => admin만!
    */

    function AuthenticationCheck(props){
        const dispatch = useDispatch()
        let user = useSelector(state => state.user)

        //backend에 auth요청

        useEffect(() => {

            dispatch(auth())
            .then(response => {
                //분기처리
                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    } else {//로그인한 유저가 출입 불가능한 페이지
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [dispatch, props.history])

        return(
            <SepecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}