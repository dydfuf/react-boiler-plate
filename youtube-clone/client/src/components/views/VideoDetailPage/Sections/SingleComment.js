import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd'
import { useSelector } from 'react-redux'
import axios from 'axios'

const { textArea } = Input

function SingleComment(props) {

    const [commentValue, setcommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)
    const user = useSelector(state => state.user)

    const onChangeComment = (e) => {
        setcommentValue(e.currentTarget.value)
    }

    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id
        }


        axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success){
                props.refreshFunction(response.data.result)
                setOpenReply(!OpenReply)
                setcommentValue("")
            } else {
                alert('코멘트를 저장하는데 실패 했습니다.')
            }
        })
        
    }


    const actions = [
        <span onClick={onClickReplyOpen} key="comment-basic-reply-to"> reply to</span>
    ]

    return (
        <div>
            <Comment
                actions={actions}
                author={props.comment.writer.name}
                avatar={<Avatar src={props.comment.writer.image} alt="image" />}
                content={
                    <p>
                        {props.comment.content}
                    </p>
                }
            />
            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <textarea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={onChangeComment}
                        value={commentValue}
                        placeholder="코멘트를 작성 해 주세요"
                    />
                    <br />
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}> Submit </Button>
                </form>
            }

        </div>
    )
}

export default SingleComment
