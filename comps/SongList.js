import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Themes } from "../assets/Themes";

const { width: windowWidth } = Dimensions.get("window");

const SongList = ({ tracks }) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item, index }) => {
        return (
          <SongItem
            index={index}
            imageUrl={item.imageUrl}
            songTitle={item.songTitle}
            albumName={item.albumName}
            duration={item.duration}
            songArtists={item.songArtists}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SongList;

const SongItem = ({
  imageUrl,
  songTitle,
  albumName,
  duration,
  index,
  songArtists,
}) => {
  const min = Math.floor((duration/1000/60) << 0)
  const sec = Math.floor((duration/1000) % 60);
  return (
    <View style={styles.songItemContainer}>
      <Text style={styles.songIndex}>{index}</Text>
      <Image style={styles.albumImage} source={{ uri: imageUrl }} />
      <View style={styles.songNameContainer}>
        <Text numberOfLines={1} style={styles.songTitle}>{songTitle}</Text>
        <Text numberOfLines={1} style={styles.songArtist}>{songArtists[0].name}</Text>
      </View>
      <Text numberOfLines={1} style={styles.albumName}>{albumName}</Text>
      <Text style={styles.duration}>{min + ':' + sec}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  songItemContainer: {
    flexDirection: "row",
    width: windowWidth,
    marginBottom: 6,
    justifyContent: "space-between",
    maxWidth: windowWidth * 0.92,
  },
  songNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: windowWidth * 0.25,
    overflow: "hidden",
  },
  songIndex: {
    alignSelf: "center",
    color: Themes.colors.gray,
  },
  songTitle: {
    numberOfLines: 1,
    color: Themes.colors.white,
  },
  songArtist: {
    color: Themes.colors.gray,
  },
  albumImage: {
    width: 50,
    height: 50,
  },
  albumName: {
    width: windowWidth * 0.25,
    alignSelf: "center",
    color: Themes.colors.white,
  },
  duration: {
    alignSelf: "center",
    color: Themes.colors.white,
  }
});
