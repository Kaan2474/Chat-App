import Button from '@/components/Buttons';
import DescriptionText from '@/components/DescriptionText';
import ImageViewer from '@/components/ImageViewer';
import TextField from '@/components/TextField';
import React from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const logo = require('@/assets/images/logo_4.png');


const AddFriends = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.descriptionArea}>
        <DescriptionText text='Finden Sie Ihre Freunde und fügen Sie sie zu
        Ihrer Chatliste hinzu! Geben Sie den Benutzernamen ein, um noch
        einfacher in Verbindung zu bleiben.' headingNecessary={false}/>
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