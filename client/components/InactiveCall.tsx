import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InactiveoCall({
  onJoinChannelPress,
}: {
  onJoinChannelPress: () => void;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={onJoinChannelPress}>
        <Text style={styles.buttonText}>Unirme a la llamada</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#491a85",
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 10,
    backgroundColor: "#3BE261",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "800",
    color: "#DDFDE5",
  },
});
