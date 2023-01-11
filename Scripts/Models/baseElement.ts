import { IBaseElementProps } from "./baseElementProps";

export abstract class BaseElement<T extends IBaseElementProps> {
    protected _props: T;
    protected _control: JQuery<HTMLElement>;

    constructor(props: T) {
        this._props = props;
        this._control = this.GenerateControl();

        this.Render();
        this.RegisterEvents();
    }

    protected abstract Render(): void;
    protected abstract GenerateControl(): JQuery<HTMLElement>;
    protected RegisterEvents(): void { }
}