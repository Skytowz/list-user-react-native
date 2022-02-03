import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

export const ListUser = ({navigation}) => {
  const [users, setUser] = useState([]);

  const addUser = newUser => {
    console.log('TEST');
    setUser([...users, newUser]);
  };

  const handleAddUser = () => {
    navigation.navigate('Add User', {addUser: addUser});
  };

  const handleClear = () => {
    setUser([]);
  };

  return (
    <View>
      {users.map(user => (
        <View>
          <Text>
            {user.nom} {user.prenom}
          </Text>
        </View>
      ))}
      <Button title="Add User" onPress={handleAddUser} />
      <Button title="Clear List" onPress={handleClear} />
    </View>
  );
};
