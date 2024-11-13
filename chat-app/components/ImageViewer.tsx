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
  return <Image source={imgSource} style={styles.profilPicture} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 80,
    alignSelf: "center"
  },
  profilPicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
