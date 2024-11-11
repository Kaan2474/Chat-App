import Button from '@/components/Buttons';
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
          <SafeAreaView style={{alignItems: "flex-start"}}>
          <Text style={styles.usernameText}>Nutzername</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          />
          <Button label='Freund hinzufügen' />
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
    flex: 1,
  },
  addfriendArea: {
    flex: 2,
  },
  input: {
    height: 35,
    width: 335,
    backgroundColor: "#D9D9D9",
    color: "#000000",
    borderWidth: 1,
    padding: 10,
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

export default AddFriends