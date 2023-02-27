
import React, {useState} from 'react'
import data from '../store'

export const Products = () => {
    const [catalog, setCatalog] = useState(data)
    return (
        <div className='Products-container'>
            {
                catalog.map((product, index) => {
                    return (
                        <div key={index} className="Product-container">
                            {product.title}
                        </div>
                    )
                })
            }
        </div>
    )
}
