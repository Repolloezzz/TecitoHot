import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcOk, FcRating } from "react-icons/fc";

interface FormContext {
  options: {
    content: JSX.Element | JSX.Element[];
    value: boolean;
  }[];
}
export const Check = ({ options }: FormContext) => {
  const [state, setState] = useState<{ state: null | boolean; msg: string }>({
    state: null,
    msg: "",
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    let formData = Object.entries(data);
    let count = 0;
    formData.map((element, index) => {
      if (element[1] == options[index].value) {
        count++;
      }
    });
    setState({
      state: count == formData.length ? true : false,
      msg:
        count == formData.length
          ? "Todas las respuestas son Correctas"
          : count > 0
          ? "Estuvo cerca"
          : "xd?",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          {options.map((element, index) => {
            return (
              <span key={index} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className={`checkbox rounded-none ${
                    state.state != null
                      ? element.value
                        ? "checkbox-success"
                        : "checkbox-error"
                      : "checkbox-accent"
                  } `}
                  {...register(`check${index}`)}
                />
                <label className="label-text text-lg">{element.content}</label>
              </span>
            );
          })}
        </div>
        <button
          disabled={state.state != null ? true : false}
          type="submit"
          className="btn btn-sm btn-primary rounded-none w-min"
        >
          Verificar
        </button>
      </form>
      {state.state != null ? (
        <span
          className={`${
            state.state
              ? "bg-success text-success-content shadow-lg"
              : "bg-error text-error-content shadow-lg"
          } rounded-none flex gap-2 items-center p-2`}
        >
          {state.msg}
        </span>
      ) : null}
    </>
  );
};

const all = { Check };
export default all;
