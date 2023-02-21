import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { user as userInfo, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {

    const { login, user } = useAuth()
    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: yup.object(validationSchema()),
        onSubmit: formData => {
            const { username, password } = formData

            if(username !== userInfo.username || password !== userInfo.password){
                setError('Username or Password is incorrect!!')
            }else{
                if(login) login(userDetails)
            }

        }
    })

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Log In</Text>
            <TextInput 
                placeholder='Username' 
                style={styles.input} 
                autoCapitalize={'none'}
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            <TextInput 
                placeholder='Password' 
                style={styles.input} 
                autoCapitalize={'none'} secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button 
                title='Enter' 
                onPress={() => formik.handleSubmit()}
            />
            {
                formik.errors.username && <Text style={styles.error}>{formik.errors.username}</Text>
            }
            {
              formik.errors.password && <Text style={styles.error}>{formik.errors.password}</Text>
            }
            {
              error && <Text style={styles.error}>{error}</Text>
            }
        </View>
    )
}

export default LoginForm

const validationSchema = () => {
    return {
        username: yup.string().required('Username required'),
        password: yup.string().required('Password required')
    }
}

const initialValues = {
    username: '',
    password: ''
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', 
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 40
    },
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    }
});
