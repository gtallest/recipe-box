import React, { Component } from 'react'

import IngredientList from './IngredientList'

class RecipeIngredients extends Component {
  render () {
    return (
      <div className='recipe-ingredients'>
        <h2>Ingredients</h2>
        <hr/>
        <IngredientList ingredients={this.props.ingredients} />

      </div>
    )
  }
}

export default RecipeIngredients
