import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="specialties/index"
        options={{
          title: 'Especialidades',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'medical' : 'medical-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-medical-history/index"
        options={{
          title: 'Mi historial',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='menu' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-appointments/index"
        options={{
          title: 'Mis Turnos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doctors/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
