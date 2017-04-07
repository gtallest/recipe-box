import React, { Component } from 'react'

import RecipeItem from './RecipeItem'

class RecipeList extends Component {
  render () {
    return (
      <div className='recipe-list'>
        {this.props.recipes.map((recipe, i) => {
          return (
            <RecipeItem
              key={i}
              name={recipe.name}
              ingredients={recipe.ingredients}
              deleteRecipe={this.props.deleteRecipe}
            />
          )
        })}
      </div>
    )
  }
}

export default RecipeList
