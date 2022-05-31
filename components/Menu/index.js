import React from 'react'
import { View,Text,ImageBackground,Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import items from './items'


function index() {
  return (
    <View style={styles.menuitems}>
      {items.map(item=>(
          <TouchableOpacity>
          <View style={styles.menuicons}>
          <FontAwesomeIcon icon={ item.icon } style={styles.icon1} size={24}/>
          <View style={styles.menutextbox}>
          <Text style={styles.menutext}>{item.title}</Text> 
          </View>
          <FontAwesomeIcon icon={ faAngleRight } style={styles.icon2} size={24}/>
          </View>
          </TouchableOpacity>
      ))}
    </View>
  )
}

export default index