import React, { Component } from 'react'

import RecipeList from './RecipeList'

class RecipeWrapper extends Component {
  render () {
    return (
      <div className='recipe-wrapper'>
        <RecipeList
          recipes={this.props.recipes}
          deleteRecipe={this.props.deleteRecipe}
        />
      </div>
    )
  }
}

export default RecipeWrapper
