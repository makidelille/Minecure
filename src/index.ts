import { Registry } from "./core/services/registry";
import { join } from "path";

let registry = Registry.getInstance();
registry.initialise(join(__dirname, "./services")).catch(err => {
    console.log(err);
});