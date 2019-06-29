import React, { Component } from "react";
import { getRecipes } from "../services/recipes-services";
import { Link } from "react-router-dom";

class CustomRecipes extends Component {
  state = {
    customRecipes: []
  };

  componentWillMount() {
    getRecipes()
      .then(recipes => {
        this.setState({ customRecipes: recipes.reverse() });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { customRecipes } = this.state;
    return (
      <div className="custom-recipes-container main-container">
        <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true">
          {customRecipes.map((recipe, i) => (
            <div key={i}>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img
                    src={recipe.images ? recipe.images : null}
                    alt={recipe.name}
                  />
                </div>
                <div className="uk-card-body">
                  <Link to={`/recipe/${recipe._id}`}>
                    <h3 className="uk-card-title">{recipe.name}</h3>
                  </Link>
                  <div className="custom-recipe-card-text">
                    <h5>INGREDIENTS:</h5>
                    <p>{recipe.ingredients}</p>
                  </div>
                </div>
                <div className="uk-card-footer">Difficulty: {recipe.difficulty}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CustomRecipes;
