import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const AppGradient = ({ colors, children }: { colors: any; children: any }) => {
  return (
    <LinearGradient style={styles.gradient} colors={colors}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default AppGradient;
