import * as Notifications from "expo-notifications";
import React, { useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from "./CustomButton";

const ScheduleDailyRemainder = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const scheduleReminder = async (hour: number, minute: number) => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "🧘 Time to Meditate",
        body: "Take a few minutes for yourself.",
      },
      trigger: {
        hour,
        minute,
        repeats: true,
        type: "calendar",
      },
    });
  };
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    scheduleReminder(hour, minute);
    hideDatePicker();
  };

  return (
    <View>
      <CustomButton
        title="Set Daily Reminder"
        containerStyles="mt-4"
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default ScheduleDailyRemainder;
