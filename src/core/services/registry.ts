import { readdirSync, readdir, lstat, lstatSync, readFileSync } from "fs";
import { resolve, join} from "path";
import IServiceDefinition from "../../interfaces/IServiceDefinition";
import IService from "../../interfaces/IService";
import AbstractService from "./abstractService";
import IForm from "../../interfaces/IForm";

export class Registry {
    static instance: Registry; 
    static getInstance() : Registry{
        if(this.instance == null){
            this.instance = new Registry();
        }
        return this.instance;
    }

    services: {
        [name: string]: AbstractService;
    } = {};

    private constructor(){}
        

    public async initialise(scanDirPath: string) : Promise<boolean>{
        await this.scanDir(resolve(scanDirPath));

        return true;
    }


    private scanDir(scanDirPath: string) {
        return new Promise((success, reject) => {
            readdir(scanDirPath,( err, files) => {
                if(err) return reject(err);

                for(let dir of files){
                    try{
                        let pt = resolve(scanDirPath, dir);
                        require(pt);

                    }catch(err){};
                }
                success();
            });
        });
    }

    public async minecure(serviceName: string, data: IForm){
        if(this.services[serviceName] == undefined){
            throw new Error(`No such service: ${serviceName}`);
        }

        return await this.services[serviceName].minecure(data);
    }

    public async validate(serviceName: string, data: {field: string, value: any}){
        if(this.services[serviceName] == undefined){
            throw new Error(`No such service: ${serviceName}`);
        }

        return await this.services[serviceName].validate(data.field, data.value);
    }

    public async choice(serviceName: string, field: string){
        if(this.services[serviceName] == undefined){
            throw new Error(`No such service: ${serviceName}`);
        }

        return await this.services[serviceName].choice(field);
    }

    
    public get definitons() : Array<IServiceDefinition> {
        let ret = [];
        for(let name in this.services){
            ret.push(this.services[name].definition);
        }

        return ret;
    }
        
    
}

export function Register(target: any){
    let reg = Registry.getInstance();
    console.log(`Registring: ${target.name}`);
    reg.services[target.name] = new target();
}