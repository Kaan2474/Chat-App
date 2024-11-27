import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


type Props = {
  label: string;
  theme?: string;
  onPress?: () => void;
};


export default function Button({ label, theme, onPress }: Props) {
  if (theme === "image") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#000000" style={styles.buttonIcon} />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    )
  }
  
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
    height: 35,
  },
  button: {
    borderRadius: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#30C5FF"
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000000',
    fontSize: 16,
  },
});