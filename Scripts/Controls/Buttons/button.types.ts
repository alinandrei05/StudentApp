import { IBaseElementProps } from "../../Models/baseElementProps";

export interface IButtonProps extends IBaseElementProps {
    onClick: () => void;
}