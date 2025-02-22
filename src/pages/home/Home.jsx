import { Link } from "react-router-dom";
import "./style.css";

const fakeRecommendations = [
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
  {
    _id: "52936",
    name: "Saltfish and Ackee",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "For the saltfish, soak the salt cod overnight, changing the water a couple of times.\r\nDrain, then put the cod in a large pan of fresh water and bring to the boil. Drain again, add fresh water and bring to the boil again.\r\nSimmer for about five minutes, or until cooked through, then drain and flake the fish into large pieces. Discard any skin or bones.\r\nFor the dumplings, mix the flour and suet with a pinch of salt and 250ml/9fl oz water to make a dough.\r\nWrap the mixture in clingfilm and leave in the fridge to rest.\r\nOpen the can of ackee, drain and rinse, then set aside.\r\nHeat a tablespoon of olive oil in a pan and fry the onion until softened but not brown.\r\nAdd the spices, seasoning, pepper sauce and sliced peppers and continue to fry until the peppers are tender.\r\nAdd the chopped tomatoes, then the salt cod and mix together. Lastly stir in the ackee very gently and leave to simmer until ready to serve.\r\nWhen you’re almost ready to eat, heat about 1cm/½in vegetable oil in a frying pan and heat until just smoking.\r\nShape the dumpling mix into plum-size balls and shallow-fry until golden-brown. (CAUTION: hot oil can be dangerous. Do not leave the pan unattended.)\r\nDrain the dumplings on kitchen paper and serve with the saltfish and ackee.",
    photo: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
  },
];

const fakeRecipes = [
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
  {
    _id: "52941",
    name: "Red Peas Soup",
    categoryId: "4",
    categoryName: "Soup",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Wash and rinse the dried kidney beans.. then cover with water in a deep bowl. Remember as they soak they will expand to at least triple the size they were originally so add a lot of water to the bowl. Soak them overnight or for at least 2 hrs to make the cooking step go quicker. I tossed out the water they were soaked in after it did the job.\r\n\r\nHave your butcher cut the salted pigtail into 2 inch pieces as it will be very difficult to cut with an ordinary kitchen knife. Wash, then place a deep pot with water and bring to a boil. Cook for 20 minutes, then drain + rinse and repeat (boil again in water). The goal is to make the pieces of pig tails tender and to remove most of the salt it was cured in.\r\n\r\nTime to start the soup. Place everything in the pot (except the flour and potato), then cover with water and place on a high flame to bring to a boil. As it comes to a boil, skim off any scum/froth at the top and discard. Reduce the heat to a gentle boil and allow it to cook for 1 hr and 15 mins.. basically until the beans are tender and start falling apart.\r\n\r\nIt’s now time to add the potato (and Yams etc if you’re adding it) as well as the coconut milk and continue cooking for 15 minutes.\r\n\r\nNow is a good time to start making the basic dough for the spinner dumplings. Mix the flour and water (add a pinch of salt if you want) until you have a soft/smooth dough. allow it to rest for 5 minutes, then pinch of a tablespoon at a time and roll between your hands to form a cigarette shape.\r\n\r\nAdd them to the pot, stir well and continue cooking for another 15 minutes on a rolling boil.\r\n\r\nYou’ll notice that I didn’t add any salt to the pot as the remaining salt from the salted pigtails will be enough to properly season this dish. However you can taste and adjust accordingly. Lets recap the timing part of things so you’re not confused. Cook the base of the soup for 1 hr and 15 minute or until tender, then add the potatoes and cook for 15 minutes, then add the dumplings and cook for a further 15 minutes. Keep in mind that this soup will thicken quite a bit as it cools.\r\n\r\nWhile this is not a traditional recipe to any one specific island, versions of this soup (sometimes called stewed peas) can be found throughout the Caribbean, Latin America and Africa. A hearty bowl of this soup will surely give you the sleepies (some may call it ethnic fatigue). You can certainly freeze the leftovers and heat it up another day.",
    photo: "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
  },
  {
    _id: "52940",
    name: "Brown Stew Chicken",
    categoryId: "4",
    categoryName: "Meat",
    duration: 11,
    complexity: "Hard",
    people: 3,
    favorite: 1,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.",
    photo: "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
  },
  {
    _id: "52939",
    name: "Callaloo Jamaican Style",
    categoryId: "3",
    categoryName: "Salad",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      'Cut leaves and soft stems from the kale branches, them soak in a bowl of cold water for about 5-10 minutes or until finish with prep.\r\nProceed to slicing the onions, mincing the garlic and dicing the tomatoes. Set aside\r\nRemove kale from water cut in chunks.\r\nPlace bacon on saucepan and cook until crispy. Then add onions, garlic, thyme, stir for about a minute or more\r\nAdd tomatoes; scotch bonnet pepper, smoked paprika. Sauté for about 2-3 more minutes.\r\nFinally add vegetable, salt, mix well, and steamed for about 6-8 minutes or until leaves are tender. Add a tiny bit of water as needed. Adjust seasonings and turn off the heat.\r\nUsing a sharp knife cut both ends off the plantain. This will make it easy to grab the skin of the plantains. Slit a shallow line down the long seam of the plantain; peel only as deep as the peel. Remove plantain peel by pulling it back.\r\nSlice the plantain into medium size lengthwise slices and set aside.\r\nCoat a large frying pan with cooking oil spray. Spray the tops of the plantains with a generous layer of oil spray and sprinkle with salt, freshly ground pepper.\r\nLet the plantains "fry" on medium heat, shaking the frying pan to redistribute them every few minutes.\r\nAs the plantains brown, continue to add more cooking oil spray, salt and pepper (if needed) until they have reached the desired color and texture.\r\nRemove and serve with kale',
    photo: "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
  },
  {
    _id: "52938",
    name: "Jamaican Beef Patties",
    categoryId: "2",
    categoryName: "Meat",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Make the Pastry Dough\r\n\r\nTo a large bowl, add flour, 1 teaspoon salt, and turmeric and mix thoroughly.\r\nRub shortening into flour until there are small pieces of shortening completely covered with flour.\r\nPour in 1/2 cup of the ice water and mix with your hands to bring the dough together. Keep adding ice water 2 to 3 tablespoons at a time until the mixture forms a dough.\r\nAt this stage, you can cut the dough into 2 large pieces, wrap in plastic and refrigerate for 30 minutes before using it.\r\nAlternatively, cut the dough into 10 to 12 equal pieces, place on a platter or baking sheet, cover securely with plastic wrap and let chill for 30 minutes while you make the filling.\r\nMake the Filling\r\n\r\nAdd ground beef to a large bowl. Sprinkle in allspice and black pepper. Mix together and set aside.\r\nHeat oil in a skillet until hot.\r\nAdd onions and sauté until translucent. Add hot pepper, garlic and thyme and continue to sauté for another minute. Add 1/4 teaspoon salt.\r\nAdd seasoned ground beef and toss to mix, breaking up any clumps, and let cook until the meat is no longer pink.\r\nAdd ketchup and more salt to taste.\r\nPour in 2 cups of water and stir. Bring the mixture to a boil then reduce heat and let simmer until most of the liquid has evaporated and whatever is remaining has reduced to a thick sauce.\r\nFold in green onions. Remove from heat and let cool completely.\r\nAssemble the Patties\r\n\r\nBeat the egg and water together to make an egg wash. Set aside.\r\nNow you can prepare the dough in two ways.\r\nFirst Method: Flour the work surface and rolling pin. If you had cut it into 2 large pieces, then take one of the large pieces and roll it out into a very large circle. Take a bowl with a wide rim (about 5 inches) and cut out three circles.\r\n\r\nPlace about 3 heaping tablespoons of the filling onto 1/2 of each circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal. \r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue to work until you have rolled all the dough and filled the patties.\r\nSecond Method: If you had pre-cut the dough into individual pieces, work with one piece of dough at a time. Roll it out on a floured surface into a 5-inch circle or a little larger. Don’t worry if the edges are not perfect.\r\n\r\nPlace 3 heaping tablespoons of the filling on one side of the circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal.\r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue work until you have rolled all the dough and filled the patties.\r\n\r\nFrying and Serving the Patties\r\n\r\nAfter forming the patties, place the pans in the refrigerator while you heat the oven to 350 F.\r\nJust before adding the pans with the patties to the oven, brush the patties with egg wash.\r\nBake patties for 30 minutes or until golden brown.\r\nCool on wire racks.\r\nServe warm.",
    photo: "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
  },
  {
    _id: "52937",
    name: "Jerk chicken with rice & peas",
    categoryId: "2",
    categoryName: "Meat",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recommended: 1,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "To make the jerk marinade, combine all the ingredients in a food processor along with 1 tsp salt, and blend to a purée. If you’re having trouble getting it to blend, just keep turning off the blender, stirring the mixture, and trying again. Eventually it will start to blend up – don’t be tempted to add water, as you want a thick paste.\r\n\r\nTaste the jerk mixture for seasoning – it should taste pretty salty, but not unpleasantly, puckering salty. You can now throw in more chillies if it’s not spicy enough for you. If it tastes too salty and sour, try adding in a bit more brown sugar until the mixture tastes well balanced.\r\n\r\nMake a few slashes in the chicken thighs and pour the marinade over the meat, rubbing it into all the crevices. Cover and leave to marinate overnight in the fridge.\r\n\r\nIf you want to barbecue your chicken, get the coals burning 1 hr or so before you’re ready to cook. Authentic jerked meats are not exactly grilled as we think of grilling, but sort of smoke-grilled. To get a more authentic jerk experience, add some wood chips to your barbecue, and cook your chicken over slow, indirect heat for 30 mins. To cook in the oven, heat to 180C/160C fan/gas 4. Put the chicken pieces in a roasting tin with the lime halves and cook for 45 mins until tender and cooked through.\r\n\r\nWhile the chicken is cooking, prepare the rice & peas. Rinse the rice in plenty of cold water, then tip it into a large saucepan with all the remaining ingredients except the kidney beans. Season with salt, add 300ml cold water and set over a high heat. Once the rice begins to boil, turn it down to a medium heat, cover and cook for 10 mins.\r\n\r\nAdd the beans to the rice, then cover with a lid. Leave off the heat for 5 mins until all the liquid is absorbed. Squeeze the roasted lime over the chicken and serve with the rice & peas, and some hot sauce if you like it really spicy.",
    photo: "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",
  },
  {
    _id: "52936",
    name: "Saltfish and Ackee",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "For the saltfish, soak the salt cod overnight, changing the water a couple of times.\r\nDrain, then put the cod in a large pan of fresh water and bring to the boil. Drain again, add fresh water and bring to the boil again.\r\nSimmer for about five minutes, or until cooked through, then drain and flake the fish into large pieces. Discard any skin or bones.\r\nFor the dumplings, mix the flour and suet with a pinch of salt and 250ml/9fl oz water to make a dough.\r\nWrap the mixture in clingfilm and leave in the fridge to rest.\r\nOpen the can of ackee, drain and rinse, then set aside.\r\nHeat a tablespoon of olive oil in a pan and fry the onion until softened but not brown.\r\nAdd the spices, seasoning, pepper sauce and sliced peppers and continue to fry until the peppers are tender.\r\nAdd the chopped tomatoes, then the salt cod and mix together. Lastly stir in the ackee very gently and leave to simmer until ready to serve.\r\nWhen you’re almost ready to eat, heat about 1cm/½in vegetable oil in a frying pan and heat until just smoking.\r\nShape the dumpling mix into plum-size balls and shallow-fry until golden-brown. (CAUTION: hot oil can be dangerous. Do not leave the pan unattended.)\r\nDrain the dumplings on kitchen paper and serve with the saltfish and ackee.",
    photo: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
  },
  {
    _id: "52935",
    name: "Steak Diane",
    categoryId: "3",
    categoryName: "Meat",
    duration: 11,
    complexity: "Hard",
    people: 3,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      'Heat oil in a 12" skillet over medium-high heat. Season steaks with salt and pepper, and add to skillet; cook, turning once, until browned on both sides and cooked to desired doneness, about 4 to 5 minutes for medium-rare. Transfer steaks to a plate, and set aside.\r\nReturn skillet to high heat, and add stock; cook until reduced until to 1⁄2 cup, about 10 minutes. Pour into a bowl, and set aside. Return skillet to heat, and add butter; add garlic and shallots, and cook, stirring, until soft, about 2 minutes. Add mushrooms, and cook, stirring, until they release any liquid and it evaporates and mushrooms begin to brown, about 2 minutes. Add cognac, and light with a match to flambée; cook until flame dies down. Stir in reserved stock, cream, Dijon, Worcestershire, and hot sauce, and then return steaks to skillet; cook, turning in sauce, until warmed through and sauce is thickened, about 4 minutes. Transfer steak to serving plates and stir parsley and chives into sauce; pour sauce over steaks to serve.',
    photo: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
  },
];

export default function Home() {
  function renderImage(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recipe-image" src={imageUrl} />;
  }
  function renderImageBox(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recommended-image" src={imageUrl} />;
  }

  function renderRecommended() {
    return (
      <div>
        <h1 className="title">Recommended</h1>
        <div className="recommendations">
          {fakeRecommendations.map((item, index) => {
            return (
              <Link to="/detail" key={index}>
                {renderImageBox(item)}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <div className="container-top">{renderRecommended()}</div>
        <div className="container-bottom">
          {" "}
          <div className="recipes">
            <h1 className="recipes-title">Top selection</h1>
            {fakeRecipes.map((item, index) => {
              return (
                <div className="recipe">
                  {renderImage(item)}
                  <div className="recipe-info">
                    <div>
                      <p className="recipe-category">{item.categoryName}</p>
                      <h1 className="recipe-name">{item.name}</h1>
                      <div className="recipe-stuff">
                        <p className="recipe-time">{item.duration} minutes</p>
                        <p className="recipe-complexity">{item.complexity}</p>
                        <p className="recipe-people">{item.people} people</p>
                      </div>
                    </div>
                    <Link className="recipe-button" to="/detail" key={index}>
                      See more
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
