import { BaseElement } from "../../Models/baseElement";
import { UMT_jq } from "../../TypeDefs/UMT_jq";
import { IButtonProps } from "./button.types";

export class DefaultButton extends BaseElement<IButtonProps> {
    constructor(props: IButtonProps) {
        super(props);
    }

    public Render() {
        this._props.container.append(this._control);
    }

    public GenerateControl(): JQuery<HTMLElement> {
        return UMT_jq(`<button type="button"        
                               class="${this._props.className}" 
                               id=${this._props.id}>                               
                            ${this._props.text}
                        </button>`);
    }

    protected RegisterEvents(): void {
        this._control.on("click", this._props.onClick);
    }
}