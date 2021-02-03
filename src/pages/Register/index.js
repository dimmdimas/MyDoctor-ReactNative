import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, Input, Loading, Tombol} from '../../components';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config'
import { showMessage } from "react-native-flash-message";

const Register = ({navigation}) => {

  const [form, setForm] = useForm({
      fullName: '',
      profession: '',
      email: '',
      password: ''
  })

  const [loading, setLoading] = useState(false)

  const onContinue = () => {
    console.log (form);
    setLoading(true);
    Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false)
        setForm('reset')
        console.log('register success: ', success)
      })
      .catch((error) => {
        var errorMessage = error.message;
        setLoading(false)
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      });
    // navigation.navigate('UploadPhoto')
  };
  return (
    <>
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack ()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text />
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm ('fullName',value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession',value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm ('email',value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm ('password',value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Tombol title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create ({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
