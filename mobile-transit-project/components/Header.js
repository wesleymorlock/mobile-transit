import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


export default class Header extends Component {
	render() {
		return(
			<View>
				<Text style={styles.message}>
          			Welcome to our App!!
        		</Text>
        		<View style={styles.logoContainer}>
		        	<Image style={styles.logo} source={require('../assets/logo.png')} />
		        </View>
			</View>
		)
	};
}

const styles = StyleSheet.create({
	message: {
		fontSize: 20,
	},

	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},

	logo: {
		width: 100,
		height: 100,
	}
});
