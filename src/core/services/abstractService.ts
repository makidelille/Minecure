import IService from "../../interfaces/IService";
import IForm from "../../interfaces/IForm";
import IServiceDefinition from "../../interfaces/IServiceDefinition";

export default abstract class AbstractService implements IService{
    abstract minecure(form: IForm): Promise<string>;
    abstract validate(field: string, value: any): Promise<boolean>;
    abstract choice(field: string): Promise<any[]>;

    public definition: IServiceDefinition;
    constructor(definition: IServiceDefinition){
        this.definition = definition;
    }
}