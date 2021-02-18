import React from 'react'

function CategoryPage(props) {
    const categoryId = props.match.params.categoryId

    return (
        <div>
            <h3> CategoryPage, Category id : {categoryId} </h3>
        </div>
    )
}

export default CategoryPage
