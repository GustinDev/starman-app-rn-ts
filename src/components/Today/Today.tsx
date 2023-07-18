import { View, Text, Image, Pressable } from 'react-native';
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
    <View className='w-4/5 h-[310px] mx-auto flex justify-start items-center bg-blue-300 rounded-2xl mt-2'>
      <Image
        source={{ uri: url }}
        className='w-full h-40 object-cover rounded-t-xl'
      />
      <View className='flex h-30 my-auto  w-full px-5'>
        <Text className='text-2xl font-bold'>{title}</Text>
        <View className='flex flex-col justify-between '>
          <Text className='text-[16px] '>Date: {date}</Text>
          <Pressable className='rounded-lg w-1/2  mt-2 bg-blue-600 flex justify-center items-center p-2 '>
            <Text className='font-bold text-white'>See more</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Today;
