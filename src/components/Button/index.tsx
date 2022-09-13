// Button.tsx
import React from "react";
import { RectButton } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onPress?: any;
    value?: number 
    testo?: String
    style?: any
}
const MyButton: React.FC<IButtonProps> = ({style, onPress, testo,children, ...props }) => {
//const MyButton: React.FC = () => {

    return (
        <RectButton  onPress={onPress} value={props.value}{...props} style={style}> 
            <Text>{testo}</Text>
        </RectButton>
    );
};

export default MyButton;
