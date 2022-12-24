import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FoodListCard = ({ name, onCancel }) => {
  return (
    <View className="mb-3 items-center pl-4 pr-1 rounded bg-gray-50 border border-gray-200 flex-row justify-between">
      <Text className="font-semibold capitalize flex-shrink">{name}</Text>
      <TouchableOpacity className="flex-grow items-end" onPress={onCancel}>
        <Text className="font-bold text-red-700 p-3">&#x2715;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodListCard;
