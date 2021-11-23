import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateText} from '../redux/action';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('screen');

const Contact = () => {
  const [settingText, setSettingText] = useState('');
  const {text} = useSelector(state => state);
  
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(updateText(settingText));
  };
  return (
    <View style={styles.center}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        placeholder={'Write Text...'}
        placeholderTextColor="#000"
        onChangeText={setSettingText}
        style={styles.inputText}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputText: {
    width: width - 40,
    backgroundColor: '#bfbfbf',
    paddingLeft: 15,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginTop: 20,
  },
  text: {
    color: '#000',
    marginBottom: 10,
  },
});

export default Contact;
