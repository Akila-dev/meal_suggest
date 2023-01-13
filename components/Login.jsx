import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

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
    <View className="absolute w-full h-full top-0 left-0 z-40 bg-white justify-center items-center px-5">
      <View className="w-full p-5 border border-gray-200">
        <Text className="text-center font-bold uppercase mb-10">
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
          className="mt-5 w-full p-3 bg-yellow-400 border border-black rounded"
        >
          <Text className="text-center font-semibold">Set Username</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
