import IForm from "./IForm";
import IServiceDefinition from "./IServiceDefinition";

export default interface IService {
    minecure(form: IForm): Promise<string>;
    validate(field: string, value: any): Promise<boolean>;
    choice(field: string): Promise<Array<any>>;
}