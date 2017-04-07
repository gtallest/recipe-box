import React, { Component } from 'react';
import '../../styles/css/App.css';

import RecipeWrapper from './RecipeWrapper'

class App extends Component {
  constructor () {
    super()
    this.state = {
      recipes: [
        { name: 'Fungus Growth',
          ingredients: [
            'Mushrooms',
            'Sweat'
          ]
        },
        {
          name: 'Pasta',
          ingredients: [
            'Noodles',
            'Pasta Sauce',
            'Meatballs'
          ]
        }
      ]
    }
  }
  addRecipe () {
    const newRecipe = {
      name: 'New Recipe',
      ingredients: [
        'Salt',
        'Sugar',
        'Meat',
        'Death'
      ]
    }
    this.setState({
      recipes: [...this.state.recipes, newRecipe]
    })
  }

  deleteRecipe (name) {
    const deleteIndex = this.state.recipes.findIndex(recipe => {
      return recipe.name === name;
    })
    this.setState({
      recipes: [...this.state.recipes.slice(0, deleteIndex), ...this.state.recipes.slice(deleteIndex + 1)]
    })

  }

  render() {
    return (
      <div className="App">
        <RecipeWrapper
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe.bind(this)}
        />
        <div className='add-recipe'>
          <button onClick={this.addRecipe.bind(this)} className='add-button'>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
