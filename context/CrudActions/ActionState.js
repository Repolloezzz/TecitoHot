import { useReducer } from "react";
import ActionReducer from "./ActionReducer";
import ActionContext from "./ActionContext";

export default function ActionState(props) {
  const Actions = {
    delAlert: false,
    formAlert: false,
    secAlert: false,
    actionAPI: { element: {}, head: {} },
  };

  const [state, dispath] = useReducer(ActionReducer, Actions);

  const setDelAlert = (boolean) => {
    dispath({
      type: "changeDelAlert",
      payload: boolean,
    });
  };
  const setFormAlert = (boolean) => {
    dispath({
      type: "changeFormAlert",
      payload: boolean,
    });
  };
  const setSecAlert = (boolean) => {
    dispath({
      type: "changeSecAlert",
      payload: boolean,
    })
  }

  const setActionAPI = (object) => {
    dispath({
      type: "changeActionAPI",
      payload: object,
    });
  };

  return (
    <>
      <ActionContext.Provider
        value={{
          delAlert: state.delAlert,
          formAlert: state.formAlert,
          secAlert: state.secAlert,
          actionAPI: state.actionAPI,
          setDelAlert,
          setFormAlert,
          setSecAlert,
          setActionAPI,
        }}
      >
        {props.children}
      </ActionContext.Provider>
    </>
  );
}
