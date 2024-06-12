import ActiveCall from "@/components/ActiveCall";
import { AppointmentDetail } from "@/components/organisms/AppointmentDetail";
import { useKeepAwake } from "@sayem314/react-native-keep-awake";
import { useEffect, useRef, useState } from "react";
import { PermissionsAndroid, Platform, View, StyleSheet } from "react-native";
import createAgoraRtcEngine, {
  ChannelProfileType,
  ClientRoleType,
  IRtcEngine,
} from "react-native-agora";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function OtherScreen() {
  console.log("hola!");
  useKeepAwake();

  const appId = "9e59ec728ba649dcb247e112747bccea";
  const channel = "call";
  const token =
    "007eJxTYMiKb737abVJVdTWyA/3A3/7To3s++dz7fTCW8zbtjmtSlyowGCZamqZmmxuZJGUaGZimZKcZGRinmpoaGRuYp6UnJyaOPN6RlpDICPDf1NZVkYGCATxWRiSE3NyGBgAU28izA==";
  const localUid = 0;

  const agoraEngineRef = useRef<IRtcEngine>(); // Referencia a la instancia de Agora
  const [isJoined, setIsJoined] = useState(false);
  const [remoteUid, setRemoteUid] = useState(456); // Uid del usuario remoto
  const [isMute, setIsMute] = useState(false);
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    console.log("🚀 ~ OtherScreen ~ isJoined:", isJoined);
  }, [isJoined]);

  const getPermission = async () => {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };

  const setupVideoSDKEngine = async () => {
    try {
      // Llamamos a los permisos
      await getPermission();

      // Le damos el valor a nuestra instancia de Agora
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;

      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          // Este es un listener que se ejecutara cada vez que nos conectemos a un canal correctamente.
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          // Este es un listener que nos dira cuando un usuario se conecta
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, _Uid) => {
          // Este es un listener que nos dira cuando un usuario se desconecta
          setRemoteUid(0);
        },
        onError: (errorCode, msg) => {
          console.log("Error Code", errorCode);
          console.log("Error Code", errorCode);
          console.log("Mesasge:", msg);
        },
      });
      agoraEngine.initialize({
        appId,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };

  const join = async () => {
    // console.log("🚀 ~ join ~ ")
    if (isJoined) {
      // Si ya nos encontramos en la llamada, no hacemos nada.
      return;
    }

    // Dejamos que la instancia de AGORA nos asigne el canal y nos una.
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication
      );
      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channel, localUid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
      // setIsJoined(true);
    } catch (e) {
      console.log(e);
    }
  };

  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();

      // setRemoteUids([]);
      setIsJoined(false);
      setIsMute(false);

      // setRemoteUid(0);
    } catch (e) {
      console.log(e);
    }
  };

  const muteMic = () => {
    try {
      agoraEngineRef.current?.muteLocalAudioStream(!isMute);

      setIsMute(!isMute);
    } catch (e) {
      console.log(e);
    }
  };

  const switchCamera = () => {
    try {
      agoraEngineRef.current?.switchCamera();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Inicializamos el motor de Agora cuando inicia la app
    setupVideoSDKEngine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <View style={styles.container}>
          {isJoined ? (
            <ActiveCall
              localUid={localUid}
              remoteUid={remoteUid}
              isMute={isMute}
              onMuteMicPress={muteMic}
              onSwitchCameraPress={switchCamera}
              onLeavePress={leave}
            />
          ) : (
            <AppointmentDetail onJoinChannelPress={join} />
          )}
        </View>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});