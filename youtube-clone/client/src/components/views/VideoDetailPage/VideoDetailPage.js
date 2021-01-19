import React, { useEffect, useState } from 'react'
import { Row, Col, List, Avatar } from 'antd'
import axios from 'axios'
import SideVideo from './Sections/SideVideo'
import Subscribe from './Sections/Subscribe'
import Comment from './Sections/Comment'

function VideoDetailPage(props) {

    const videoId = props.match.params.videoId
    const [VideoDetail, setVideoDetail] = useState([])
    const [Comments, setComments] = useState([])

    const variable = { videoId: videoId}

    useEffect(() => {

        axios.post('/api/video/getVideoDetail', variable)
        .then(response => {
            if(response.data.success) {
                setVideoDetail(response.data.videoDetail)
            } else {
                alert(" 비디오 정보를 가져오는데 실패 했습니다. ")
            }
        })

        axios.post('/api/comment/getComments', variable)
        .then(response => {
            if(response.data.success) {
                console.log(response.data)
                setComments(response.data.comment)
            } else {
                alert(" 댓글 정보를 가져오는데 실패 했습니다.")
            }
        })
    }, [])

    const refreshFunction = (newComment) => {
            setComments(Comments.concat(newComment))
    }

    if(VideoDetail.writer){


        const subscribeButton = VideoDetail.writer._id !== localStorage.getItem('userId') && <Subscribe userTo={VideoDetail.writer._id} userFrom={localStorage.getItem('userId')} />

        return (
            <Row gutter={[16, 16]}>
                <Col lg={18} xs={24}>
    
                    <div style={{ width: '100%', height: 'auto', padding: '3rem' }}>
                        <video
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            margin: '30px auto',
                            borderRadius: '20px',
                            backgroundColor: '#f0f0f0',
                            padding: '0px',
                            boxSizing: 'border-box',
                            boxShadow: '0px 8px 33px #999'
                        }}
                        src={`http://192.168.35.19:5000/${VideoDetail.filePath}`} controls />
    
                        <List.Item
                            actions={[subscribeButton]}
                        >
                            <List.Item.Meta
                                avtar={<Avatar src={VideoDetail.writer.image}/>}
                                title={VideoDetail.writer.name}
                                description={VideoDetail.description}
                            />
                        </List.Item>
    
                        {/* Comments */}
                        <Comment commentLists={Comments} postId={videoId} refreshFunction={refreshFunction}/>
    
                    </div>
    
                </Col>
    
                <Col lg={6} xs={24}>
                    <SideVideo />
                </Col>
            </Row>
        )
    } else{
        return(
            <div> ...Loading </div>
        )
    }
}

export default VideoDetailPage
