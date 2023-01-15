import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../atoms";

function ToDo({text, category, id}:ITodo) {
    const setTodos = useSetRecoilState(todoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name},} = event;
        setTodos(oldTodos => {
            const targetPosition = oldTodos.findIndex(toDo => toDo.id === id);
            const oldTodo = oldTodos[targetPosition];
            const newTodo = { text, id, category: name as any};
            return [...oldTodos.slice(0, targetPosition), newTodo, ...oldTodos.slice(targetPosition+1)];
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
        </li>
    );
}


export default ToDo;