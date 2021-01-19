import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment'

function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)


    useEffect(() => {

        let commentNumber = 0

        props.commentList.map((comment) => {

            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }

        })

        setChildCommentNumber(commentNumber)
    }, [props.commentLists, props.parentCommentId])

    const renderReplyComment = (parentCommentId) => {
        return props.commentList.map((comment, index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId &&
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment commentList={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </React.Fragment>
        ))
    }

    const onClickReplyComment = () => {
        console.log(OpenReplyComments)
        setOpenReplyComments(!OpenReplyComments)
    }

    return (
        <div>

            {ChildCommentNumber > 0 &&
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }} onClick={onClickReplyComment}>
                    View {ChildCommentNumber} more Comment(s)
                </p>
            }

            {OpenReplyComments &&
                renderReplyComment(props.parentCommentId)
            }
        </div>
    )
}

export default ReplyComment
