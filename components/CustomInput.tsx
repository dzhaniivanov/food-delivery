import { CustomInputProps } from "@/type";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import cn from "clsx";

const CustomInput = ({
  placeholder = "Enter Text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={placeholder}
        placeholderTextColor="#888"
        className={cn(
          `input ${isFocus ? "border-primary" : "border-gray-300"}`
        )}
      />
    </View>
  );
};
export default CustomInput;
