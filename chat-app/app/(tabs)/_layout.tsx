import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="chatdisplay" options={{ title: 'Chats' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
      <Tabs.Screen name="friendslist" options={{ title: 'Freundesliste' }} />
      <Tabs.Screen name="addfriend" options={{ title: 'Freund hinzufügen' }} />
    </Tabs>
  );
}
