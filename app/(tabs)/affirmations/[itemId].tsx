import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;
      const affirmationStart = affirmationData.find(
        (ele) => ele.id === Number(itemId)
      );
      if (affirmationStart) {
        setAffirmation(affirmationStart);

        const affirmationArr = affirmationStart.text.split(".");
        if (affirmationArr[affirmationArr.length - 1] === "") {
          affirmationArr.pop();
        }
        setSentences(affirmationArr);
        return;
      }
    }
  }, [itemId]);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.2)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 mt-4"
          >
            <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center p-4">
                {sentences.map((item, idx) => (
                  <Text
                    key={idx}
                    className="text-[#fff] text-center mb-10 text-3xl font-bold"
                  >
                    {item}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
