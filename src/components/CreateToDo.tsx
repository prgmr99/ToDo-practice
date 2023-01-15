import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
    toDo: string;
}

  
function CreateToDo() {
    const setToDos = useSetRecoilState(todoState);
    const category = useRecoilValue(categoryState);
    const { handleSubmit, register, setValue } = useForm<IForm>();
    const handleValid = ({toDo}:IForm) => {
        setToDos(oldTodos => [{text: toDo, id: Date.now(), category}, ...oldTodos]);
        setValue("toDo", "");
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do" />
            <button>Add</button>
        </form>
    ); 
}

export default CreateToDo;
