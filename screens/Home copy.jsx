import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import createSender from "../utilities/register";
import { addNotificationReceivedListener } from "expo-notifications";

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

const Home = ({ navigation }) => {
  const [breakfastTime, setBreakfastTime] = useState("");
  const [lunchTime, setLunchTime] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");
  const [suggestionType, setSuggestionType] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("Morning");

  const [mealList, setMealList] = useState([...SUNDAY?.breakfast]);
  const [mealSuggestion, setMealSuggestion] = useState([]);

  // PUSH NOTIFICATION SENDER
  const [sender, setSender] = useState(null);

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

  useEffect(() => {
    getBreakfastTime();
    getLunchTime();
    getDinnerTime();
    getSuggestionType();
  }, []);

  var date = new Date();
  let day = date.getDay();
  let time = date.getHours();
  useEffect(() => {
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
    }
  }, [day, time]);

  useEffect(() => {
    const shuffledList = [...mealList].sort(() => 0.5 - Math.random());
    setMealSuggestion(shuffledList.slice(0, 3));
  }, [day, time]);

  const getSuggestionType = async () => {
    try {
      AsyncStorage.getItem("suggestionType").then((value) => {
        if (value !== null) {
          setSuggestionType(value);
        } else {
          setSuggestionType("casual");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // !PUSH NOTIFICATION
  // useEffect to get token and create sender, add listener for alerts
  useEffect(() => {
    // create send function promise
    const s = createSender();
    // add notification listener to trigger events when notification is sent
    addNotificationReceivedListener((notification) => {
      console.log("Notification Coming!");
      console.log(notification);
    });
    // add function to state when send promise resolves
    s.then((sendFunc) => {
      console.log(typeof sendFunc);
      setSender({ sendFunc });
    });
  }, []);

  // useEffect that will send push alert
  useEffect(() => {
    // if the send function exists, send a notification
    if (sender && sender.sendFunc instanceof Function) {
      console.log(sender);
      sender.sendFunc(`Your meal suggestion for this ${timeOfDay}`);
    }
  }, [sender]);

  return (
    <View className="flex-1 bg-white">
      <Header navigation={navigation} />
      <Footer navigation={navigation} />

      <ScrollView>
        <View className="px-5 py-8">
          <Text className="text-gray-800 text-xl pb-1 font-bold">
            Hello {"New User"}
          </Text>
          <Text className="text-gray-800 text-ss font-light">
            Here's your meal suggestion for the {"Morning"}
          </Text>
        </View>
        <View className="px-4 pb-[90px]">
          {mealSuggestion.map((meal) => (
            <SuggestionCard
              img={meal.img}
              name={meal.name}
              type={meal.type}
              // key={meal}
            />
          ))}
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
