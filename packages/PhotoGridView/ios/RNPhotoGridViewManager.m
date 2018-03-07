#import <Foundation/Foundation.h>
#import "RNPhotoGridView.h"
#import "RNPhotoGridViewManager.h"

@implementation RNPhotoGridViewManager

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_MODULE();

// Return the native view that represents your React component
- (UIView *)view
{
    return [[RNPhotoGridView alloc] init];
}

@end
