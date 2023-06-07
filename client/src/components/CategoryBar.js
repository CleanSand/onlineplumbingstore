import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { ListGroup } from 'react-bootstrap'

const CategoryBar = observer (() => {
  const {product} = useContext(Context)
  return (
    <ListGroup>
      {product.categories.map(category =>
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          active={category.id === product.SelectedCategories.id}
          onClick={() => product.setSelectedCategories(category)}
          key={category.id}>
          {category.name}
          <ListGroup>
            {product.subcategories.map(subcategory =>
              <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={subcategory.id === product.SelectedSubCategories.id}
                onClick={() => product.setSelectedSubCategories(subcategory)}
                key={subcategory.id}>
                {subcategory.name}
              </ListGroup.Item>
            )}
          </ListGroup>
        </ListGroup.Item>
      )}

    </ListGroup>
  )
});

export default CategoryBar