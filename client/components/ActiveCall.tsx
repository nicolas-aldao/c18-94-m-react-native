import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RtcSurfaceView } from "react-native-agora";
import { useSafeAreaInsets } from "react-native-safe-area-context";

{
  /* TODO: NEEDS REFACTOR!! */
}
export default function ActiveCall({
  localUid,
  remoteUid,
  isMute,
  onSwitchCameraPress,
  onMuteMicPress,
  onLeavePress,
}: {
  localUid: number;
  remoteUid: number;
  isMute: boolean;
  onMuteMicPress: () => void;
  onSwitchCameraPress: () => void;
  onLeavePress: () => void;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* Remote user preview */}
      {remoteUid !== 0 ? (
        <RtcSurfaceView
          canvas={{ uid: remoteUid }}
          style={styles.remoteVideoView}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text>Esperando a que alguien se una….</Text>
        </View>
      )}
      {/* Local user preview */}
      <RtcSurfaceView
        canvas={{ uid: localUid }}
        style={remoteUid === 0 ? styles.localVideoView : styles.remoteVideoView}
      />
      <View style={[styles.actionsContainer, { bottom: insets.bottom }]}>
        <Pressable
          style={styles.actionButtonContainer}
          onPress={onMuteMicPress}
        >
          <Image
            style={styles.buttonImage}
            source={
              isMute
                ? require("./../assets/images/videocall/ic_mute.png")
                : require("./../assets/images/videocall/ic_unmute.png")
            }
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={styles.leaveButtonContainer} onPress={onLeavePress}>
          <Image
            style={styles.buttonImage}
            source={require("./../assets/images/videocall/ic_phone.png")}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable
          style={styles.actionButtonContainer}
          onPress={onSwitchCameraPress}
        >
          <Image
            style={styles.buttonImage}
            source={require("./../assets/images/videocall/ic_camera.png")}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
  },
  localVideoView: {
    height: "100%",
    width: "100%",
  },
  remoteVideoView: {
    height: "50%",
    width: "100%",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    marginTop: 20,
    height: 80,
    width: 320,
    backgroundColor: "#54D19E",
    borderRadius: 40,
    position: "absolute",
    bottom: 35,
  },
  leaveButtonContainer: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#B03939",
  },
  actionButtonContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#000000CC",
  },
  buttonImage: {
    width: 22,
    height: 22,
    tintColor: "white",
  },
  emptyState: {
    position: "absolute",
    zIndex: 9,
    backgroundColor: "white",
    margin: 18,
    padding: 12,
    borderRadius: 16,
  },
});
