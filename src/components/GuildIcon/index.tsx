import React from "react";
import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

export type GuildProps = {};

export function GuildIcon() {
  const uri =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9wXlbrpxam9zvjhF_x1CinF1I16xaaKKK8f-T38DkDNOKoTU7K2tVxdUDNjyuH6j4qc&usqp=CAU";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
