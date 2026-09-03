import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Settingsstyle";

export default function Settings() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Pressable
            style={styles.backButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.backButtonText}>&gt;</Text>
          </Pressable>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>...</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}