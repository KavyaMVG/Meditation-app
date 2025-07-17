import AppGradient from "@/components/AppGradient";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false} className="m-4">
          <Text className="text-zinc-100 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((gallery) => (
              <GuidedAffirmationGallery
                title={gallery.title}
                previews={gallery.data}
                key={gallery.title}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
