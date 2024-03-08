import { ObjectAssignable } from "../ObjectAssignable";

export class HttpValidationProblemDetails extends ObjectAssignable {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: Map<string, string[]>;

    constructor() {
        super();
        this.type = "";
        this.title = "";
        this.status = 0;
        this.detail = "";
        this.instance = "";
        this.errors = new Map<string, string[]>();
    }
}
