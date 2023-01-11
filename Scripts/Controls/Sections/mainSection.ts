import { UMT_jq } from "../../TypeDefs/UMT_jq";
import { BaseElement } from "../../Models/baseElement";
import { IBaseElementProps } from "../../Models/baseElementProps";

export class MainSection extends BaseElement<IBaseElementProps> {
    constructor(props: IBaseElementProps) {
        super(props);
    }

    public get Control(): JQuery<HTMLElement> {
        return this._control;
    }

    public Render(): void {
        this._props.container.append(this._control);
    }

    public GenerateControl(): JQuery<HTMLElement> {
        return UMT_jq(`<div class="${this._props.className}">
                            ${this._props.text}
                       </div>`);
    }
}