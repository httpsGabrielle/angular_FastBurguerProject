export interface Food{
     id: number,
     name: string,
     price: number;
     ingredientes: Array<string>,
     acompanhamentos: Array<string>,
     image?: String
}