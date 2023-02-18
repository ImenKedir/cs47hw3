import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import SongList from "../comps/SongList";
import { Images } from "../assets/Themes";

const { width: windowWidth } = Dimensions.get("window");

const TracksScreen = ({ tracks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Images.spotify} style={styles.headerLogo} />
        <View style={{ width: 6 }} />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <SongList tracks={tracks} />
    </SafeAreaView>
  );
};

export default TracksScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontStyle: "bold",
  },
  headerLogo: {
    width: 20,
    height: 20,
  },
});
