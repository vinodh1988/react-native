/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import Contacts from 'react-native-contacts';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SectionConnected } from './Redux/Hocs/Section';

type SectionProps = PropsWithChildren<{
  quote: string;
}>;

export function Section({children, quote}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {quote}
      </Text>
    
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "yellow",
  };

  useEffect(
    ()=>{
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]).then(() => {
        console.log("Reading contacts")
        Contacts.getAll().then(
             carray=>{ 
              let result=[]
              for(let x in carray){
                 result.push({key:carray[x].displayName})
              }
              setContacts(result)
           },
           err=> console.log(err)
        );
      })
    
    },[]
  )

  const [contacts,setContacts]=useState([])
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
         <Text style={styles.TextDec}>   React Native is working </Text>
         <FlatList
        data={contacts}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
       
       <SectionConnected/>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  TextDec: {
    fontFamily: 'courier',
    color: 'darkgreen',
    fontSize: 24,
    padding: 10,
    margin: 10,
    backgroundColor:"lightblue"
  },
  item: {
    color: "darkblue",
    fontFamily: "courier",
    padding: 10,
    margin: 20,
    borderWidth: 3,
    borderColor: "black"
  }
});

export default App;
