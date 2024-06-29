import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import RightIcon from 'react-native-vector-icons/AntDesign'; 

interface CustomButtonProps {
    onPress: 'SignUp' | 'Main'; 
    text: string;
    iconName?: string;
    hideIcons?: boolean; 
    navigation: any; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    text,
    iconName,
    hideIcons = false, 
    navigation
}) => {
    return (
        <TouchableOpacity
            style={[
                tw`rounded-full mb-4 `,
                { backgroundColor: onPress === 'SignUp' ? '#253BFF' : '#1D2939' }
            ]}
            onPress={() => navigation.navigate(onPress)}
        >
            {hideIcons ? (
                <View style={tw`flex-1 items-center justify-center`}>
                    <Text style={tw`text-white text-base`}>{text}</Text>
                </View>
            ) : (
                <View style={tw`flex flex-row gap-2 items-center justify-between ml-3 `}>
                    <View style={tw`flex flex-row gap-2 items-center p-4`}>
                        {iconName && <Icon name={iconName} size={20} color="white" style={tw`mr-2`} />}
                        <Text style={tw`text-white text-base`}>{text}</Text>
                    </View>

                    <View style={tw`border border-white rounded-full p-3 m-1`}>
                        <RightIcon name="arrowright" size={20} color="white" />
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default CustomButton;
