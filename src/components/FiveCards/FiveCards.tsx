import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';

type Props = { title?: string; date?: string };

const FiveCards = ({ title, date }: Props) => {
  return (
    <View className='bg-blue-200 mb-5 p-5 rounded-lg'>
      <Text className='font-bold text-xl'>{title}</Text>
      <Text>{date}</Text>
      <Pressable className='rounded-lg w-1/2  mt-2 bg-blue-600 flex justify-center items-center p-2 '>
        <Text className='font-bold text-white'>See more</Text>
      </Pressable>
    </View>
  );
};

export default FiveCards;
