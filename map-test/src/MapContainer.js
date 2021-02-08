import React, { useEffect } from 'react'

const {kakao} = window
let infowindow = new kakao.maps.InfoWindow({zIndex:1})

const MapContainer = ({ searchPlace }) => {

    useEffect(() => {
       const container = document.getElementById('myMap')
       const options = {
           center: new kakao.maps.LatLng(33.450701, 126.570667),
           level: 5
       }
       console.log("load...")
       const map = new kakao.maps.Map(container, options)

       const ps = new kakao.maps.services.Places()

       ps.keywordSearch(searchPlace, placesSearchCB)

       function placesSearchCB(data, status, pagination){
           if(status === kakao.maps.services.Status.OK){
                console.log(data)
                let bounds = new kakao.maps.LatLngBounds()

                for (let i = 0; i < data.length; i++){
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)

           }
       }

       function displayMarker(place){
           let marker = new kakao.maps.Marker({
               map: map,
               position: new kakao.maps.LatLng(place.y, place.x)
           })
           kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
            infowindow.open(map, marker)
        })
       }

       kakao.maps.event.addListener(map, 'center_changed', function() {

           let lating = map.getCenter()

           console.log(lating.getLat() + "-----" + lating.getLng())
       })

    }, [searchPlace])

    return (
        <div id='myMap' style={{
            width: '800px',
            height: '800px'
        }}>

        </div>
    )
}

export default MapContainer