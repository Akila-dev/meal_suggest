import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import logo from "../assets/images/logo.jpeg";

const EditUsername = ({ close, username }) => {
  const [text, onChangeText] = useState("");

  const saveData = async (name, value) => {
    let data = value;
    try {
      await AsyncStorage.setItem(name, data);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  const changeUsername = () => {
    saveData("username", text);
    username();

    close();
  };
  return (
    <View className="absolute w-full h-full top-0 left-0 z-40 bg-white justify-center items-center px-7">
      <TouchableOpacity onPress={close} className="p-1 absolute right-5 top-7">
        <Text className="text-center font-bold text-xl">&#x2715;</Text>
      </TouchableOpacity>
      <View className="w-full p-5 border border-gray-200">
        <Image
          source={logo}
          className="w-[170px] h-[100px] object-cover mb-5 mx-auto"
        />
        <Text className="text-center font-bold uppercase mb-10">
          Edit User Details
        </Text>
        <SafeAreaView>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder="Username"
            className="border border-gray-100 py-2 px-4 rounded-md"
          />
        </SafeAreaView>
        <TouchableOpacity
          onPress={changeUsername}
          className="mt-5 w-full p-3 bg-red-600 border border-black rounded"
        >
          <Text className="text-center text-white font-semibold">
            Change Username
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditUsername;
