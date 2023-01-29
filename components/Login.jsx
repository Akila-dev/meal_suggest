import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.jpeg";

const Login = ({ close }) => {
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

    close();
  };
  return (
    <View className="absolute w-full h-full top-0 left-0 z-40 bg-white justify-center items-center px-7">
      <View className="w-full pt-5 pb-10 px-5 border border-gray-200 bg-white ">
        <Image
          source={logo}
          className="w-[170px] h-[100px] object-cover mb-5 mx-auto"
        />
        <Text className="text-center text-lg font-bold uppercase mb-10">
          Enter Username
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
          onPress={() => changeUsername()}
          className="mt-5 w-full p-3 bg-red-600 border border-black rounded"
        >
          <Text className="text-center text-white font-semibold">
            Set Username
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View className="absolute flex-1 h-screen w-full left-0 top-0 right-0 bottom-0 z-[-1]">
        <Image source={bg} className="w-[100vw] h-[150vh] object-cover" />
      </View> */}
    </View>
  );
};

export default Login;
