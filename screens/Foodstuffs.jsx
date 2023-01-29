import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header, Footer, FoodListCard } from "../components";

const Foodstuffs = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [foodStuffs, setFoodStuffs] = useState([]);

  const renderFoodStuffs = ({ item }) => (
    <FoodListCard name={item.name} onCancel={() => alert("canceled")} />
  );

  // !SAVE FOODSTUFF LIST TO DATABASE
  const saveFoodStuffs = async () => {
    let data = foodStuffs.toString();
    try {
      await AsyncStorage.setItem("foodStuffs", data);
    } catch (error) {
      console.log(error);
    }
    console.log(data.split(","));
  };

  // !GET FOODSTUFF LIST FROM DATABASE FUNCTION
  const getFoodstuffs = async () => {
    try {
      AsyncStorage.getItem("foodStuffs").then((value) => {
        if (value !== null) {
          setFoodStuffs(value.split(","));
        } else {
          setFoodStuffs([]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // !WHENEVER THE GOODSTUFFS PAGE IS OPENED, GET FOODSTUFF LIST FROM DATABASE
  useEffect(() => {
    getFoodstuffs();
  }, []);

  // !ANYTIME FOODSTUFFLIST IS CHANGED, CHANGE DATABASE ACCORDINGLY
  useEffect(() => {
    saveFoodStuffs();
  }, [foodStuffs]);

  // ADD FOODSTUFF WHEN THE ADD FOODSTUFF BUTTON IS CLICKED
  const addFoodStuff = () => {
    const newFoodstuff = text.toLowerCase();
    const item = newFoodstuff;
    if (newFoodstuff != "") {
      if (!foodStuffs.includes(item)) {
        setFoodStuffs((prev) => [...prev, item]);
        onChangeText("");
      } else {
        alert(`${text} is already added to the foodstuff list`);
        onChangeText("");
      }
    }
  };

  // REMOVE FOODSTUFF FUNCTION
  const removeFoodStuff = (foodstuff) => {
    const index = foodStuffs.indexOf(foodstuff);

    setFoodStuffs((prev) => prev.filter((item) => item != foodstuff));
  };
  return (
    <View className="flex-1 bg-white">
      <Header />
      <Footer navigation={navigation} />
      <ScrollView className="px-5 mb-[90px]">
        <SafeAreaView className="">
          <View className="my-10 px-5 py-8 border rounded border-gray-200 bg-white">
            <Text className="font-semibold text-sm text-gray-400 uppercase text-center mb-4">
              Add New Food Stuffs
            </Text>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder="E.g: Rice"
              className="py-2 px-4 border border-gray-100 rounded"
            />
            <TouchableOpacity
              className="mt-5 w-full p-3 bg-red-600 border border-black rounded"
              onPress={addFoodStuff}
            >
              <Text className="text-center font-semibold text-white">
                Add Foodstuff
              </Text>
            </TouchableOpacity>
          </View>
          <View className="pb-4">
            <Text className="mb-5 font-bold uppercase text-center">
              List of Foodstuffs
            </Text>
            {foodStuffs?.map((item) => (
              <FoodListCard
                name={item}
                key={item}
                onCancel={() => removeFoodStuff(item)}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
      <View className="absolute flex-1 h-screen w-full left-0 top-0 right-0 bottom-0 z-[-1]">
        <View className="h-[50vh] bg-gray-200"></View>
        <View className="h-full"></View>
      </View>
    </View>
  );
};

export default Foodstuffs;
