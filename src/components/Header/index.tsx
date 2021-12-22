import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  title: string;
  action?: ReactNode;
};

export default function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton>
        <Feather name="arrow-left" size={24} colors={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
