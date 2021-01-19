import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SideVideo() {

    const [sideVideo, setsideVideos] = useState([])

    useEffect(() => {

        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setsideVideos(response.data.videos)
                } else {
                    alert("비디오 가져오기를 실패 했습니다.")
                }
            })

    }, [])

    const renderSideVideo = sideVideo.map((video, index) => {


        var minutes = Math.floor(video.duration / 60)
        var seconds = Math.floor(video.duration - minutes * 60)
        if (seconds === 0) seconds = "00"

        return <div key={index} style={{ display: 'flex', marginTop: '1rem', padding: '0 2rem' }}>
            <div style={{ width: '40%', marginRight: '1rem' }}>
                <a href>
                    <img style={{ width: '100%', height: '100%' }} src={`http://192.168.35.19:5000/${video.thumbnail}`} alt="thumbnail" />
                </a>
            </div>

            <div style={{ width: '50%' }}>
                <a href style={{ color: 'gray'}}>
                    <sapn style={{ fontSize: '1rem', color: 'black' }}> {video.title} </sapn><br />
                    <span>{video.writer.name}</span><br />
                    <span>{video.views} views </span><br />
                    <span>{minutes} : {seconds}</span><br />
                </a>
            </div>


        </div>

    })


    return (

        <React.Fragment>
            <div style={{ marginTop: '3rem'}}/>
            {renderSideVideo}
        </React.Fragment>

    )
}

export default SideVideo
