import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Home from './src/views/Home/Home';

export default function App() {
  return (
    <SafeAreaView className='mt-10'>
      <StatusBar style='auto' />
      {/* Traemos las views */}
      <Home />
    </SafeAreaView>
  );
}
