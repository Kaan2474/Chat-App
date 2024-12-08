import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DescriptionText from '@/components/DescriptionText';
import ImageViewer from '@/components/ImageViewer';
import { type ImageSource } from "expo-image";
import { FlatList } from 'react-native';


const PlaceholderImage = require('@/assets/images/default_user.jpg');
const logo = require('@/assets/images/logo_4.png');

const DATA = [
  {
    id: "1",
    name: "Alkan Cinar",
    message: "Kommst du heute?",
    time: "21:02",
    unreadMessages: "2",
    picture: PlaceholderImage,
  },
  {
    id: "2",
    name: "Egemen Yilmaz",
    message: "Hallo, wie gehts dir?",
    time: "17:32",
    unreadMessages: "1",
    picture: PlaceholderImage,
  },
  {
    id: "3",
    name: "Efe Hisiroglu",
    message: "Kaan ich bin vor deiner Tür.",
    time: "17:32",
    unreadMessages: "3",
    picture: PlaceholderImage,
  },
];


type ItemProps = {
  name: string;
  message: string;
  time: string;
  unreadMessages: string;
  picture: ImageSource;
};


const Item = ({ time, name, message, picture, unreadMessages }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.time}>{time}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.message}>{message}</Text>
    <ImageViewer imgSource={picture} theme='chats' />
    <View style={styles.unreadMessagesContainer}>
      <Text style={styles.unreadMessages}>{unreadMessages}</Text>
    </View>
  </View>
);


const ChatDisplay = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item time={item.time} name={item.name}
          message={item.message} picture={item.picture}
          unreadMessages={item.unreadMessages}/>}
          keyExtractor={item => item.id}
          ListHeaderComponent={
          <>
            <ImageViewer imgSource={logo} theme='logo' />
            <SafeAreaView style={{backgroundColor: "red"}}>
            <DescriptionText text='Hier sind all Ihre Chats! Wählen Sie ein Gespräch,
            um direkt weiterzuschreiben, neue Nachrichten zu lesen oder starten Sie
            einen neuen Chat, um in Kontakt zu bleiben.' headingNecessary={false} />
            </SafeAreaView>
          </>
        }
      />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#2A2D34",
    padding: 20
  },
  item: {
    backgroundColor: "#D9D9D9",
    maxHeight: 80,
    marginBottom: 10
  },
  time: {
    textAlign: "right",
    top: 5,
    right: 5
  },
  name: {
    fontSize: 20,
    left: 75
  },
  message: {
    left: 90,
    top: 5
  },
  unreadMessagesContainer: {
    backgroundColor: "#30C5FF",
    width: 25,
    height: 25,
    borderRadius: 50,
    alignSelf: "flex-end",
    bottom: 70,
    right: 10
  },
  unreadMessages: {
    textAlign: "center",
    fontSize: 18
  }
});

export default ChatDisplay