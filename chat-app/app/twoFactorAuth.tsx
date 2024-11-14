import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DescriptionText from '@/components/DescriptionText'
import ImageViewer from '@/components/ImageViewer'
import Button from '@/components/Buttons'

const TwoFactorAuth = () => {
  const logo = require('@/assets/images/logo_4.png');    
  return (
    <SafeAreaProvider style={styles.container}>
        <ImageViewer imgSource={logo} theme='logo'/>
        <DescriptionText text='Sie erhalten einen Bestätigungscode per E-Mail.
         Bitte geben Sie den Code hier ein, um Ihren Login abzuschließen.'
         heading='Hallo, Kaan2474' headingNecessary={true}/>
        <SafeAreaView style={styles.inputArea}>
            <TextInput style={styles.input}/>
            <TextInput style={[styles.input, styles.inputMargin]}/>
            <TextInput style={[styles.input, styles.inputMargin]}/>
            <TextInput style={[styles.input, styles.inputMargin]}/>
            <TextInput style={[styles.input, styles.inputMargin]}/>
        </SafeAreaView>
        <SafeAreaView style={styles.buttonArea}>
            <Button label="Senden" />
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
    inputArea: {
        top: 75,
        flexDirection: "row",
    },
    input: {
      height: 65,
      width: 65,
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
    buttonArea: {
        flex: 1/4,
        top: 100,
        alignItems: "center"
      },
  });

export default TwoFactorAuth