export interface MyWorker
{
    id?: number;
    name: string;
    surname: string;
    phone: string;
    type: number; 
}

export enum MyWorkerType
{
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkerDataBase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', phone: '89053489678', type: 0 },
    { id: 2, name: 'Петр', surname: 'Петров', phone: '89251864785', type: 1 },
    { id: 3, name: 'Сидор', surname: 'Сидоров', phone: '89271576348', type: 2 },
    { id: 4, name: 'Василий', surname: 'Васильев', phone: '89634978536', type: 3 }
];