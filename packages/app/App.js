/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import RNPhotoGridView from 'react-native-photo-grid-view';

type Props = {};
type State = {
	photos: Array<string>,
};

export default class App extends PureComponent<Props, State> {
    constructor() {
        super();
        this.state = {
            photos: [],
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=42')
            const data = await response.json();
            this.state.photos = data.map((photo) => {
                const num  = Math.random();

                // 30% chance of rendering the HD version
                if (num < 0.3) {
                    return photo.hdurl;
                } else {
                    return photo.url;
                }
            });
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
				<Text style={styles.welcome}>
					Addison Global LTD tech test!
				</Text>
                <RNPhotoGridView data={this.state.photos} style={{flex: 1}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 16,
    },
});
