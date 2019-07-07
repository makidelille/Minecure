import IForm from "../../interfaces/IForm";
import AbstractService from "../../core/services/abstractService";
import { Register } from "../../core/services/registry";

@Register
export class MelInfoParking extends AbstractService {
    
    constructor(){
        super({
            name: "MEL Lille park info",
            input: {

            },
            output: {
                type: "json"
            }
        });
    }
    
    minecure(form: IForm): Promise<string> {
        throw new Error("Method not implemented.");
    }
    validate(field: string, value: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    choice(field: string): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

    
}