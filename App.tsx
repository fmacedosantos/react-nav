import { Routes } from './src/routes';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

export default function App() {
  return (
    // há que home é a primeira rota, ela aparece
    <Routes/>
  );
}