import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams, TodaysDataProps } from '../../types/index';
import { useNavigation } from '@react-navigation/native';

//*Typing Props
type navigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const FiveCards = ({ title, date, explanation, url }: TodaysDataProps) => {
  //*Navigation

  const { navigate } = useNavigation<navigationProps>();

  //*PassingProps

  const handlePressView = () => {
    navigate('Detail', { title, date, url, explanation });
  };

  return (
    <View className='bg-blue-200 mb-5 p-5 rounded-lg'>
      <Text className='font-bold text-xl'>{title}</Text>
      <Text>{date}</Text>
      <Pressable
        onPress={handlePressView}
        className='rounded-lg w-1/2  mt-2 bg-blue-600 flex justify-center items-center p-2 '
      >
        <Text className='font-bold text-white'>See more</Text>
      </Pressable>
    </View>
  );
};

export default FiveCards;
