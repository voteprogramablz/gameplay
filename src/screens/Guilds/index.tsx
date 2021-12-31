import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Guild, { GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Pain",
      icon: "image.png",
      owner: true,
    },
    {
      id: "3",
      name: "Kabum",
      icon: "image.png",
      owner: true,
    },
    {
      id: "4",
      name: "Ninjas",
      icon: "image.png",
      owner: true,
    },
    {
      id: "5",
      name: "HyperX",
      icon: "image.png",
      owner: true,
    },
    {
      id: "6",
      name: "Poneis de Pijama",
      icon: "image.png",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  );
}
