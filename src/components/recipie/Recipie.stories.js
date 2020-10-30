import React from 'react';

import { Recipie } from './Recipie';

export default {
  title: 'Components/Recipie',
  component: Recipie
}

export const Default = (args) => (
  <Recipie {...args}/>
);

Default.args = {
  drink: {
    "id": 11000,
    "iba": "Contemporary Classics",
    "name": "Mojito",
    "tags": "IBA,ContemporaryClassic,Alcoholic,USA",
    "glass": "Highball glass",
    "video": null,
    "altName": null,
    "category": "Cocktail",
    "alcoholic": "Alcoholic",
    "thumbnail": "https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg",
    "ingredients": [
      {
        "measurement": "2-3 oz",
        "ingredient_name": "Light rum"
      },
      {
        "measurement": "Juice of 1",
        "ingredient_name": "Lime"
      },
      {
        "measurement": "2 tsp",
        "ingredient_name": "Sugar"
      },
      {
        "measurement": "2-4",
        "ingredient_name": "Mint"
      },
      {
        "measurement": null,
        "ingredient_name": "Soda water"
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      },
      {
        "measurement": null,
        "ingredient_name": null
      }
    ],
    "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw."
  }
}