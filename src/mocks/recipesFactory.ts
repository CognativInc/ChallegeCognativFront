import faker from "@faker-js/faker";
import { Factory } from "fishery";
import { Recipe } from "../Interfaces/RecipeInterface";

const randomNumber = (max: number, min: number): number =>
  Math.random() * (max - min) + min;

const recipeFactory = Factory.define<Recipe>(() => ({
  _id: faker.datatype.number({ min: 1, max: 200 }).toString(),
  name: faker.lorem.words(randomNumber(1, 4)),
  categoryId: faker.datatype.number({ min: 1, max: 3 }).toString(),
  categoryName: faker.lorem.word(),
  duration: faker.datatype.number({ min: 1, max: 99 }),
  people: faker.datatype.number({ min: 1, max: 50 }),
  ingredients: faker.lorem.words(randomNumber(1, 10)),
  description: faker.lorem.paragraph(2),
  photo: faker.image.food(300, 300),
  recommended: faker.datatype.number({ min: 1, max: 99 }),
  favorite: faker.datatype.number({ min: 1, max: 99 }),
  complexity: faker.lorem.word(),
}));

export const generateRandomRecipe = (): Recipe => recipeFactory.build();
export const generateRandomRecipes = (total: number): Recipe[] =>
  recipeFactory.buildList(total);
