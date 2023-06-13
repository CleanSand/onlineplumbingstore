import { observer } from 'mobx-react-lite'
import {Container} from "react-bootstrap";
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../index'
import { fetchCategory, fetchSubcategory } from '../http/productApi'



const CategoryBar = observer (() => {
    const [subcategorys, setSubcategorys] = useState([]);
    async function handleMouseEnter(e) {
        const key = e.target.dataset.key
        const res = await fetchSubcategory(key)
        setSubcategorys(res)
    }

    const {product} = useContext(Context)
    return (
        <div className={'drop-list_category'}>
            <Container style={{width: '100%', display: 'flex'}}>
                <div style={{width: '25%'}}>
                    <ul
                        className="for-ul"
                    >
                        {product.categories.map(category =>
                            <li
                                key={category.IDCategory}
                                data-key={category.IDCategory}
                                onMouseEnter={handleMouseEnter}
                            ><a href="#">
                                <span>{category.Name}</span>
                            </a></li>
                        )}

                    </ul>
                </div>
                <div style={{width: '75%'}}>
                    <div className={'category-list_left'}>
                        <div>
                            <h5>Заголовок списка</h5>
                            <ul id={'Subcategory'}>
                                {subcategorys.map(subcategory =>
                                    <li key={subcategory.IDCategory}><a className="text" href="#">
                                        <span >{subcategory.Name}</span>
                                    </a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
});

export default CategoryBar