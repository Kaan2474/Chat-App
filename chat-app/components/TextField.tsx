import { StyleSheet, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Button from '@/components/Buttons';

type Props = {
  inputLabel: string;
};

export default function TextField({ inputLabel }: Props) {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <SafeAreaView>
          <Text style={styles.labelText}>{inputLabel}</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  labelText: {
    marginBottom: 1,
    color: "#FFFFFF",
  },
  input: {
    height: 40,
    width: 335,
    backgroundColor: "#D9D9D9",
    color: "#000000",
    borderWidth: 1,
    padding: 10,
    marginBottom: -15
  },
});
