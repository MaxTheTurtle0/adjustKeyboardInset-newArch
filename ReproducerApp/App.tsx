/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" automaticallyAdjustKeyboardInsets contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }} style={{ backgroundColor: "red" }}>
        <View style={{ marginVertical: "auto", height: 135, backgroundColor: "blue" }}>
        </View>
        <TextInput style={{ backgroundColor: "pink" }} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
