import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import SongItem from "./SongItem";

const SongList = ({ tracks }) => {
  console.log(tracks);
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => {
        console.log("item", item);
        return (
          <SongItem
            imageUrl={item.imageUrl}
            songTitle={item.songTitle}
            albumName={item.albumName}
            duration={item.duration}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

// const item = {
//   albumName: "It's Only Me",
//   duration: 121479,
//   externalUrl: "https://open.spotify.com/track/2zeP2m00YmZFr36mOQCBuK",
//   imageUrl: "https://i.scdn.co/image/ab67616d0000b27366b04b41fa6f8908dce86695",
//   previewUrl:
//     "https://p.scdn.co/mp3-preview/1b63c2ee22cbb9de4db9042670315c0fb0cb673e?cid=4c3ea87712ff47e98814c9e682eb112e",
//   songArtists: [{ name: "Lil Baby" }, { name: "EST Gee" }],
//   songTitle: "Back and Forth (feat. EST Gee)",
// };
export default SongList;

const styles = StyleSheet.create({});
