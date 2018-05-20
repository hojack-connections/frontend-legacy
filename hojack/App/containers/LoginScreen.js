import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, } from 'react-native';
import { connect } from 'react-redux';
import MainTabNavigator from '../navigation/MainTabNavigator';

import normalize from '../helpers/normalizeText';
import { Colors, Styles } from '../Themes/';

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    onLogin() {
        this.props.navigation.navigate();
    }

    onBacktoSignup() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style={styles.input} 
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onLogin()}>
                        <View style={styles.loginButton}>
                            <Text style={styles.buttonTitle}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, }} onPress={() => this.onBacktoSignup()}>
                        <Text style={{ fontSize: normalize(14), color: 'blue', textDecorationLine: 'underline', }}>Go to SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 30, 
    },
    inputField: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black,
        height: 46, 
        marginBottom: 10, 
    },
    input: {
        marginLeft: 15, 
        flex: 1,
    },
    label: {
        fontSize: normalize(16),
    },
    buttonContainer: { 
        justifyContent: 'center', 
        marginTop: 30,
        flexDirection: 'row', 
    },
    loginButton: {
        backgroundColor: '#00eaea', 
        borderRadius: 10, 
        width: '90%', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    buttonTitle: { 
        marginLeft: 10, 
        fontSize: normalize(20), 
        color: Colors.white, 
    },
});

const mapStateToProps = state => ({
    // connectivity: state.connectivity.connectivity,
});

export default connect(mapStateToProps, null)(LoginScreen);