import { StyleSheet, TextInput, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';


type Props = {
  inputLabel: string;
};


export default function TextField({ inputLabel }: Props) {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{inputLabel}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10
  },
  labelText: {
    marginBottom: 1.5,
    color: "#FFFFFF",
  },
  input: {
    height: 40,
    width: 335,
    backgroundColor: "#D9D9D9",
    color: "#000000",
    padding: 10,
  },
});
