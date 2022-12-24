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
      img: amala,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Milk",
      type: "light",
      img: amala,
      ingredients: ["cornflakes"],
    },
    {
      name: "Plantain Chips & Milk",
      type: "light",
      img: amala,
      ingredients: ["plantain"],
    },
    {
      name: "Potato Chips & Milk",
      type: "light",
      img: amala,
      ingredients: ["potato"],
    },
  ],
  lunch: [
    {
      name: "Fried Rice",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: ["rice", "plantain"],
    },
    {
      name: "Fried Rice & Salad",
      type: "heavy",
      img: amala,
      ingredients: ["rice"],
    },
  ],
  dinner: [
    {
      name: "Beans & Pepper sauce",
      type: "heavy",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Fruit salad",
      type: "heavy",
      img: amala,
      ingredients: ["fruits"],
    },
    {
      name: "Snacks & Drink",
      type: "heavy",
      img: amala,
      ingredients: [],
    },
  ],
};

export const MONDAY = {
  breakfast: [
    {
      name: "Bread, Butter & Tea",
      type: "light",
      img: amala,
      ingredients: ["bread", "butter"],
    },
    {
      name: "Bread & Egg",
      type: "light",
      img: amala,
      ingredients: ["bread", "egg"],
    },
    {
      name: "Bread & egg sauce",
      type: "light",
      img: amala,
      ingredients: ["bread", "egg"],
    },
    {
      name: "Golden morn & Milk",
      type: "light",
      img: amala,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Milk",
      type: "light",
      img: amala,
      ingredients: ["cornflakes"],
    },
    {
      name: "Potato Chips & Tea",
      type: "light",
      img: amala,
      ingredients: ["potato"],
    },
  ],
  lunch: [
    {
      name: "Eba & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["eba", "soup"],
    },
    {
      name: "Beans & Corn",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: ["yam"],
    },
    {
      name: "Beans & Yam",
      type: "heavy",
      img: amala,
      ingredients: ["beans", "yam"],
    },
    {
      name: "Beans & Potato",
      type: "heavy",
      img: amala,
      ingredients: ["beans", "potato"],
    },
    {
      name: "Beans & Plantain",
      type: "heavy",
      img: amala,
      ingredients: ["beans", "plantain"],
    },
    {
      name: "Fruit salad",
      type: "heavy",
      img: amala,
      ingredients: ["fruits"],
    },
  ],
};

export const TUESDAY = {
  breakfast: [
    {
      name: "yam & fish sauce",
      type: "light",
      img: amala,
      ingredients: ["yam"],
    },
    {
      name: "potato & fish sauce",
      type: "light",
      img: amala,
      ingredients: ["potato"],
    },
    {
      name: "yam & vegetable stew",
      type: "light",
      img: amala,
      ingredients: ["yam"],
    },
    {
      name: "potatoes & vegetable stew",
      type: "light",
      img: amala,
      ingredients: ["potatoes"],
    },
    {
      name: "Noodles & egg",
      type: "light",
      img: amala,
      ingredients: ["Noodles", "egg"],
    },
    {
      name: "Noodles & fried plantain",
      type: "light",
      img: amala,
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
      img: amala,
      ingredients: ["yam", "beans"],
    },
    {
      name: "Semo & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["semo", "soup"],
    },
    {
      name: "Tuwo & Soup",
      type: "heavy",
      img: amala,
      ingredients: ["tuwo", "soup"],
    },
  ],
  dinner: [
    {
      name: "Chicken & Chips",
      type: "heavy",
      img: amala,
      ingredients: [],
    },
    {
      name: "Beans & Garri",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: ["beans", "pap"],
    },
    {
      name: "Pap & Akara",
      type: "light",
      img: amala,
      ingredients: ["beans", "pap"],
    },
    {
      name: "Garri & Moi moi",
      type: "light",
      img: amala,
      ingredients: ["beans", "garri"],
    },
    {
      name: "Golden morn & Salad",
      type: "light",
      img: amala,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Salad",
      type: "light",
      img: amala,
      ingredients: ["cornflakes"],
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
      img: amala,
      ingredients: ["corn"],
    },
    {
      name: "Beans & Garri",
      type: "heavy",
      img: amala,
      ingredients: ["beans", "garri"],
    },
    {
      name: "Fish Pepper soup",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: ["spagetti", "stew"],
    },
    {
      name: "Golden morn & Salad",
      type: "light",
      img: amala,
      ingredients: ["goldenmorn"],
    },
    {
      name: "Corn flakes & Salad",
      type: "light",
      img: amala,
      ingredients: ["cornflakes"],
    },
  ],
  lunch: [
    {
      name: "Spagetti Jollof",
      type: "light",
      img: amala,
      ingredients: ["spagetti"],
    },
    {
      name: "Beans & Corn Porridge",
      type: "heavy",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Beans & Corn",
      type: "heavy",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Beans Pottage",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: [],
    },
    {
      name: "Isi ewu",
      type: "heavy",
      img: amala,
      ingredients: [],
    },
  ],
};

export const FRIDAY = {
  breakfast: [
    {
      name: "Boiled yam & stew",
      type: "light",
      img: amala,
      ingredients: ["yam"],
    },
    {
      name: "Plantain & Egg",
      type: "light",
      img: amala,
      ingredients: ["plantain", "egg"],
    },
    {
      name: "Boiled potato & stew",
      type: "light",
      img: amala,
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
      img: amala,
      ingredients: ["potato", "egg"],
    },
    {
      name: "yam & egg",
      type: "light",
      img: yamnegg,
      ingredients: ["yam", "egg"],
    },
    {
      name: "potato & egg",
      type: "light",
      img: amala,
      ingredients: ["potato", "egg"],
    },
    {
      name: "Pancakes & Salad",
      type: "light",
      img: amala,
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
      img: amala,
      ingredients: [],
    },
    {
      name: "Beans Porridge & Plantain",
      type: "heavy",
      img: amala,
      ingredients: ["beans", "plantain"],
    },
    {
      name: "vegetable palm oil rice",
      type: "heavy",
      img: amala,
      ingredients: ["rice"],
    },
  ],
  dinner: [
    {
      name: "Jollof rice & beans",
      type: "heavy",
      img: amala,
      ingredients: ["rice", "beans"],
    },
    {
      name: "Pepper soup",
      type: "heavy",
      img: amala,
      ingredients: [],
    },
    {
      name: "Stewed Yam",
      type: "heavy",
      img: amala,
      ingredients: ["yam"],
    },
    {
      name: "Mashed Potatoes & stew",
      type: "heavy",
      img: amala,
      ingredients: ["potato"],
    },
  ],
};

export const SATURDAY = {
  breakfast: [
    {
      name: "Potato Fries & Fish",
      type: "light",
      img: amala,
      ingredients: ["potato"],
    },
    {
      name: "Pap & Moi moi",
      type: "light",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Pap & Akara",
      type: "light",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Eko & Moi moi",
      type: "light",
      img: amala,
      ingredients: ["beans"],
    },
    {
      name: "Eko & Akara",
      type: "light",
      img: amala,
      ingredients: ["beans"],
    },
  ],
  lunch: [
    {
      name: "Snacks & Juice",
      type: "light",
      img: amala,
      ingredients: [],
    },
    {
      name: "Semo & soup",
      type: "heavy",
      img: amala,
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
      img: amala,
      ingredients: ["spagetti"],
    },
  ],
  dinner: [
    {
      name: "Snacks & Drink",
      type: "light",
      img: amala,
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
      img: amala,
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
