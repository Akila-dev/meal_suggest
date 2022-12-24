import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const EditUsername = ({ close }) => {
  const [text, onChangeText] = useState("");
  const changeUsername = () => {
    const username = text;
    alert(`username changed to ${username}`);
  };
  return (
    <View className="absolute w-full h-full top-0 left-0 z-40 bg-white justify-center items-center px-5">
      <TouchableOpacity onPress={close} className="p-1 absolute right-5 top-7">
        <Text className="text-center font-bold text-xl">&#x2715;</Text>
      </TouchableOpacity>
      <View className="w-full p-5 border border-gray-200">
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
          className="mt-5 w-full p-3 bg-yellow-400 border border-black rounded"
        >
          <Text className="text-center font-semibold">Change Username</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditUsername;
