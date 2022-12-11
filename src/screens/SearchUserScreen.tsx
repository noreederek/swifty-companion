import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button, Input, Text, Card, Modal } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { ImageOverlay } from '../components/ImageOverlay/ImageOverlay';
import { PersonIcon } from '../components/Icons/PersonIcon';
import { getTokenFromStorage, saveNewTokenToStorage, checkTokenLiveness } from '../api/tokenRequests';
import { getUserInfo } from '../api/userInfoRequests';

export const SearchUserScreen = ({ navigation }: Props) => {

  const [username, setUsername] = React.useState<string>("");
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [modalText, setModalText] = React.useState<string>("");
  const usernameRegExp = new RegExp('[^A-Za-z0-9-]+');

  function showModalAlert(message: string) {
    setModalVisible(true);
    setModalText(message);
  }

  function getDataWithFreshToken() {
    saveNewTokenToStorage().then((access_token) => {
      getUserInfo(username, access_token).then((data) => {
        navigation.navigate('UserInfo', {
          userinfo: data,
        });
      })
        .catch(error => {
          showModalAlert(error.toString());
        });
    })
      .catch(error => {
        showModalAlert(error.toString());
      });
  }

  const navigateDetails = () => {
    if (!username) {
      showModalAlert("Please enter username");
    }
    else if (usernameRegExp.test(username)) {
      showModalAlert("Please enter valid username - no spaces or special symbols except '-'");
    }
    else {
      // Get Token from Storage
      getTokenFromStorage().then((access_token) => {
        // If token already exists in storage
        if (access_token) {
          // check his liveness
          checkTokenLiveness(access_token).then((success) => {
            // If token is alive get data
            if (success) {
              getUserInfo(username, access_token).then((data) => {
                navigation.navigate('UserInfo', {
                  userinfo: data,
                });
              })
                .catch(error => {
                  showModalAlert(error.toString());
                });
            } else {
              getDataWithFreshToken()
            }
          })
        } else {
          getDataWithFreshToken()
        }
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageOverlay
        style={styles.container}
        source={require('../assets/image-background.jpg')}>
        <View style={styles.headerContainer}>
          <Text
            category='h1'
            status='control'>
            Swifty Companion
          </Text>
          <Text
            style={styles.headerLabel}
            category='s1'
            status='control'>
            by nderek
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Username'
            // @ts-ignore
            accessoryLeft={PersonIcon}
            value={username}
            onChangeText={setUsername}
          />
          <Button
            style={styles.searchButton}
            status='control'
            size='giant'
            onPress={navigateDetails}>
            SEARCH
          </Button>
          <Modal
            visible={modalVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setModalVisible(false)}>
            <Card disabled={true}>
              <Text style={{ textAlign: "center" }} status='danger' category='h6'>😐 Oops!</Text>
              <Text style={{ textAlign: "center" }}>{modalText}</Text>
              <Button onPress={() => setModalVisible(false)} style={{ marginTop: 10 }} size='small'>
                Dismiss
              </Button>
            </Card>
          </Modal>
        </View>
      </ImageOverlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  headerLabel: {
    marginTop: 16,
  },
  searchButton: {
    marginTop: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});