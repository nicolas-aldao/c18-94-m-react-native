import { FC } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

type VideocallButtonProps = {
  onJoinChannelPress: () => void;
};

export const VideocallButton: FC<VideocallButtonProps> = ({
  onJoinChannelPress,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onJoinChannelPress}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("./../../../assets/images/videocall.png")}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#54D19E",
    paddingTop: 6,
    paddingRight: 10,
    paddingLeft: 15,
    paddingBottom: 5,
    borderRadius: 100,
  },
});
