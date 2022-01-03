import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string | ReactNode;
};

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
