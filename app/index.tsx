import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import ScheduleDailyRemainder from "@/components/ScheduleDailyRemainder";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import beachImg from "../assets/images/beach.webp";

const Index = () => {
  const router = useRouter();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });

  useEffect(() => {
    const setupNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Please enable notifications to get meditation reminders.");
      }
    };
    setupNotifications();
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground source={beachImg} className="flex-1" resizeMode="cover">
        <AppGradient colors={["rgba(0,0,0, 0.2)", "rgba(0,0,0, 0.4)"]}>
          <SafeAreaView className="px-1 flex-1 justify-between">
            <View>
              <Text className="text-3xl font-semibold text-center color-[#fff] mt-4">
                Meditation
              </Text>
              <Text className="text-3xl font-semibold text-center color-[#fff] mt-3">
                Moment of calm
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditation")}
                title="Get Started"
              ></CustomButton>
              <ScheduleDailyRemainder />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Index;
