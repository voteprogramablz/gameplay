import React from "react";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

export type GuildProps = {};

export function GuildIcon() {
  const uri =
    "https://i.pinimg.com/564x/13/af/38/13af386d6c652038bdcd0aa2613e72a5.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
