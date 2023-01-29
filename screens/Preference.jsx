import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";

import { Footer, Header } from "../components";
import { BREAKFAST, LUNCH, DINNER } from "../utilities/timeOptions";
import { mealTypes } from "../utilities/mealTypes";

const Preference = ({ navigation, route }) => {
  const [breakfastTime, setBreakfastTime] = useState("");
  const [lunchTime, setLunchTime] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");
  const [suggestionType, setSuggestionType] = useState("");

  const getBreakfastData = async () => {
    try {
      AsyncStorage.getItem("breakfastTime").then((value) => {
        if (value !== null) {
          setBreakfastTime(value);
        } else {
          setBreakfastTime("7");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getLunchData = async () => {
    try {
      AsyncStorage.getItem("lunchTime").then((value) => {
        if (value !== null) {
          setLunchTime(value);
        } else {
          setLunchTime("14");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getDinnerData = async () => {
    try {
      AsyncStorage.getItem("dinnerTime").then((value) => {
        if (value !== null) {
          setDinnerTime(value);
        } else {
          setDinnerTime("20");
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
        } else {
          setSuggestionType("casual");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBreakfastData();
    getLunchData();
    getDinnerData();
    getSuggestionType();
  }, [navigation, route]);

  useEffect(() => {
    saveData("breakfastTime", breakfastTime);
  }, [breakfastTime]);

  useEffect(() => {
    saveData("lunchTime", lunchTime);
  }, [lunchTime]);

  useEffect(() => {
    saveData("dinnerTime", dinnerTime);
  }, [dinnerTime]);

  useEffect(() => {
    saveData("suggestionType", suggestionType);
  }, [suggestionType]);

  const saveData = async (name, value) => {
    let data = value;
    try {
      await AsyncStorage.setItem(name, data);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <View className="flex-1 bg-white">
      <Header />
      <Footer navigation={navigation} />

      <ScrollView>
        <View className="pb-[105px] px-5">
          <Text className="font-semibold text-lg text-gray-800 py-5">
            Preferences:
          </Text>
          <View className="border border-gray-200 bg-white px-5 py-8">
            <Text className="font-semibold text-center text-xs text-gray-400 uppercase">
              Time of Meal
            </Text>
            <View className="pt-7 pb-3">
              <View className="flex-row justify-between items-center my-1">
                <Text className="font-semibold flex-shrink text-center text-sm text-gray-800 uppercase pr-5">
                  BREAKFAST:
                </Text>
                <View className="font-semibold flex-grow text-center text-sm bg-gray-50 uppercase justify-end px-2 rounded-lg">
                  <RNPickerSelect
                    value={breakfastTime}
                    onValueChange={(value) => setBreakfastTime(value)}
                    items={BREAKFAST}
                  />
                </View>
              </View>
              <View className="flex-row justify-between items-center my-1">
                <Text className="font-semibold flex-shrink text-center text-sm text-gray-800 uppercase pr-5">
                  LUNCH:
                </Text>
                <View className="font-semibold flex-grow text-center text-sm bg-gray-50 uppercase justify-end px-2 rounded-lg">
                  <RNPickerSelect
                    value={lunchTime}
                    onValueChange={(value) => setLunchTime(value)}
                    items={LUNCH}
                  />
                </View>
              </View>
              <View className="flex-row justify-between items-center my-1">
                <Text className="font-semibold flex-shrink text-center text-sm text-gray-800 uppercase pr-5">
                  DINNER:
                </Text>
                <View className="font-semibold flex-grow text-center text-sm bg-gray-50 uppercase justify-end px-2 rounded-lg">
                  <RNPickerSelect
                    value={dinnerTime}
                    onValueChange={(value) => setDinnerTime(value)}
                    items={DINNER}
                  />
                </View>
              </View>
            </View>
            <Text className="pt-8 pb-5 font-semibold text-center text-xs text-gray-400 uppercase">
              Meal suggestion type
            </Text>
            <View className="font-semibold flex-grow text-center text-sm bg-gray-50 uppercase justify-end px-2 rounded-lg">
              <RNPickerSelect
                value={suggestionType}
                onValueChange={(value) => setSuggestionType(value)}
                items={mealTypes}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute flex-1 h-screen w-full left-0 top-0 right-0 bottom-0 z-[-1]">
        <View className="h-[55vh] bg-gray-200"></View>
        <View className="h-full"></View>
      </View>
    </View>
  );
};

export default Preference;
