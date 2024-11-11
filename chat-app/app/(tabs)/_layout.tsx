import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#30C5FF",
        headerStyle: {
          backgroundColor: '#2A2D34',
        },
        headerTintColor: '#FFFFFF',
        tabBarStyle: {
        backgroundColor: '#2A2D34',
        },
      }}
    >
      <Tabs.Screen
        name="chatdisplay"
        options={{
          title: 'Chats',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"} size={24} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "person-sharp" : "person-outline"} size={24} color={color} />
          )
          }}
      />

      <Tabs.Screen
        name="friendslist"
        options={{
          title: 'Freundesliste',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "people-sharp" : "people-outline"} size={24} color={color} />
          )
          }}
      />

      <Tabs.Screen
        name="addfriend"
        options={{
          title: 'Freund hinzufügen',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? "person-add-sharp": "person-add-outline"} size={24} color={color} />
          )
          }}
      />
    </Tabs>
  );
}
