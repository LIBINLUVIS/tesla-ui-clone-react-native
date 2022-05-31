import React,{useState} from 'react'
import {View,ScrollView,Text,ImageBackground,Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear,faToolbox,faFan,faKey,faLock,faLockOpen } from '@fortawesome/free-solid-svg-icons'
import Menuview from '../Menu/index';

function index() {
   const [openkey,setOpenkey]=useState(false)
   const unlock=()=>{
     setOpenkey(true);
   }
   const lock=()=>{
     setOpenkey(false);
   }
  return (
    <View style={styles.carContainer}>
        <ImageBackground source={require("../../assets/background.png")} style={styles.backgroundImage}/>
        <View style={styles.headr}>
          <TouchableOpacity>
          <FontAwesomeIcon icon={ faGear } style={styles.icon} size={24}/>
          </TouchableOpacity>
           <Text style={styles.headtext}>My Model 3</Text>
           <TouchableOpacity>
           <FontAwesomeIcon icon={ faToolbox } style={styles.icon} size={24}/>
           </TouchableOpacity>
        </View>
        <View style={styles.batteryicon}>
          <Image source={require("../../assets/battery.png")} style={styles.batteryimg}/>
          <Text style={styles.millagetext}>150 mi</Text>
        </View>
        <View style={styles.parkedtext}>
          <Text style={styles.parktext}>Parked</Text>
        </View>
        <ScrollView>
        <View style={styles.controls}>
          <View style={styles.controlbtn}>
          <TouchableOpacity>
          <FontAwesomeIcon icon={ faFan } style={styles.icon} size={24} />
          </TouchableOpacity>
          </View>
          <View style={styles.controlbtn}>
          <TouchableOpacity>
          <FontAwesomeIcon icon={ faKey } style={styles.icon} size={24}/>
          </TouchableOpacity>
          </View>
          <View style={styles.controlbtn}>
         
            {openkey?
             <TouchableOpacity onPress={lock}>
            <FontAwesomeIcon icon={ faLockOpen } style={styles.icon} size={24}/>
            </TouchableOpacity>
             :<TouchableOpacity onPress={unlock}><FontAwesomeIcon icon={ faLock } style={styles.icon} size={24}/>
            </TouchableOpacity>}
         
          </View>  
        </View>
        <View>
        <Menuview/>
        </View>
        </ScrollView>
    </View>
  )
}

export default index;