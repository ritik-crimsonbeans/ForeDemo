import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.center}>
      <Text>This is the about Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Profile;