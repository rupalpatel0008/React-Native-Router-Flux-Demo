import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';

export default class RouterComponent extends Component {
	nextButtonClickOnPage1() {
		Actions.Page2();
	}

	nextButtonClickOnPage2() {
		Actions.Home();
	}

	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="Home" component={Home} hideNavBar initial />
					<Scene
						key="Page1"
						component={Page1}
						title="Page1"
						leftButtonIconStyle={{ tintColor: 'red' }}
						rightTitle="Next"
						onRight={() => { this.nextButtonClickOnPage1(); }}
						rightButtonTextStyle={{ color: 'green' }}
						navigationBarStyle={{
							borderBottomColor: 'rgba(255,255,255,0.17)',
							borderWidth: 1,
							alignContent: 'center',
							backgroundColor: '#000',
						}}
						titleStyle={{ fontWeight: 'normal', fontSize: 16, color: '#FFF' }}
					/>
					<Scene
						key="Page2"
						component={Page2}
						title="Page2"
						leftButtonIconStyle={{ tintColor: "red" }}
						rightTitle="Done"
						onRight={() => { this.nextButtonClickOnPage2(); }}
						rightButtonTextStyle={{ color: 'green' }}
					/>
				</Scene>
			</Router>
		);
	}
}
