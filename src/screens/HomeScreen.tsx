import React, { useRef } from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import Booking from '@components/bookings/Booking';
import HeaderBar from '@components/common/HeaderBar';
import BottomBar from '@components/navigation/BottomBar';
import ColorConstants from '@constants/ColorConstants';

import { homeData } from '../data/homeData';

const HomeScreen = () => {
  const ref = useRef<FlatList>(null);

  const renderSearator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        ref={ref}
        data={homeData}
        ItemSeparatorComponent={renderSearator}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Booking item={item} />}
        contentContainerStyle={{ paddingTop: 16 }}
      />
      <BottomBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: ColorConstants.WHITE,
  },
  separator: {
    borderBottomColor: ColorConstants.BLACK[6],
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});
