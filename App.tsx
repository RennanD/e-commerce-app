import { StatusBar } from 'react-native'
import { Product } from './src/screens/Product';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <Product />
    </>
  );
}

