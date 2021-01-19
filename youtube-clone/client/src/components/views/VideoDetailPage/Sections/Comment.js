import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment'

function Comment(props) {

    const [commentValue, setcommentValue] = useState("")
    const user = useSelector(state => state.user)

    const onChangeComment = (e) => {
        setcommentValue(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            postId: props.postId,
        }

        console.log(variables)

        axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    props.refreshFunction(response.data.result)
                    setcommentValue("")
                } else {
                    alert('코멘트를 저장하는데 실패 했습니다.')
                }
            })

    }


    return (
        <div>
            <br />
            <p> Replies </p>
            <hr />

            {/* Comment Lists */}
            {props.commentLists && props.commentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction}/>
                        <ReplyComment commentList={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction}/>
                    </React.Fragment>
                )
            ))}

            {/* <SingleComment postId={props.postId} /> */}

            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={onChangeComment}
                    value={commentValue}
                    placeholder="코멘트를 작성 해 주세요"
                />
                <br />
                <button style={{ width: '20%', height: '52px' }} onClick={onSubmit}> Submit </button>
            </form>
        </div>
    )
}

export default Comment
