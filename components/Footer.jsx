import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const profileImg = require("../assets/images/profile.jpg");
const logo = require("../assets/images/logo.jpeg");

const Footer = ({ navigation }) => {
  return (
    <View className="w-full h-[85px] absolute bottom-0 left-0 right-0 bg-white py-3 z-50 border-t border-gray-200 flex-row justify-between items-center px-5">
      <TouchableOpacity onPress={() => navigation.navigate("Foodstuffs")}>
        <View className="items-center">
          <Text className="text-2xl text-gray-800 font-bold">&#x2630;</Text>
          <Text className="text-xs text-gray-800">Inventory</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View className="items-center">
          <Image
            source={logo}
            className="w-[150px] h-[65px] object-cover mb-4"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View className="items-center">
          <Image
            source={profileImg}
            style={{ height: 40, width: 40, opacity: 0.5 }}
          />
          <Text className="text-xs text-gray-800">Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
