import AppGradient from "@/components/AppGradient";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";

const NatureMediation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="m-4">
          <Text className="text-4xl text-gray-200 font-bold mb-3 text-left">
            Welcome K
          </Text>
          <Text className="font-medium text-xl text-indigo-100">
            Start your mediatation today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20 mx-4"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/meditation/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="justify-center rounded-lg flex-1"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0 ,0 ,0.8)"]}
                  >
                    <Text className="text-gray-100 text-3xl text-center font-bold">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          ></FlatList>
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
};

export default NatureMediation;
