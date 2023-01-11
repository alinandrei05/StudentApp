import { UMT_jq } from "../TypeDefs/UMT_jq";
import { Student } from "../Models/student";
import { Sex } from "../Enums/sex";
import { MainSection } from "../Controls/Sections/mainSection";
import { ButtonsSection } from "../Controls/Sections/buttonsSection";
import { TextField } from "../Controls/Fields/textField";
import { DropDown } from "../Controls/Dropdown/dropDown";
import { DefaultButton } from "../Controls/Buttons/defaultButton";

export class StudentController {
    private _container: JQuery<HTMLElement>;
    private _data: Student;
    private _nameInput: TextField;
    private _addressInput: TextField;
    private _sexDropdown: DropDown;
    private _buttonsSectionControl: ButtonsSection;

    constructor(containerId: string) {
        this._container = UMT_jq(`#${containerId}`);
        this._data = this.ReadStudent();
    }

    public Render(): void {
        this.RenderMainSections();
        this.RenderInputControls();
        this.RenderDropdownControl();
        this.RenderButtonControl();
    }

    private RenderMainSections(): void {
        const mainSection: MainSection = new MainSection({
            container: this._container,
            id: 'mainSection',
            className: 'mainSection',
            text: 'Main Section'
        });

        this._buttonsSectionControl = new ButtonsSection({
            container: mainSection.Control,
            id: 'buttonsSection',
            className: 'buttonsSection',
            text: 'Buttons Section'
        });
    }

    private RenderInputControls(): void {
        this._nameInput = new TextField({
            container: this._buttonsSectionControl.Control,
            id: "textInputName",
            text: "Name",
            value: this._data.Name,
            className: "input-group mb-3 student-name"
        });

        this._addressInput = new TextField({
            container: this._buttonsSectionControl.Control,
            id: "textInputAddress",
            text: "Address",
            value: this._data.Address,
            className: "input-group mb-3 student-address"
        });
    }

    private RenderDropdownControl(): void {
        this._sexDropdown = new DropDown({
            container: this._buttonsSectionControl.Control,
            id: "sexStudentChoiceFieldGroup",
            text: "Sex",
            className: "dropdown",
            width: 260,
        });
    }

    private RenderButtonControl(): void {
        const saveButton: DefaultButton = new DefaultButton({
            container: this._buttonsSectionControl.Control,
            id: "saveButton",
            text: "Create Student",
            className: "btn btn-primary",
            onClick: () => { this.HandleSave() }
        });
    }

    private ReadStudent(): Student {
        return {
            Uid: "123",
            Name: "Alinnn",
            Address: "Cluj",
            Sex: Sex.Male
        }
    }

    private HandleSave(): void {
        const studentData: Student = {
            Uid: '123',
            Name: this._nameInput.Value,
            Address: this._addressInput.Value,
            Sex: this._sexDropdown.SelectedValue
        }

        console.log(studentData);
    }
}