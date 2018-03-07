import React, { PureComponent } from 'react';
import { requireNativeComponent } from 'react-native';

const PhotoGridView = requireNativeComponent('RNPhotoGridView', RNPhotoGridView)

export default class RNPhotoGridView extends PureComponent {
    render () {
        return <PhotoGridView {...this.props} />;
    }
}
