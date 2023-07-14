import { View, Text, Image } from 'react-native';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <View className='flex flex-row justify-between px-4 py-2 bg-blue-100'>
      <Text className='text-2xl font-bold '>Starman</Text>
      <Image
        source={require('../../assets/nasa-logo.png')}
        className='w-9 h-9'
      />
    </View>
  );
};

export default Header;
