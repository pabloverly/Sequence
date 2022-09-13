// Button.tsx
import React from "react";
import { RectButton } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
    value?: number;
    texto?: String;
    style?: any;
    textStyle?: any;
}
const MyButton: React.FC<IButtonProps> = ({style, onPress, texto,textStyle,children, ...props }) => {
//const MyButton: React.FC = () => {

    return (
        <RectButton  onPress={onPress} value={props.value}{...props} style={style}> 
            <Text style={textStyle}>{texto}</Text>
        </RectButton>
    );
};

export default MyButton;
