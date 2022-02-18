import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Text,
	ScrollView,
} from "react-native";
import React, { useState } from "react";

import Header from "./src/components/Header";

export default function App() {
	const [todoItem, setTodoItem] = useState("");
	const [todoList, setTodoList] = useState([]);

	const addTodoList = () => {
		setTodoList([...todoList, todoItem]);
		console.log(todoList);
	};

	return (
		<View>
			<Header title="Todo List Yey!"/>
			<ScrollView style={styles.container}>
				<View>
					<TextInput
						placeholder="Enter Todo Item"
						style={styles.textInput}
						onChangeText={(text) => setTodoItem(text)}
						value={todoItem}
					/>
					<Button title="Add Todo" onPress={addTodoList} />
				</View>
				<View>
					{todoList.map((todo) => (
						<View style={styles.todoItem} key={todo}>
							<Text>{todo}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
	},
	textInput: {
		padding: 10,
		borderColor: "#000000",
		marginBottom: 10,
		borderWidth: 1,
	},
	todoItem: {
		marginTop: 10,
		padding: 20,
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "gray",
	},
});
