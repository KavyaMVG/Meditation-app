import AppGradient from "@/components/AppGradient";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, View } from "react-native";

const Meditation = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 mt-4"
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditation;
