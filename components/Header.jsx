import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const userImg = require("../assets/user.jpg");

const Header = ({ navigation }) => {
  return (
    <View className="flex-row justify-between px-5 pt-12 pb-5 items-center bg-white shadow-black shadow-2xl rounded-b-2xl">
      <TouchableOpacity>
        <Text className="text-lg font-bold text-black">Meal Suggest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={userImg}
          className="h-[45px] w-[45px] object-cover rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
