import React, { useEffect, useState } from 'react'
import './favorite.css'
import axios from 'axios'
import { Popover } from 'antd'
import { IMAGE_BASE_URL } from '../../Config'

function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {

        fetchFavoredMovie()
    }, [])

    const fetchFavoredMovie = () => {
        axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })
        .then(response => {
            if (response.data.success) {
                setFavorites(response.data.favorites)
            } else {
                //에러처리
                alert('영화 정보를 가져오는데 실패 했습니다.')
            }
        })
    }

    const onClickDelete = (movieId, userFrom) => {
        
        const variables = {
            movieId,
            userFrom
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
        .then(response => {
            if(response.data.success){
                fetchFavoredMovie()
            } else {
                alert("리스트에서 지우는데 실패 했습니다.")
            }
        })

    }

    const renderCard = Favorites.map((favorite, index) => {

        const Content = (
            <div>
                {favorite.moviePost?
                
                <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`}/> : "no image" }

            </div>
        )


        return <tr key={index}>
            <Popover content={Content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRunTime} mins</td>
            <td><button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}> Remove </button></td>

        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2> Favorite Movies </h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th> Movie Title</th>
                        <th> Movie RunTime</th>
                        <th> Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>

                    {renderCard}

                </tbody>
            </table>



        </div>
    )
}

export default FavoritePage
