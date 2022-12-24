import { View, Text } from "react-native";
import React from "react";

const MealTimeCard = ({ type, time }) => {
  return (
    <View className="items-center flex-1 mx-1">
      <View className="items-center rounded justify-center h-[75px] w-full border border-gray-200 p-1 bg-gray-50">
        <Text className="text-center font-semibold">{type}</Text>
      </View>
      <Text className="font-semibold pt-1 uppercase  text-gray-400 text-xs">
        {time}
      </Text>
    </View>
  );
};

export default MealTimeCard;
