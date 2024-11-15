import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import React from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DescriptionText from '@/components/DescriptionText';
import ImageViewer from '@/components/ImageViewer';


const PlaceholderImage = require('@/assets/images/default_user.jpg');

const DATA = [
  {
    name: "Alkan Cinar",
    message: "Kommst du heute?",
    time: "21:02",
    unreadMessages: "2",
    picture: PlaceholderImage,
    data: [""]
  },
  {
    name: "Egemen Yilmaz",
    message: "Hallo, wie gehts dir?",
    time: "17:32",
    unreadMessages: "1",
    data: [""]
  },
];

const ChatDisplay = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index, section}, ) => (
          <View style={styles.item}>
            <Text>{section.name}</Text>
            <Text>{section.time}</Text>
            <Text>{section.message}</Text>
            <Text>{section.unreadMessages}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: "#2A2D34",
  },
  x: {
    flexWrap: "wrap",
    backgroundColor: "blue",
    flexDirection: "row",
    alignContent: "center"
  },
  item: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginBottom: 10
  },
});

export default ChatDisplay