import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";


type Props = {
  imgSource: ImageSource;
  theme?: string;
};


export default function ImageViewer({ imgSource, theme }: Props) {
  if (theme === "logo") {
    return <Image source={imgSource} style={styles.logo} />;
  }

  if (theme === "chats") {
    return <Image source={imgSource} style={styles.chatPicture} />;
  }

  return <Image source={imgSource} style={styles.profilPicture} />;
}


const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
    alignSelf: "center"
  },
  chatPicture: {
    width: 60,
    height: 60,
    borderRadius: 50,
    bottom: 45,
    left: 7.5,
  },
  profilPicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});