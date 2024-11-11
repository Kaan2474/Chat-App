import Button from '@/components/Buttons';
import TextField from '@/components/TextField';
import React from 'react';
import {StyleSheet, TextInput, Text } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const AddFriends = () => {
  const [text, onChangeText] = React.useState('Useless Text');
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
        <Button label='Freund hinzufügen' />
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
  },
  descriptionText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16
  },
  addfriendArea: {
    flex: 2,
  },
});

export default AddFriends