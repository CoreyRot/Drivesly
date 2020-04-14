import React from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, FlatList, Dimensions, SafeAreaView, Flex } from 'react-native';
import { Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Fire from '../utilities/Fire';
import  Modals from '../components/Reward';

export default class RewardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user: {}
    }
  }


   componentDidMount() {
       const user = this.props.uid || Fire.shared.uid

       this.unsubscribe = Fire.shared.firestore
           .collection("users")
           .doc(user)
           .onSnapshot(doc => {
               this.setState({ user: doc.data() });
           });
   }

   componentWillUnmount() {
       this.unsubscribe();

   }

   unsubscribe = null;




  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
        <View>
           <Header
  centerComponent={{ text: 'Rewards', style: {fontSize: 25 } }}
  containerStyle={{
    backgroundColor: 'whitesmoke',
    justifyContent: 'space-around',
  }}
/>

<ScrollView>
  <View>
        <SafeAreaView style={styles.container}>

        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'center' }}>{this.state.user.T1}</Text>
        <Text style={{ fontSize: 14, color: 'black', textAlign:'center' }}>{this.state.user.C1}</Text>
        <Modals />
        </View>
        

        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'center' }}>{this.state.user.T2}</Text> 
        <Text style={{ fontSize: 12, color: 'black', textAlign:'center' }}>{this.state.user.C2}</Text>
        <Modals />
        </View>
       
        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'center' }}>{this.state.user.T3}</Text>
        <Text style={{ fontSize: 14, color: 'black', textAlign:'center' }}>{this.state.user.C3}</Text>
        <Modals />
        </View>
        
        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'center' }}>{this.state.user.T4}</Text> 
        <Text style={{ fontSize: 14, color: 'black', textAlign:'center'}}>{this.state.user.C4}</Text>
        <Modals />
        </View>

        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', textAlign:'center' }}>{this.state.user.T5}</Text>
        <Text style={{ fontSize: 14, color: 'black', textAlign:'center'}}>{this.state.user.C5}</Text>
        <Modals />
        </View>

        <View style={styles.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black',  textAlign:'center'  }}>{this.state.user.T6}</Text> 
        <Text style={{ fontSize: 14, color: 'black',  textAlign:'center'}}>{this.state.user.C6}</Text>
        <Modals />
        </View>

        <View style={styles.divider}>
        </View>
        
     
        </SafeAreaView>   
        </View>
        </ScrollView>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    alignSelf:'center',
   
    
  },

  item: {
    marginTop: 5,
    height: 230,
    borderRadius: 4,
    borderWidth: 1.0,
    borderColor: 'black',   
    flex: 1,
    flexDirection: 'column', 
    justifyContent:'center',
    width: 400,
    paddingTop: 40,
  },

  divider: {
    height: 90
  }
  
      });