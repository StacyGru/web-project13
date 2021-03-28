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
    { id: 1, name: 'Иван', surname: 'Иванов', phone: '+7 (905) 348-96-78', type: 0 },
    { id: 2, name: 'Петр', surname: 'Петров', phone: '+7 (925) 186-47-85', type: 1 },
    { id: 3, name: 'Сидор', surname: 'Сидоров', phone: '+7 (927) 157-63-48', type: 2 },
    { id: 4, name: 'Василий', surname: 'Васильев', phone: '+7 (963) 497-85-36', type: 3 }
];