import React, { Component } from 'react'

class IngredientList extends Component {
  render () {
    return (
      <div className='ingredient-list'>
        {this.props.ingredients.map((ingredient, i) => {
          return (
            <span key={i} className='ingredient-item'>{ingredient}</span>
          )
        })}
      </div>
    )
  }
}

export default IngredientList
