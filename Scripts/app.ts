import 'bootstrap'

import { UMT_jq } from "./TypeDefs/UMT_jq";
import { StudentController } from './Controllers/StudentController';

UMT_jq(document).ready(function () {
    const MAIN_CONTENT_ID: string = 'mainContent';

    const studentController: StudentController = new StudentController(MAIN_CONTENT_ID);
    studentController.Render();
});