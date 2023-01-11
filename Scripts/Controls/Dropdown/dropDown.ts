import { BaseElement } from "../../Models/baseElement";
import { UMT_jq } from "../../TypeDefs/UMT_jq";
import { IDropDownProps } from "./dropDown.types";
import { Sex } from "../../Enums/sex";

export class DropDown extends BaseElement<IDropDownProps> {
    private _value: number;

    constructor(props: IDropDownProps) {
        super(props);
        this._value = Sex.Male;

        this.RegisterEvents();
    }

    public Render(): void {
        this._props.container.append(this._control);
    }

    public GenerateControl(): JQuery<HTMLElement> {
        return UMT_jq(`<div class="${this._props.className}">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ${this._props.text}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">${Sex[Sex.Male]}</a>
                        <a class="dropdown-item" href="#">${Sex[Sex.Female]}</a>
                        </div>
                    </div>`);
    }

    public RegisterEvents() {
        this._control.on("change", this.HandleOnChange);
    }

    private HandleOnChange(event: Event): void {
        const dropDown: HTMLSelectElement = event.currentTarget as HTMLSelectElement;
    }

    public get SelectedValue(): number {
        return this._value;
    }
}