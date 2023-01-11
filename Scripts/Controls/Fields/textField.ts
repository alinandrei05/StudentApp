import { UMT_jq } from "../../TypeDefs/UMT_jq";
import { ITextFieldProps } from "../Fields/textField.types";
import { BaseElement } from "../../Models/baseElement";

export class TextField extends BaseElement<ITextFieldProps> {
    constructor(props: ITextFieldProps) {
        super(props);

        this.RegisteEvents();
    }

    public Render(): void {
        const textFieldControl: JQuery<HTMLElement> = UMT_jq(`<div class="${this._props.className}">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="inputGroup-sizing-default">${this._props.text}</span>
                                                            </div>                                                    
                                                            <span class="oi" data-glyph="arrow-bottom"></span>
                                                            </div>`);
        textFieldControl.append(this._control);
        this._props.container.append(textFieldControl);
    }

    public GenerateControl(): JQuery<HTMLElement> {
        return UMT_jq(`<input type="text" 
                            class="form-control"                                                        
                            aria-label="Default" 
                            aria-describedby="inputGroup-sizing-default"
                            id=${this._props.id}
                            value=${this._props.value}>`);
    }

    private RegisteEvents(): void {
        this._control.on("change", this.HandleOnChange);
    }

    private HandleOnChange(event: Event): void {
        const input: HTMLInputElement = event.currentTarget as HTMLInputElement;
        alert(`handle on change input value: ${input.value}`);
    }

    public get Value(): string {
        return this._control.val().toString();
    }
}