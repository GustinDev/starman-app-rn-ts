import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { fetchData } from '../../utils/fetch';
import { Logs } from 'expo';
import Today from '../../components/Today/Today';
import { TodaysDataProps } from '../../types';

type Props = {};

const Home = (props: Props) => {
  const [todaysData, setTodaysData] = useState<TodaysDataProps>({});

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImage = await fetchData();
        setTodaysData(todaysImage);
      } catch (error) {
        console.log(error);
        setTodaysData({});
      }
    };

    loadTodaysImage();
  }, []);

  return (
    <View>
      <Header />
      <Text>Today's photo: </Text>
      <Today {...todaysData} />
    </View>
  );
};

export default Home;
