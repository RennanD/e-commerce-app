import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons'

import styles from './styles';

import productImg from '../../assets/product.png'
import firstItemImg from '../../assets/first_item.png'
import selectedItemImg from '../../assets/selected_item.png'
import lastItemImg from '../../assets/last_item.png'
import { useState } from 'react';

const PRODUCT_COLORS = [
  '#3F4343',
  '#CCC6BA',
  '#CFCFCF'
]

export function Product(): JSX.Element {

  const [selectedColor, setSelectedColor] = useState('#3F4343')

  function handleSelectColor(color: string) {
    setSelectedColor(color)
  }

  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name='chevron-left' color="#CFCFCF" size={24} />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Feather name='heart' color="#CFCFCF" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { marginLeft: 10 }]} activeOpacity={0.7}>
            <Feather name='share-2' color="#CFCFCF" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.banner}>
        <Image source={productImg} style={{ position: 'relative' }} />
        <View style={styles.imageBanner} />

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.activeDot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.itemsList}>
          <View style={styles.item}>
            <Image source={firstItemImg} />
          </View>

          <View style={[styles.selectedItem, styles.item]}>
            <Image source={selectedItemImg} />
          </View>

          <View style={styles.item}>
            <Image source={lastItemImg} />
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.horizontal}>
          <Text style={styles.title}>FREE SHUPPING</Text>
          <View style={styles.headerRight}>
            <MaterialIcons name='star-rate' color="#E6BB66" size={24} />
            <Text style={styles.rate}>4.8</Text>
            <Text style={styles.votes}>(321)</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.productName}>Sony WH-1000XM4</Text>
          
          <Text style={styles.productDescription}>
            The intuitive and intelligent WH-1000XM4 
            headphones bring you new improvements in industry-leading 
            noise cancelling technology.
          </Text>
        </View>

        <View style={[styles.horizontal, { paddingTop: 0, marginTop: 20 }]}>
          <Text style={styles.price}>$ 4.999</Text>

          <View style={styles.colorContainer}>
            {PRODUCT_COLORS.map(color => (
              <TouchableOpacity 
                key={color} 
                onPress={() => handleSelectColor(color)} 
                style={[
                  styles.buttonColor, 
                  { 
                    borderWidth: 1,
                    borderColor: color === selectedColor ? color : "#fff"
                  }
                ]}
              >
                <View style={[
                  styles.colorOption, 
                  { backgroundColor: color }
                ]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}