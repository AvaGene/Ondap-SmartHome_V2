import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Devicesstyle";

export default function Devices() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>My Devices</Text>
					<Pressable
						style={styles.backButton}
						onPress={() => router.replace("/")}
					>
						<Text style={styles.backButtonText}>&gt;</Text>
					</Pressable>
				</View>

				<View style={styles.device}>
					<View>
						<Text style={styles.deviceName}>...</Text>
					</View>
				</View>

				<View style={styles.device}>
					<View>
						<Text style={styles.deviceName}>...</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
