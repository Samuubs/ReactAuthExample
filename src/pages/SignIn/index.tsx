import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    async function handleSignIn() {
        await signIn();
    }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Button title="Sign In" onPress={ handleSignIn }/>
        </View>
    )
}

export default SignIn;