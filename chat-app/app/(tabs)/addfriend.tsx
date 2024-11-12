import Button from '@/components/Buttons';
import TextField from '@/components/TextField';
import React from 'react';
import {StyleSheet, Text } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const AddFriends = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.descriptionArea}>
        <Text style={styles.descriptionText}>Finden Sie Ihre Freunde und fügen Sie sie zu Ihrer Chatliste hinzu! 
          Geben Sie den Benutzernamen ein, um noch einfacher in Verbindung zu 
          bleiben.
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.addfriendArea}>
        <TextField inputLabel="Nutzername"/>
      </SafeAreaView>
      <SafeAreaView style={{alignItems: "center", bottom: 300}}>
        <Button label='Freund hinzufügen'/>
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
    flex: 1,
    justifyContent: "center",
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
  addfriendArea: {
    flex: 2,
    alignItems: "center",
    top: 75,
  },
});

export default AddFriends