import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
          name="index"
          options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons name={'home-outline'} color={color} size={24} />
              ),
          }}
      />
      <Tabs.Screen
          name="settings"
          options={{
              title: 'Settings',
              tabBarIcon: ({color, focused}) => (
                  <Ionicons name={'settings-outline'} color={color} size={24} />
              ),
          }}
      />
      <Tabs.Screen
          name="morning-prayers"
          options={{
              href: null,
              headerShown: true,
              title: "Morning Prayers",
          }}
      />
      <Tabs.Screen
          name="evening-prayers"
          options={{
              href: null,
              headerShown: true,
              title: "Evening Prayers",
          }}
      />
    </Tabs>
  );
}
