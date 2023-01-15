import { atom, selector } from "recoil";

//type categories = "TO_DO" | "DOING" | "DONE";

export enum Categories { 
    "TO_DO"="TO_DO",
    "DOING"="DOING",
    "DONE"="DONE",
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}
export const categoryState = atom<Categories>({
    key:"category",
    default: Categories.TO_DO,
})

export const todoState = atom<ITodo[]>({
    key: "toDo",
    default: []
});

export const todoSelector = selector({
    key: "todoSelector",
    get: ({get}) => {
        const toDos = get(todoState);
        const categories = get(categoryState);
        return toDos.filter((toDo) => toDo.category === categories);
    },
});