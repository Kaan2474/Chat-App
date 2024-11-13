import Button from '@/components/Buttons';
import ImageViewer from '@/components/ImageViewer';
import TextField from '@/components/TextField';
import React from 'react';
import {StyleSheet, Text } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const AddFriends = () => {
  const logo = require('@/assets/images/logo_4.png');
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.descriptionArea}>
        <Text style={styles.descriptionText}>Finden Sie Ihre Freunde und fügen Sie sie zu Ihrer Chatliste hinzu! 
          Geben Sie den Benutzernamen ein, um noch einfacher in Verbindung zu 
          bleiben.
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.addfriendArea}>
        <TextField inputLabel="Nutzername"/>
        <SafeAreaView style={styles.buttonArea}>
          <Button label='Freund hinzufügen'/>
      </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#2A2D34",
    padding: 20,
  },
  descriptionArea: {
    flex: 1/4,
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF"
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
  addfriendArea: {
    flex: 1/3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonArea: {
    flex: 1/4,
    top: 75
  }
});

export default AddFriends