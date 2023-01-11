import { UMT_jq } from "../../TypeDefs/UMT_jq";
import { IBaseElementProps } from "../../Models/baseElementProps";
import { BaseElement } from "../../Models/baseElement";

export class ButtonsSection extends BaseElement<IBaseElementProps>{
    constructor(props: IBaseElementProps) {
        super(props);
    }

    public Render(): void {
        this._props.container.append(this._control);
    }

    public GenerateControl(): JQuery<HTMLElement> {
        return UMT_jq(`<div class="${this._props.className}">
                            ${this._props.text}
                       </div>`);
    }

    public get Control(): JQuery<HTMLElement> {
        return this._control;
    }
}