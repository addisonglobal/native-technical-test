package com.photogridview;

import android.widget.TextView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

public class RNPhotoGridViewManager extends SimpleViewManager<TextView> {
	public static final String REACT_CLASS = "RNPhotoGridView";

	@Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
		TextView view = new TextView(reactContext);
		view.setText("Hello from React Native");

        return view;
    }
}
