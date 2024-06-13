import React from "react";
import { Tabs } from "expo-router";

import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="specialties/index"
        options={{
          title: "Especialidades",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "medical" : "medical-outline"}
              color={color}
            />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="my-medical-history"
        options={{
          title: "Mi historial",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="menu" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-appointments"
        options={{
          title: "Mis Turnos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="doctors/index"
        options={{
          href: null,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="calendary/index"
        options={{
          href: null,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="motive/index"
        options={{
          href: null,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="appointment-confirmation/index"
        options={{
          href: null,
          unmountOnBlur: true,
        }}
      />
      {/* <Tabs.Screen
        name="videocall/index"
        options={{
          href: null,
          unmountOnBlur: true,
        }}
      /> */}
    </Tabs>
  );
}
