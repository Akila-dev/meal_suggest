import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import { MealTimeCard, Footer, EditUsername } from "../components";
const userImg = require("../assets/user.jpg");

const Profile = ({ navigation, route }) => {
  const [showEditUser, setShowEditUser] = useState(false);
  const [breakfastTime, setBreakfastTime] = useState("...");
  const [lunchTime, setLunchTime] = useState("...");
  const [dinnerTime, setDinnerTime] = useState("...");
  const [suggestionType, setSuggestionType] = useState("...");
  const [username, setUsername] = useState("...");

  const getBreakfastTime = async () => {
    try {
      AsyncStorage.getItem("breakfastTime").then((value) => {
        if (value !== null) {
          const time = parseInt(value);
          if (time > 12) {
            setBreakfastTime(`${time - 12}:00PM`);
          } else if (time == 12) {
            setBreakfastTime(`12:00PM`);
          } else {
            setBreakfastTime(`${time}:00AM`);
          }
        } else {
          setBreakfastTime("7:00AM");
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
          if (time > 12) {
            setLunchTime(`${time - 12}:00PM`);
          } else if (time == 12) {
            setLunchTime(`12:00PM`);
          } else {
            setLunchTime(`${time}:00AM`);
          }
        } else {
          setLunchTime("2:00PM");
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
          // console.log(time);
          if (time > 12) {
            setDinnerTime(`${time - 12}:00PM`);
          } else if (time === 12) {
            setDinnerTime(`${time}:00PM`);
          } else {
            setDinnerTime(`${time}:00AM`);
          }
        } else {
          setDinnerTime("8:00PM");
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
          if (value === "casual") {
            setSuggestionType("All Foods");
          } else if (value === "moderate") {
            setSuggestionType("At least one from Foodstuff");
          } else {
            setSuggestionType("From Foodstuffs Only");
          }
        } else {
          setSuggestionType("All Foods");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUsername = async () => {
    try {
      AsyncStorage.getItem("username").then((value) => {
        if (value !== null) {
          setUsername(value);
          console.log(username);
        } else {
          console.log(username);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getBreakfastTime();
      getLunchTime();
      getDinnerTime();
      getSuggestionType();
      getUsername();
    });

    return unsubscribe;
  }, [navigation, route]);

  return (
    <View className="flex-1 bg-white">
      <Footer navigation={navigation} />
      {showEditUser ? (
        <EditUsername
          close={() => setShowEditUser(false)}
          username={() => getUsername()}
        />
      ) : (
        <ScrollView>
          <View className="mt-16 mb-8 mx-5 border border-gray-200 rounded-lg p-5">
            <View className="flex-row justify-between items-end mb-7 mt-2">
              <View className="flex- flex-shrink pr-5">
                <View className="">
                  <Text className="font-bold text-xl" numberOfLines={1}>
                    {username}
                  </Text>
                  <Text
                    className="text-sm mt-1 text-gray-400"
                    numberOfLines={1}
                  >
                    {suggestionType}
                  </Text>
                </View>
              </View>
              <View className="flex-grow items-end">
                <Image
                  source={userImg}
                  className="h-[70px] w-[70px] object-cover rounded-full"
                />
              </View>
            </View>
            <View className="flex-row justify-between items-center py-2">
              <MealTimeCard type="Break fast" time={breakfastTime} />
              <MealTimeCard type="Lunch" time={lunchTime} />
              <MealTimeCard type="Dinner" time={dinnerTime} />
            </View>
          </View>

          <View className="px-5 mb-[95px]">
            <TouchableOpacity
              className="p-4 mb-4 bg-white border border-gray-100 rounded"
              onPress={() => setShowEditUser(true)}
            >
              <Text className="text-[15px] font-semibold">
                Edit User Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 mb-4 bg-white border border-gray-100 rounded"
              onPress={() => navigation.navigate("Preference")}
            >
              <Text className="text-[15px] font-semibold">
                Change Preferences
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 mb-4 bg-white border border-gray-100 rounded"
              onPress={() => navigation.navigate("Foodstuffs")}
            >
              <Text className="text-[15px] font-semibold">Add Food Stuffs</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Profile;
