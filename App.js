import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class App extends Component {
  render() {
    return (
			<AppContainer />
    );
  }
}

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
				<Button title="Go Deneme" onPress={()=>{
					this.props.navigation.navigate("DenemeScreen")
				}}/>
			</View>
		);
	}
}
class DenemeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Deneme</Text>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	DenemeScreen:{
		screen:DenemeScreen
	}
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
