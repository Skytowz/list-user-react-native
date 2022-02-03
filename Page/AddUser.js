import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export const AddUser = ({route, navigation}) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const {addUser} = route.params || null;

  const handleNom = value => {
    setNom(value);
  };

  const handlePrenom = value => {
    setPrenom(value);
  };

  const ajoutUser = () => {
    route.params.addUser({
      nom: nom,
      prenom: prenom,
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        onChangeText={handleNom}
        placeholder="Nom"
        keyboardType="default"
      />
      <TextInput
        onChangeText={handlePrenom}
        placeholder="Prenom"
        keyboardType="default"
      />
      <Button title="Add User" onPress={ajoutUser} />
    </View>
  );
};
