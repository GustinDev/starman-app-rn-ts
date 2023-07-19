import { View, Text, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { fetchData } from '../../utils/fetch';
import Today from '../../components/Today/Today';
import { TodaysDataProps } from '../../types';
import { format, sub } from 'date-fns';
import FiveCards from '../../components/FiveCards/FiveCards';
//CONSTANTS DATA
import { fiveDaysConstData, todaysConstData } from '../../constants/data';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const Home = (props: Props) => {
  const [todaysData, setTodaysData] = useState<TodaysDataProps>({});
  //El type es un arreglo de la data definida.
  const [fiveDaysData, setFiveDaysData] = useState<TodaysDataProps[]>([]);

  //API: Limite de 30-50 recargas por día. Por eso usamos las constantes mejor.

  // useEffect(() => {
  //   const fetchDataAndLoad = async () => {
  //     try {
  //       const date = new Date();
  //       const todaysDate = format(date, 'yyyy-MM-dd');
  //       const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');
  //       // Check if the data is already loaded
  //       if (!todaysData || Object.keys(todaysData).length === 0) {
  //         const todaysImage = await fetchData();
  //         setTodaysData(todaysImage);
  //       }
  //       // Check if the data is already loaded
  //       if (fiveDaysData.length === 0) {
  //         const allFiveDaysData = await fetchData(
  //           `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
  //         );
  //         setFiveDaysData(allFiveDaysData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchDataAndLoad();
  // }, [todaysData, fiveDaysData]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Text className='ml-10 mt-5 font-bold text-xl underline'>
          Today's space image:
        </Text>
        <Today {...todaysConstData} />
        <Text className='ml-10 mt-2 font-bold text-xl underline mb-2'>
          Last Five Days' Images:
        </Text>
        <View className='mx-10'>
          {fiveDaysConstData.map((item, index) => (
            <FiveCards
              key={index}
              {...item}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
