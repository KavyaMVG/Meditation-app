import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

interface GuidedAffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-xl font-bold text-white">{title}</Text>
      </View>

      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                  <Text>Product Gallery </Text>
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
};

export default GuidedAffirmationGallery;
