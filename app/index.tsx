import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import beachImg from "../assets/images/beach.webp";

const Index = () => {
  const router = useRouter();
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
                Lorem Epsum yehjrkehjkdhfhf fhrhgjddjhf jhfedfheuif
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditation")}
                title="Get Started"
              ></CustomButton>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Index;
