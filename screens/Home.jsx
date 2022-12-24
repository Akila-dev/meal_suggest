import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import { Header, SuggestionCard, Footer } from "../components";
import {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
} from "../utilities/Foods";
import emptyImg from "../assets/images/empty.png";

const Home = ({ navigation, route }) => {
  const [breakfastTime, setBreakfastTime] = useState("");
  const [lunchTime, setLunchTime] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");
  const [suggestionType, setSuggestionType] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState("");

  const [mealList, setMealList] = useState([]);
  const [mealSuggestion, setMealSuggestion] = useState([]);

  const getBreakfastTime = async () => {
    try {
      AsyncStorage.getItem("breakfastTime").then((value) => {
        if (value !== null) {
          const time = parseInt(value);
          setBreakfastTime(time);
        } else {
          setBreakfastTime(7);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getLunchTime = async () => {
    try {
      AsyncStorage.getItem("lunchTime").then((value) => {
        if (value !== null) {
          const time = parseInt(value);
          setLunchTime(time);
        } else {
          setLunchTime(14);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getDinnerTime = async () => {
    try {
      AsyncStorage.getItem("dinnerTime").then((value) => {
        if (value !== null) {
          const time = parseInt(value);
          setDinnerTime(time);
        } else {
          setDinnerTime(20);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSuggestionType = async () => {
    try {
      AsyncStorage.getItem("suggestionType").then((value) => {
        if (value !== null) {
          setSuggestionType(value);
          console.log(suggestionType);
        } else {
          setSuggestionType("casual");
        }
      });
      // .then(() => getFoodList())
      // .then(() => mealListConditions());
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodList = async () => {
    try {
      AsyncStorage.getItem("foodStuffs").then((value) => {
        setFoodList(value.split(","));
        console.log(foodList);
      });
    } catch (error) {
      console.log(error);
    }
  };

  var date = new Date();
  let day = date.getDay();
  let time = date.getHours();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getBreakfastTime();
      getLunchTime();
      getDinnerTime();
      getSuggestionType();
    });

    return unsubscribe;
  }, [navigation, route]);

  useEffect(() => {
    setTimeout(() => showSuggestions(), 500);
  }, [suggestionType]);

  const showSuggestions = async () => {
    getSuggestionType()
      .then(() => getFoodList())
      .then(() => mealListConditions());
  };

  const mealListConditions = () => {
    if (day === 0) {
      if (time >= 0 && time < 12) {
        setMealList([...SUNDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...SUNDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...SUNDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 1) {
      if (time >= 0 && time < 12) {
        setMealList([...MONDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...MONDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...MONDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 2) {
      if (time >= 0 && time < 12) {
        setMealList([...TUESDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...TUESDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...TUESDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 3) {
      if (time >= 0 && time < 12) {
        setMealList([...WEDNESDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...WEDNESDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...WEDNESDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 4) {
      if (time >= 0 && time < 12) {
        setMealList([...THURSDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...THURSDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...THURSDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 5) {
      if (time >= 0 && time < 12) {
        setMealList([...FRIDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 17) {
        setMealList([...FRIDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...FRIDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else if (day === 6) {
      if (time >= 0 && time < 12) {
        setMealList([...SATURDAY?.breakfast]);
        setTimeOfDay("Morning");
      } else if (time >= 12 && time < 16) {
        setMealList([...SATURDAY?.lunch]);
        setTimeOfDay("Afternoon");
      } else if (time >= 17 && time < 23) {
        setMealList([...SATURDAY?.dinner]);
        setTimeOfDay("Night");
      }
    } else {
      console.log("wrong date");
    }

    if (suggestionType === "moderate") {
      setMealList((prev) =>
        [...prev]
          .filter((food) => {
            for (let i = 0; i < food.ingredients.length; i++) {
              const item = food.ingredients[i];
              return foodList.includes(item);
            }
          })
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
      );
    } else if (suggestionType === "casual") {
      setMealList((prev) => prev.sort(() => 0.5 - Math.random()).slice(0, 3));
    } else {
      console.log("error");
    }
  };

  return (
    <View className="flex-1 bg-white">
      <Header navigation={navigation} />
      <Footer navigation={navigation} />

      <ScrollView>
        <View className="px-5 py-8">
          <Text className="text-gray-800 text-xl pb-1 font-bold">
            Hello {"New User"}
          </Text>
          {/* <Text>{breakfastTime}</Text>
          <Text>{lunchTime}</Text>
          <Text>{dinnerTime}</Text>
          <Text>{suggestionType}</Text>
          <Text>{foodList}</Text> */}
          <Text className="text-gray-800 text-ss font-light">
            Here's your meal suggestion for the {timeOfDay}
          </Text>
        </View>
        <View className="px-4 pb-[90px]">
          {mealList.length > 0 ? (
            mealList?.map((meal) => (
              <SuggestionCard
                img={meal.img}
                name={meal.name}
                type={meal.type}
                key={meal.name}
              />
            ))
          ) : (
            <View className="text-gray-800 text-ss font-light py-[10px] items-center">
              <Image
                source={emptyImg}
                style={{
                  resizeMode: "contain",
                }}
                className="w-[85%] h-[200px] rounded-xl border"
              />
              <Text className="text-gray-600 text-xl uppercase text-center font-semibold mt-5">
                No suggestion fits your preference
              </Text>
              <Text className="text-gray-800 font-light mt-2 text-center">
                Try switching to All Foods, or add more foodstuffs to your
                inventory
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View className="absolute flex-1 h-screen w-full left-0 top-0 right-0 bottom-0 z-[-1]">
        <View className="h-[50vh] bg-gray-100"></View>
        <View className="h-full"></View>
      </View>
    </View>
  );
};

export default Home;
