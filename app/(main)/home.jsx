import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { supabase } from '../../lib/supabase';
import ScreenWrapper from '../../components/ScreenWrapper';

const Home = () => {
  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert('Sign out', 'Error signing out!');
    }
  };
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title='Logout' onPress={onLogout} />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
