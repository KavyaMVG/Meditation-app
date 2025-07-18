import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={40} color="white" />
        </Pressable>

        <View className="justify-center h-4/5">
          <Text className="text-3xl text-[#fff] font-bold text-center mb-8 px-6">
            Adjust your meditation duration
          </Text>

          <View>
            <CustomButton
              title="5 Minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mt-4"
            />

            <CustomButton
              title="11 Minutes"
              onPress={() => handlePress(11 * 60)}
              containerStyles="mt-4"
            />

            <CustomButton
              title="15 Minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mt-4"
            />

            <CustomButton
              title="20 Minutes"
              onPress={() => handlePress(20 * 60)}
              containerStyles="mt-4"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
