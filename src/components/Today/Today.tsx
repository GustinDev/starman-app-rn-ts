import { View, Text, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { TodaysDataProps } from '../../types/index';

const Today = ({
  title,
  date,
  explanation,
  hdurl,
  media_type,
  service_version,
  url,
}: TodaysDataProps) => {
  return (
    <View className='w-4/5 h-80 mx-auto flex justify-start items-center bg-blue-300 rounded-xl mt-8'>
      <Image
        source={{ uri: url }}
        className='w-full h-40 object-cover rounded-t-xl'
      />
      <View className='flex h-30 my-auto'>
        <Text className='text-2xl font-bold'>{title}</Text>
        <View className='flex flex-col justify-between '>
          <Text className='text-lg '>Date: {date}</Text>
          <Pressable className='rounded-lg w-1/2 ml-auto mt-5 bg-blue-400 flexs justify-center items-center p-2'>
            <Text className='font-bold'>Learn more</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Today;
