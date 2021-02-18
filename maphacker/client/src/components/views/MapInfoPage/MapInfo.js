import React from 'react'

function MapInfo(props) {
    const mapId = props.match.params.mapId

    return (
        <div>
            <h3> Map Information Page, Map id : {mapId} </h3>
        </div>
    )
}

export default MapInfo
