import React, { Component } from 'react'

import RecipeIngredients from './RecipeIngredients'

class RecipeItem extends Component {
  deleteRecipe () {
    this.props.deleteRecipe(this.props.name)
  }

  render () {
    return (
      <div className='recipe-item'>
        <div className='recipe-title'>
          <h2>{this.props.name}</h2>
        </div>
        <RecipeIngredients ingredients={this.props.ingredients} />
        <div className='recipe-buttons'>
          <button onClick={this.deleteRecipe.bind(this)} className="delete-button">Delete</button>
          <button className="edit-button">Edit</button>
        </div>
      </div>
    )
  }
}

export default RecipeItem
