// Button.tsx
import React from "react";
import { Text, TouchableHighlight,View } from 'react-native';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onStartShouldSetResponder?: any;
    value?: number 
    style?: any
    texto?: string
    styleText?: any
}
const MyButton: React.FC<IButtonProps> = ({style,texto,styleText, onStartShouldSetResponder, children, ...props }) => {
//const MyButton: React.FC = () => {

    return (
        <View  onStartShouldSetResponder={onStartShouldSetResponder} value={props.value}{...props} style={style}> 
          <Text style={styleText}>{texto}</Text>
        </View>
    );
};

export default MyButton;
