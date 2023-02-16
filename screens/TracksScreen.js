import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SongList from "../comps/SongList";

const TracksScreen = ({ tracks }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <SongList tracks={tracks} />
    </SafeAreaView>
  );
};

export default TracksScreen;

const styles = StyleSheet.create({
  headerContainer: {
    width: 100,
    height: 64,
    backgroundColor: "#1DB954",
  },
  headerText: {
    color: "white",
  },
});
