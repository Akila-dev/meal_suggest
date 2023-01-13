import {
  amala,
  eba,
  jollof,
  biscuitsncoffee,
  iyan,
  rice,
  yamnegg,
  yamneggsauce,
  rnb,
  goldenm,
  goldsalad,
  cornflakes,
  cornsalad,
  plantain,
  potato,
  friedricesalad,
  friedrice,
  jollofplantain,
  beans,
  fruitsalad,
  snacks,
  breadtea,
  breadegg,
  breadsauce,
  beancorn,
  porridge,
  yambeans,
  dodobeans,
  yamfish,
  potatofish,
  potatos,
  yamsoup,
  semo,
  noodles,
  noodlesp,
  tuwo,
  chickenchips,
  papmoimoi,
  papakara,
  garrimoimoi,
  ekomilk,
  cornchicken,
  fishpepper,
  spag,
  spagjollof,
  isiewu,
  potatof,
  ekomoimoi,
  potatosauce,
  abacha,
  beansplantain,
  palmrice,
  jollofrnb,
  mpotato,
  canpan,
} from "./mealImages";

export const SUNDAY = {
  breakfast: [
    {
      name: "Biscuits & Coffee",
      type: "light",
      img: biscuitsncoffee,
      ingredients: [],
    },
    {
      name: "Golden morn & Milk",
      type: "light",
      img: goldenm,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Milk",
      type: "light",
      img: cornflakes,
      ingredients: ["cornflakes"],
    },
    {
      name: "Plantain Chips & Milk",
      type: "light",
      img: plantain,
      ingredients: ["plantain"],
    },
    {
      name: "Potato Chips & Milk",
      type: "light",
      img: potato,
      ingredients: ["potato"],
    },
  ],
  lunch: [
    {
      name: "Fried Rice",
      type: "heavy",
      img: friedrice,
      ingredients: ["rice"],
    },
    {
      name: "Jollof Rice",
      type: "heavy",
      img: jollof,
      ingredients: ["rice"],
    },
    {
      name: "Jollof Rice & Plantain",
      type: "heavy",
      img: jollofplantain,
      ingredients: ["rice", "plantain"],
    },
    {
      name: "Fried Rice & Salad",
      type: "heavy",
      img: friedricesalad,
      ingredients: ["rice"],
    },
  ],
  dinner: [
    {
      name: "Beans & Pepper sauce",
      type: "heavy",
      img: beans,
      ingredients: ["beans"],
    },
    {
      name: "Fruit salad",
      type: "heavy",
      img: fruitsalad,
      ingredients: ["fruits"],
    },
    {
      name: "Snacks & Drink",
      type: "heavy",
      img: snacks,
      ingredients: [],
    },
  ],
};

export const MONDAY = {
  breakfast: [
    {
      name: "Bread, Butter & Tea",
      type: "light",
      img: breadtea,
      ingredients: ["bread", "butter"],
    },
    {
      name: "Bread & Egg",
      type: "light",
      img: breadegg,
      ingredients: ["bread", "egg"],
    },
    {
      name: "Bread & egg sauce",
      type: "light",
      img: breadsauce,
      ingredients: ["bread", "egg"],
    },
    {
      name: "Golden morn & Milk",
      type: "light",
      img: goldenm,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Milk",
      type: "light",
      img: cornflakes,
      ingredients: ["cornflakes"],
    },
    {
      name: "Potato Chips & Tea",
      type: "light",
      img: potato,
      ingredients: ["potato"],
    },
  ],
  lunch: [
    {
      name: "Eba & Soup",
      type: "heavy",
      img: eba,
      ingredients: ["eba", "soup"],
    },
    {
      name: "Beans & Corn",
      type: "heavy",
      img: beancorn,
      ingredients: ["beans", "corn"],
    },
    {
      name: "rice & beans",
      type: "light",
      img: rnb,
      ingredients: ["beans", "rice"],
    },
  ],
  dinner: [
    {
      name: "Amala & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["amala", "soup"],
    },
    {
      name: "Porridge",
      type: "heavy",
      img: porridge,
      ingredients: ["yam"],
    },
    {
      name: "Beans & Yam",
      type: "heavy",
      img: yambeans,
      ingredients: ["beans", "yam"],
    },
    {
      name: "Beans & Plantain",
      type: "heavy",
      img: dodobeans,
      ingredients: ["beans", "plantain"],
    },
    {
      name: "Fruit salad",
      type: "heavy",
      img: fruitsalad,
      ingredients: ["fruits"],
    },
  ],
};

export const TUESDAY = {
  breakfast: [
    {
      name: "yam & fish sauce",
      type: "light",
      img: yamfish,
      ingredients: ["yam"],
    },
    {
      name: "potato & fish sauce",
      type: "light",
      img: potatofish,
      ingredients: ["potato"],
    },
    {
      name: "yam & soup",
      type: "light",
      img: yamsoup,
      ingredients: ["yam"],
    },
    {
      name: "potato & soup",
      type: "light",
      img: potatos,
      ingredients: ["potato"],
    },
    {
      name: "Noodles & egg",
      type: "light",
      img: noodles,
      ingredients: ["Noodles", "egg"],
    },
    {
      name: "Noodles & fried plantain",
      type: "light",
      img: noodlesp,
      ingredients: ["Noodles", "plantain"],
    },
  ],
  lunch: [
    {
      name: "Pounded yam & Soup",
      type: "heavy",
      img: iyan,
      ingredients: ["yam", "soup"],
    },
    {
      name: "yam & Beans",
      type: "heavy",
      img: yambeans,
      ingredients: ["yam", "beans"],
    },
    {
      name: "Semo & Soup",
      type: "heavy",
      img: semo,
      ingredients: ["semo", "soup"],
    },
    {
      name: "Tuwo & Soup",
      type: "heavy",
      img: tuwo,
      ingredients: ["tuwo", "soup"],
    },
  ],
  dinner: [
    {
      name: "Chicken & Chips",
      type: "heavy",
      img: chickenchips,
      ingredients: [],
    },
    {
      name: "Beans & Garri",
      type: "heavy",
      img: beans,
      ingredients: ["beans", "garri"],
    },
    {
      name: "Amala & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["amala", "soup"],
    },
  ],
};

export const WEDNESDAY = {
  breakfast: [
    {
      name: "Pap & Moi moi",
      type: "light",
      img: papmoimoi,
      ingredients: ["beans", "pap"],
    },
    {
      name: "Pap & Akara",
      type: "light",
      img: papakara,
      ingredients: ["beans", "pap"],
    },
    {
      name: "Garri & Moi moi",
      type: "light",
      img: garrimoimoi,
      ingredients: ["beans", "garri"],
    },
    {
      name: "Golden morn & Salad",
      type: "light",
      img: goldsalad,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Salad",
      type: "light",
      img: cornsalad,
      ingredients: ["cornflakes"],
    },
    {
      name: "Eko & Milk",
      type: "light",
      img: ekomilk,
      ingredients: [],
    },
  ],
  lunch: [
    {
      name: "Amala & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["amala", "soup"],
    },
    {
      name: "Ofada rice & Stew",
      type: "heavy",
      img: rice,
      ingredients: ["ofada", "stew"],
    },
    {
      name: "Pounded yam & Soup",
      type: "heavy",
      img: iyan,
      ingredients: ["yam", "soup"],
    },
  ],
  dinner: [
    {
      name: "Corn & Chicken",
      type: "heavy",
      img: cornchicken,
      ingredients: ["corn"],
    },
    {
      name: "Beans & Garri",
      type: "heavy",
      img: beans,
      ingredients: ["beans", "garri"],
    },
    {
      name: "Fish Pepper soup",
      type: "heavy",
      img: fishpepper,
      ingredients: [],
    },
  ],
};

export const THURSDAY = {
  breakfast: [
    {
      name: "Rice & Soup",
      type: "heavy",
      img: rice,
      ingredients: ["rice", "soup"],
    },
    {
      name: "Spagetti & Stew",
      type: "light",
      img: spag,
      ingredients: ["spagetti", "stew"],
    },
    {
      name: "Golden morn & Salad",
      type: "light",
      img: goldsalad,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Salad",
      type: "light",
      img: cornsalad,
      ingredients: ["cornflakes"],
    },
  ],
  lunch: [
    {
      name: "Spagetti Jollof",
      type: "light",
      img: spagjollof,
      ingredients: ["spagetti"],
    },
    {
      name: "Beans & Corn",
      type: "heavy",
      img: beancorn,
      ingredients: ["beans"],
    },
    {
      name: "Beans Pottage",
      type: "heavy",
      img: beans,
      ingredients: ["beans"],
    },
  ],
  dinner: [
    {
      name: "Coconut rice & Meat",
      type: "heavy",
      img: rice,
      ingredients: ["rice"],
    },
    {
      name: "Fish Pepper soup",
      type: "heavy",
      img: fishpepper,
      ingredients: [],
    },
    {
      name: "Isi ewu",
      type: "heavy",
      img: isiewu,
      ingredients: [],
    },
    {
      name: "Eko & Milk",
      type: "light",
      img: ekomilk,
      ingredients: [],
    },
  ],
};

export const FRIDAY = {
  breakfast: [
    {
      name: "yam & soup",
      type: "light",
      img: yamsoup,
      ingredients: ["yam"],
    },
    {
      name: "Plantain & Egg",
      type: "light",
      img: amala,
      ingredients: ["plantain", "egg"],
    },
    {
      name: "potato & soup",
      type: "light",
      img: potatos,
      ingredients: ["potato"],
    },
    {
      name: "yam & egg sauce",
      type: "light",
      img: yamneggsauce,
      ingredients: ["yam", "egg"],
    },
    {
      name: "potato & egg sauce",
      type: "light",
      img: potatosauce,
      ingredients: ["potato", "egg"],
    },
    {
      name: "yam & egg",
      type: "light",
      img: yamnegg,
      ingredients: ["yam", "egg"],
    },
    {
      name: "Pancakes & Salad",
      type: "light",
      img: canpan,
      ingredients: [],
    },
  ],
  lunch: [
    {
      name: "Pounded yam & Soup",
      type: "heavy",
      img: iyan,
      ingredients: ["yam", "soup"],
    },
    {
      name: "Abacha & ugba",
      type: "heavy",
      img: abacha,
      ingredients: [],
    },
    {
      name: "Beans Porridge & Plantain",
      type: "heavy",
      img: beansplantain,
      ingredients: ["beans", "plantain"],
    },
    {
      name: "vegetable palm oil rice",
      type: "heavy",
      img: palmrice,
      ingredients: ["rice"],
    },
  ],
  dinner: [
    {
      name: "Jollof rice & beans",
      type: "heavy",
      img: jollofrnb,
      ingredients: ["rice", "beans"],
    },
    {
      name: "Pepper soup",
      type: "heavy",
      img: fishpepper,
      ingredients: [],
    },
    {
      name: "Stewed Yam",
      type: "heavy",
      img: yamsoup,
      ingredients: ["yam"],
    },
    {
      name: "Mashed Potatoes & stew",
      type: "heavy",
      img: mpotato,
      ingredients: ["potato"],
    },
  ],
};

export const SATURDAY = {
  breakfast: [
    {
      name: "Potato Fries & Fish",
      type: "light",
      img: potatof,
      ingredients: ["potato"],
    },
    {
      name: "Pap & Moi moi",
      type: "light",
      img: papmoimoi,
      ingredients: ["beans"],
    },
    {
      name: "Pap & Akara",
      type: "light",
      img: papakara,
      ingredients: ["beans"],
    },
    {
      name: "Eko & Moi moi",
      type: "light",
      img: ekomoimoi,
      ingredients: ["beans"],
    },
    // {
    //   name: "Eko & Akara",
    //   type: "light",
    //   img: amala,
    //   ingredients: ["beans"],
    // },
  ],
  lunch: [
    {
      name: "Snacks & Juice",
      type: "light",
      img: snacks,
      ingredients: [],
    },
    {
      name: "Semo & soup",
      type: "heavy",
      img: semo,
      ingredients: ["semo", "soup"],
    },
    {
      name: "Pounded yam & soup",
      type: "heavy",
      img: iyan,
      ingredients: ["yam", "soup"],
    },
    {
      name: "Spagetti Jollof",
      type: "light",
      img: spagjollof,
      ingredients: ["spagetti"],
    },
  ],
  dinner: [
    {
      name: "Snacks & Drink",
      type: "light",
      img: snacks,
      ingredients: [],
    },
    {
      name: "Yam & egg sauce",
      type: "heavy",
      img: yamneggsauce,
      ingredients: ["egg", "yam"],
    },
    {
      name: "Potato & egg sauce",
      type: "heavy",
      img: potatosauce,
      ingredients: ["egg", "potato"],
    },
    {
      name: "Pounded yam & soup",
      type: "heavy",
      img: iyan,
      ingredients: ["yam", "soup"],
    },
  ],
};
