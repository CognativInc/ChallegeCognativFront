import { Recipe } from "../../Interfaces/RecipeInterface";

const fakeRecipes: Recipe[] = [
  {
    _id: "52944",
    name: "Escovitch Fish",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recommended: 1,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
    photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
  },
  {
    _id: "52943",
    name: "Oxtail with broad beans",
    categoryId: "2",
    categoryName: "Meat",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Toss the oxtail with the onion, spring onion, garlic, ginger, chilli, soy sauce, thyme, salt and pepper. Heat the vegetable oil in a large frying pan over medium-high heat. Brown the oxtail in the pan until browned all over, about 10 minutes. Place into a pressure cooker, and pour in 375ml water. Cook at pressure for 25 minutes, then remove from heat, and remove the lid according to manufacturer's directions.\r\nAdd the broad beans and pimento berries, and bring to a simmer over medium-high heat. Dissolve the cornflour in 2 tablespoons water, and stir into the simmering oxtail. Cook and stir a few minutes until the sauce has thickened, and the broad beans are tender.",
    photo: "https://www.themealdb.com/images/media/meals/1520083578.jpg",
  },
  {
    _id: "52942",
    name: "Roast fennel and aubergine paella",
    categoryId: "3",
    categoryName: "Rices",
    duration: 11,
    complexity: "Hard",
    favorite: 1,
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "1 Put the fennel, aubergine, pepper and courgette in a roasting tray. Add a glug of olive oil, season with salt and pepper and toss around to coat the veggies in the oil. Roast in the oven for 20 minutes, turning a couple of times until the veg are pretty much cooked through and turning golden.\r\n\r\n2 Meanwhile, heat a paella pan or large frying pan over a low– medium heat and add a glug of olive oil. Sauté the onion for 8–10 minutes until softened. Increase the heat to medium and stir in the rice, paprika and saffron. Cook for around 1 minute to start toasting the rice, then add the white wine. Reduce by about half before stirring in two-thirds of the stock. Reduce to a simmer and cook for 10 minutes without a lid, stirring a couple of times.\r\n\r\n3 Stir in the peas, add some seasoning, then gently mix in the roasted veg. Pour over the remaining stock, arrange the lemon wedges on top and cover with a lid or some aluminium foil. Cook for a further 10 minutes.\r\n\r\n4 To ensure you get the classic layer of toasted rice at the bottom of the pan, increase the heat to high until you hear a slight crackle. Remove from the heat and sit for 5 minutes before sprinkling over the parsley and serving.",
    photo: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
  },
];

export default fakeRecipes;
