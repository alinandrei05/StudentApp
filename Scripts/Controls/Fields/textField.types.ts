import { IBaseElementProps } from "../../Models/baseElementProps";

export interface ITextFieldProps extends IBaseElementProps {
    value: string;
    fontColor?: string;
}