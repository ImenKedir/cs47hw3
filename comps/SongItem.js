import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SongItem = ({ imageUrl, songTitle, albumName, duration }) => {
  return (
    <View>
      <Text style={styles.text}>{songTitle}</Text>
    </View>
  );
};

export default SongItem;

const styles = StyleSheet.create({
    text: {
        color: "white",
    }
});
