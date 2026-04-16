import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Saudacao from './Saudacao'; // importa o novo componente

export default function App() {
  return (
    <View style={styles.container}>
      <Saudacao />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
