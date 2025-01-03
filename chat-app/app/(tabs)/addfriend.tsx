import Button from '@/components/Buttons';
import DescriptionText from '@/components/DescriptionText';
import ImageViewer from '@/components/ImageViewer';
import TextField from '@/components/TextField';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const logo = require('@/assets/images/logo_4.png');


const AddFriend = () => {
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
        <Button label="Freund hinzufügen"/>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D34",
    padding: 20,
  },
  descriptionArea: {
    flex: 1/3,
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
  },
  addfriendArea: {
    flex: 1/2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default AddFriend