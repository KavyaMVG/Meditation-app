import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/MeditationData";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

const Meditation = () => {
  const { id } = useLocalSearchParams();
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const { duration, setDuration } = useContext(TimerContext);

  useEffect(() => {
    const setupAudioMode = async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        interruptionModeIOS: InterruptionModeIOS.DoNotMix,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        playThroughEarpieceAndroid: false,
      });
    };

    setupAudioMode();

    return () => {
      if (audioSound) {
        audioSound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (duration === 0) {
      setIsMeditating(false);
      return;
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(duration - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [setDuration, isMeditating]);

  const formattedTimeMinutes = String(Math.floor(duration / 60)).padStart(
    2,
    "0"
  );
  const formattedTimeSeconds = String(Math.floor(duration % 60)).padStart(
    2,
    "0"
  );

  const toggleMeditationStatus = async () => {
    if (duration === 0) setDuration(10);

    setIsMeditating(!isMeditating);
    await toggleMusic();
  };

  const toggleMusic = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();
    if (status?.isLoaded && !isAudioPlaying) {
      await sound.playAsync();
      setIsAudioPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsAudioPlaying(false);
    }
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setAudioSound(sound);
    return sound;
  };

  const handleMeditationDuration = () => {
    if (isMeditating) toggleMeditationStatus();

    router.push("/(modal)/adjust-meditation-duration");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
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

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full h-44 w-44 justify-center items-center">
              <Text className="text-4xl text-blue-800">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <CustomButton
              title="Adjust duration"
              onPress={handleMeditationDuration}
            />
            <CustomButton
              title="Start Meditation"
              onPress={toggleMeditationStatus}
              containerStyles="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditation;
