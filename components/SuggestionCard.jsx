import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";

const SuggestionCard = ({ img, name, type }) => {
  return (
    <TouchableHighlight className="bg-white w-full shadow-2xl rounded-lg overflow-hidden mb-4">
      <View>
        <Image source={img} className="w-full h-[180px] object-cover" />
        <View className="py-5 px-4 flex-row justify-between items-center border-b border-x border-gray-100">
          <View>
            <Text className="text-sm font-bold uppercase text-gray-300">
              Name:
            </Text>
            <Text className="text-md font-semibold capitalize">{name}</Text>
          </View>
          <View>
            <Text className="text-sm font-bold uppercase text-gray-300">
              Type:
            </Text>
            <Text className="text-md font-semibold capitalize">{type}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SuggestionCard;
