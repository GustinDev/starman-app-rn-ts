import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams } from '../../types/index';
import Header from '../../components/Header/Header';
import Modal from 'react-native-modal';

//*Typing Props
type DetailScreenRouteProp = RouteProp<RootStackParams, 'Detail'>;
//*Define Props
type Props = {
  route: DetailScreenRouteProp;
};

//Modal Img:

const Detail = ({ route }: Props) => {
  //* Getting Props
  const { date, explanation, title, url } = route.params;

  //Zoom Image:
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  return (
    <SafeAreaView className='bg-black'>
      <ScrollView className='bg-blue-50 h-full w-full'>
        <Header />
        <View className='w-5/6 mx-auto my-10 bg-blue-200 p-5 rounded-xl'>
          <Text className='font-bold text-2xl mt-2 underline'>{title}</Text>
          <Text className='font-bold text-sm w-full ml-auto '>{date}</Text>
          <TouchableOpacity onPress={toggleImageModal}>
            <Image
              source={{ uri: url }}
              className='w-full h-60 object-contain  my-5 rounded-xl'
            />
          </TouchableOpacity>
          <Text className='text-lg'>{explanation}</Text>
        </View>
        {/* Modal para mostrar la imagen en modo de zoom */}
        <Modal
          style={{ margin: 0 }}
          isVisible={isImageModalVisible}
          onBackdropPress={toggleImageModal}
        >
          <View className='flex-1 items-center justify-center bg-black '>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={toggleImageModal}
            >
              <View
                className='bg-black '
                style={{ flex: 1 }}
              >
                <Image
                  source={{ uri: url }}
                  className='w-screen h-full '
                />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
