import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.production.min';

const App = () => {
  const[expediente, setExpediente] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = () =>{
    //if(password.length >= 8){
    //  setPassword(password);
    //}
    //return Alert('El password debe de ser de 6 a 8.');
    expediente.length === 6 && password.length >= 8
      ? Alert('Login Exitoso')
      : Alert('Datos Incorrectos');
  };

  const userName = (expediente)=>{
    setExpediente(expediente);
  };

  const userpassword = password => {
    !password.length >= 8
     ? Alert('Debe de ser mayor a 8')
     : setPassword(password);
  };


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.containerPrint}>
        <View style={styles.tittlecontainer}>
          <Text>Login</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput 
            placeholder='username'
            keyboardType='numeric'
            multiline={false}
            value={expediente}
            OnChange={userName}
            />

            <TextInput 
            placeholder='Password'
            multiline={false}
            secureTextEntry={true}
            value={password}
            OnChange={userpassword}
            />

        </View>
        <View style={styles.buttonContainer}>
          <Button OnPress={handleSubmit}>
            <Text style={styles.textButton}>Login</Text>
          </Button>
        </View>
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerPrint: {
    flex: 1,
    backgroundColor: 'rgb(193,201,200,.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '80',
  },
  tittlecontainer: {
    alignItems: 'center',
  },
  inputsContainer:{
    margin:10,
    borderRadius:5,

  },
  buttonContainer:{
    margin:10,
    borderRadius:5,
    backgroundColor:'rgb(250, 250, 250,0.9)',
    borderColor:'rgb(245, 245, 245,0.3)',
    borderWidth:10,
  },
  textButton:{
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
  },
});
