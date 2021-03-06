import React, {Component} from "react";

class RecipeDetail extends Component{
  render(){
    const { detailedRecipe } = this.props;
    return (
      <div>
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid="true"
        >
          <div className="uk-card-media-left uk-cover-container">
            <img src={detailedRecipe.recipe.image} alt={detailedRecipe.recipe.label} uk-cover="true" />
            <canvas width="600" height="400" />
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{detailedRecipe.recipe.label}</h3>
              <ul>
                {detailedRecipe.recipe.ingredientLines.map((ingredient, i) => 
                <li key={i}>{ingredient}</li>
                )}
              </ul>
              <a href={detailedRecipe.recipe.url} target="_blank">Go to the recipe</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;
