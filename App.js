import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'


export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes:{
    flex:1,
    padding:10,
    paddingTop:8,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});
