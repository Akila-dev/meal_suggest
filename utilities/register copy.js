import {
  getExpoPushTokenAsync,
  scheduleNotificationAsync,
} from "expo-notifications";
import * as Permissions from "expo-permissions";

const registerForPushNotifications = async () => {
  try {
    // ASK USER FOR PERMISSION
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // IF PERMISSION IS NOT GRANTED, EXIT THE FUNCTION
    if (!permission.granted) return;
    // if permission is granted, get token
    const token = await getExpoPushTokenAsync();
    return token;
  } catch (error) {
    console.log("Error getting a token", error);
  }
};

const createSender = async () => {
  // Get Token
  const token = await registerForPushNotifications();

  // function for sending push notifications
  const sendPushNotification = async (message) => {
    scheduleNotificationAsync({
      content: {
        title: "Meal Suggest",
        body: message,
        sticky: true,
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return sendPushNotification;
};

export default createSender;
