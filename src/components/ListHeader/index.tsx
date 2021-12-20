import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
