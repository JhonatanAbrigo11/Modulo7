import { Class } from "./Class";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Course {
    id!:string;
    class!:Class;
    teacher!:Teacher;
    students!:Student[];
}