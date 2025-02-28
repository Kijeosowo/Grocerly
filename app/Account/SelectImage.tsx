import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const SelectImage = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    Alert.alert('Select Image', 'Choose from where to select your image', [
      {text: 'Camera', onPress: openCamera},
      {text: 'Gallery', onPress: openGallery},
      {text: 'Cancel', style: 'cancel'},
    ]);
  };

  const openCamera = () => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.log(response.errorMessage);
        return;
      }
      setImageUri(response.assets[0].uri);
    });
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.log(response.errorMessage);
        return;
      }
      setImageUri(response.assets[0].uri);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <Image
          source={
            imageUri ? {uri: imageUri} : require('@/assets/profilepick.png')
          }
          style={styles.profilePic}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
});

export default SelectImage;
