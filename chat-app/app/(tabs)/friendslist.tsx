import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const Friendslist = () => {
  return (
    <View style={styles.container}>
      <Link href={"/signup"} style={styles.text}>Gehe zu Registrierung</Link>
      <Link href={"/login"} style={styles.text}>Gehe zu Login</Link>
      <Link href={"/signupSuccess"} style={styles.text}>Gehe zu Signup Success</Link>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2D34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default Friendslist