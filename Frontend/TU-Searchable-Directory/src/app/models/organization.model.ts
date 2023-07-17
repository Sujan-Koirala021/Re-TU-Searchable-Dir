export class Organization{
    _id: string;
    name: string;
    info: {personnel: {name: string, title: string, imageUrl: string}[], programmes: {name: string, description: string}[]};
    children: string[];
    admin: boolean   
}