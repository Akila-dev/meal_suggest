import {
  getExpoPushTokenAsync,
  scheduleNotificationAsync,
} from "expo-notifications";

const createSender = async () => {
  // function for sending push notifications
  const sendPushNotification = async (message) => {
    scheduleNotificationAsync({
      content: {
        title: "Meal Suggest",
        body: message,
        sticky: true,
      },
      trigger: {
        seconds: 0,
      },
    });
  };

  return sendPushNotification;
};

export default createSender;
