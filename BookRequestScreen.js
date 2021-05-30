
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';


export default class BookRequestScreen extends Component {
    constructor(){
        super()
       this.state={
           bookName:'',
           reasonToRequest:'',
           userId:firebase.auth().currentUser.email
       } 
    }
    createUniqueId(){
     return Math.random().toString(36).substring(7);
    }
    addRequest=(bookName , reasonToRequest)=>{
      var userId =this.state.userId
        var randomRequestId = this.createUniqueId()
      db.collection("requested_books").add({
       "user_id": this.state.userId,
      " request_id" : randomRequestId,

       "book_name":bookName,
       "reason_to_request":reasonToRequest     
        })
    }
    render(){
        return(
            <View style={{flex:1}}>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
          style={styles.formTextInput}
          placeholder ={"Enter book name"}
          onChangeText={(text)=>{
            this.setState({
              BookName: text
            })
          }}
          value={this.state.bookName}
        />
        <TextInput
          style={[styles.formTextInput,{height:300}]}
          placeholder ={"reason to request"}
          
          onChangeText={(text)=>{
            this.setState({
              reasonToRequest: text

            })
          }}
          value={this.state.reasonToRequest}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={()=>
              this.addRequest(this.state.bookName, this.state.reasonToRequest )
            }
          >
          <Text >Submit</Text>
          </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  