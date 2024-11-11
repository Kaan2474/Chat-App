import { Text, TextInput, StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/DSC_7208.jpg');

export default function Index() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Button label="Foto hinzufügen" theme='image'/>
      </SafeAreaView>
      <SafeAreaView style={styles.textfieldContainer}>
          <Text style={styles.usernameText}>Vorname</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
          <Text style={styles.usernameText}>Nachname</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    flexDirection: "column",
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red"
  },
  textfieldContainer: {
    flex: 2,
    backgroundColor: "green"
  },
  input: {
    height: 35,
    width: 335,
    backgroundColor: "#D9D9D9",
    color: "#000000",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row", 
    backgroundColor: "green",
  },
  
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
  usernameText: {
    color: "#FFFFFF",
  }
});
