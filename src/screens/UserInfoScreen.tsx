import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { UserInfoTabView } from '../components/UserInfoTabView/UserInfoTabView';

const BackIcon = (props : any) => (
  <Icon {...props} name='arrow-back' />
);

export const UserInfoScreen = ({ route, navigation } : Props) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={route.params.userinfo.login} alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <UserInfoTabView userinfo={route.params.userinfo}/>
    </SafeAreaView>
  );
};