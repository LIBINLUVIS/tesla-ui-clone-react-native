import React from 'react'
import {StyleSheet} from 'react-native';


const styles=StyleSheet.create({
    carContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"black",
       

    },
    headtext:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center"
    },
    headr:{
        display:'flex',
        marginLeft:10,
        marginRight:10,
        marginTop:"15%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    icon:{
        color:"white",
    },
    backgroundImage:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
    },
    batteryimg:{
        width:70,
        height:26
    },
    batteryicon:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    
    },
    millagetext:{
        marginLeft:10,
        color:"white",
        fontSize:35,
        fontWeight:"bold",
    },
    parkedtext:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
    },
    parktext:{
        color:"white",
        fontWeight:"bold"
        
    },
    controls:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center" ,
        marginTop:"40%",
        
    },
    controlbtn:{
        borderWidth:1,
        borderColor:"white",
        borderRadius:50,
        padding:18,
        marginLeft:25,
        color:"white"
    }
})

export default styles