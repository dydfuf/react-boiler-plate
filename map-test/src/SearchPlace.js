import React, { useState } from 'react'
import MapContainer from './MapContainer'

const SearchPlace = () => {
    const [inputText, setInputText] = useState("")
    const [place, setplace] = useState("")

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setplace(inputText)
        setInputText("")
    }

    return (
        <>
            <form className="inputForm" onSubmit={handleSubmit}>
                <input
                    placeholder="Search Place..."
                    onChange={onChange}
                    value={inputText}
                />
                <button type="submit">검색</button>
            </form>
            <MapContainer searchPlace={place} />
        </>
    )
}

export default SearchPlace
