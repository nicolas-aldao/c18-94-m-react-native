import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RtcSurfaceView } from "react-native-agora";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
        <View>
          <Text>Esperando a que alguien se una….</Text>
        </View>
      )}
      {/* Local user preview */}
      <RtcSurfaceView
        canvas={{ uid: localUid }}
        style={
          remoteUid === 0
            ? styles.remoteVideoView
            : // : [styles.localVideoView, { bottom: insets.bottom + 100 }]
              styles.localVideoView
        }
      />
      <View style={[styles.actionsContainer, { bottom: insets.bottom }]}>
        {/* Boton para silenciar */}
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

        {/* Boton para cerrar la llamada */}
        <Pressable style={styles.leaveButtonContainer} onPress={onLeavePress}>
          <Image
            style={styles.buttonImage}
            source={require("./../assets/images/videocall/ic_phone.png")}
            resizeMode="contain"
          />
        </Pressable>

        {/* Boton para cambiar la camara */}
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
    borderWidth: 3,
  },
  localVideoView: {
    margin: 2,
    height: 300,
    width: 370,
  },
  remoteVideoView: {
    margin: 2,
    height: 300,
    width: 370,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    marginTop: 20,
    bottom: 10,
    width: 370,
    backgroundColor: "#58C799",
    borderRadius: 30,
  },
  leaveButtonContainer: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#B03939",
  },
  actionButtonContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#000000",
  },
  buttonImage: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});
