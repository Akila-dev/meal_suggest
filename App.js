// import * as React from "react";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Profile, Foodstuffs, FoodList, Preference } from "./screens";
import { Header, Footer } from "./components";

// import notifee from "@notifee/react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [breakfastTime, setBreakfastTime] = useState("");
  const [lunchTime, setLunchTime] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");
  const [username, setUsername] = useState("New User");

  const getBreakfastTime = async () => {
    try {
      AsyncStorage.getItem("breakfastTime")
        .then((value) => {
          if (value !== null) {
            const time = parseInt(value);
            setBreakfastTime(time);
          } else {
            setBreakfastTime(7);
          }
        })
        .then(() => {
          if (time === breakfastTime) {
            onDisplayNotification("breakfast");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getLunchTime = async () => {
    try {
      AsyncStorage.getItem("lunchTime")
        .then((value) => {
          if (value !== null) {
            const time = parseInt(value);
            setLunchTime(time);
          } else {
            setLunchTime(14);
          }
        })
        .then(() => {
          if (time === lunchTime) {
            onDisplayNotification("lunch");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getDinnerTime = async () => {
    try {
      AsyncStorage.getItem("dinnerTime")
        .then((value) => {
          if (value !== null) {
            const time = parseInt(value);
            setDinnerTime(time);
          } else {
            setDinnerTime(20);
          }
        })
        .then(() => {
          if (time === dinnerTime) {
            onDisplayNotification("dinner");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUsername = async () => {
    try {
      AsyncStorage.getItem("username").then((value) => {
        if (value !== null) {
          setUsername(value);
          console.log(username);
        } else {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  var date = new Date();
  let day = date.getDay();
  let time = date.getHours();

  useEffect(() => {
    getBreakfastTime();
    getLunchTime();
    getDinnerTime();
    getUsername();
  }, [time]);

  // async function onDisplayNotification(mealType) {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: "default",
  //     name: "Default Channel",
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: `Hi, ${username}`,
  //     body: `It's time for ${mealType}`,
  //     android: {
  //       channelId,
  //       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //       pressAction: {
  //         id: "default",
  //       },
  //     },
  //   });
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Suggested Meals" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Foodstuffs" component={Foodstuffs} />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="FoodList" component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
