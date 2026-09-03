import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Dashboardstyle";

export default function Dashboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Home</Text>
          <Pressable
            style={styles.settingsButton}
            onPress={() => router.push("/settings")}
          >
            <Text style={styles.settingsButtonText}>Settings</Text>
          </Pressable>
        </View>

        <View style={styles.temperature}>
          <Text style={styles.temp}>20°C</Text>
          <Text style={styles.location}>Living Room</Text>
        </View>

        <View style={styles.deviceRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lights</Text>
            <Text style={styles.cardStatus}>Off</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>AC</Text>
            <Text style={styles.cardStatus}>20°C</Text>
          </View>
        </View>

        <View style={styles.deviceRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Door</Text>
            <Text style={styles.cardStatus}>Unlocked</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Camera</Text>
            <Text style={styles.cardStatus}>Off</Text>
          </View>
        </View>

        <Pressable
          style={styles.viewDevicesButton}
          onPress={() => router.push("/devices")}
        >
          <Text style={styles.viewDevicesText}>View All Devices</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}


