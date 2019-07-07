export default interface IServiceDefinition{
    name: string;
    input: {
        [field: string]: {
            type: 'string' | 'number' | 'date'
        }
    };
    output: {
        type: "file"| "json"
    }
}