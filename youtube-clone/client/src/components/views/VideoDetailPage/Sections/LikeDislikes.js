import React, { useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons'
import axios from 'axios'

function LikeDislikes(props) {

    const [Likes, setLikes] = useState(0)
    const [DisLikes, setDisLikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    const [DisLikeAction, setDisLikeAction] = useState(null)



    let variables = {}

    if (props.video) {
        variables = { videoId: props.videoId, userId: props.userId }
    }
    else if (props.comment) {
        variables = { commentId: props.commentId, userId: props.userId }
    }

    const onLikeClick = () => {
        if (LikeAction === null) {

            axios.post('/api/like/upLike', variables)
                .then(response => {
                    if (response.data.success) {
                        setLikes(Likes + 1)
                        setLikeAction('liked')

                        if (DisLikeAction !== null) {
                            setDisLikeAction(null)
                            setDisLikes(DisLikes - 1)
                        }
                    } else {
                        alert('likes를 올리지 못하였습니다.')
                    }
                })
        } else {
            axios.post('/api/like/downLike', variables)
                .then(response => {
                    if (response.data.success) {
                        setLikes(Likes - 1)
                        setLikeAction(null)
                    } else {
                        alert('likes를 내리지 못하였습니다.')
                    }
                })
        }
    }

    const onDisLikeClick = () => {
        if (DisLikeAction === null) {

            axios.post('/api/like/upDisLike', variables)
                .then(response => {
                    if (response.data.success) {
                        setDisLikes(DisLikes + 1)
                        setDisLikeAction('disliked')

                        if (LikeAction !== null) {
                            setLikeAction(null)
                            setLikes(Likes - 1)
                        }
                    } else {
                        alert('dislikes를 올리지 못하였습니다.')
                    }
                })
        } else {
            axios.post('/api/like/downDisLike', variables)
                .then(response => {
                    if (response.data.success) {
                        setDisLikes(DisLikes - 1)
                        setDisLikeAction(null)
                    } else {
                        alert('dislikes를 내리지 못하였습니다.')
                    }
                })
        }
    }

    useEffect(() => {
        axios.post('/api/like/getLikes', variables)
            .then(response => {
                if (response.data.success) {

                    //얼마나 많은 좋아요를 받았는지
                    setLikes(response.data.like.length)

                    //내가 미이 그 좋아요를 눌렀는지
                    response.data.like.map(like => {
                        if (like.userId === props.userId) {
                            setLikeAction('liked')
                        }
                    })

                } else {
                    alert('Likes에 대한 정보를 가져오지 못했습니다.')
                }
            })

        axios.post('/api/like/getDisLikes', variables)
            .then(response => {
                if (response.data.success) {

                    //얼마나 많은 싫어요를 받았는지
                    setDisLikes(response.data.dislike.length)

                    //내가 미이 그 좋아요를 눌렀는지
                    response.data.dislike.map(dislike => {
                        if (dislike.userId === props.userId) {
                            setDisLikeAction('disliked')
                        }
                    })

                } else {
                    alert('DisLikes에 대한 정보를 가져오지 못했습니다.')
                }
            })
    }, [])


    return (
        <div>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    {LikeAction === 'liked' ? <LikeFilled onClick={onLikeClick} /> : <LikeOutlined onClick={onLikeClick} />}
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}> {Likes} </span>
            </span>&nbsp;&nbsp;

            <span key="comment-basic-dislike">
                <Tooltip title="DisLike">
                    {DisLikeAction === 'disliked' ? <DislikeFilled onClick={onDisLikeClick} /> : <DislikeOutlined onClick={onDisLikeClick} />}
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}> {DisLikes} </span>
            </span>&nbsp;&nbsp;
        </div>
    )
}

export default LikeDislikes
