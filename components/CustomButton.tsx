import { Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-[#fff] rounded-xl min-h-[60px] justify-center items-center mx-4`}
    >
      <View>
        <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
