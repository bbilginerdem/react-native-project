import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<TextInput placeholder="Exter Todo Item" />
				<Button title="Add Todo" onPress={() => console.log("Button clicked")} />
			</View>
			<View>
				<Text>List of Todos</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
