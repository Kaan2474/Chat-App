import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DescriptionText from '@/components/DescriptionText'
import ImageViewer from '@/components/ImageViewer'
import Button from '@/components/Buttons'


const logo = require('@/assets/images/logo_4.png');


const TwoFactorAuth = () => {  
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageViewer imgSource={logo} theme='logo'/>
      <SafeAreaView style={styles.descriptionArea}>
        <DescriptionText text='Sie erhalten einen Bestätigungscode per E-Mail.
        Bitte geben Sie den Code hier ein, um Ihren Login abzuschließen.'
        heading='Hallo, Kaan2474' headingNecessary={true}/>
      </SafeAreaView>

    <SafeAreaView style={styles.inputArea}>
      <SafeAreaView style={{flexDirection: "row"}}>
          <TextInput style={styles.input}/>
          <TextInput style={[styles.input, styles.inputMargin]}/>
          <TextInput style={[styles.input, styles.inputMargin]}/>
          <TextInput style={[styles.input, styles.inputMargin]}/>
          <TextInput style={[styles.input, styles.inputMargin]}/>
      </SafeAreaView>
      <Button label="Senden" />
    </SafeAreaView>
    </SafeAreaProvider>
  )
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
    inputArea: {
      flex: 1/2,
      marginTop: 50,
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    input: {
      height: 60,
      width: 60,
      borderRadius: 50,
      backgroundColor: "#30C5FF",
      color: "#000000",
      padding: 10,
      textAlign: "center",
      fontSize: 50
    },
    inputMargin: {
        marginLeft: 10,
    },
  });

export default TwoFactorAuth