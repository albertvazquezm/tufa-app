import { createContext, useReducer } from "react";

const StoreContext = createContext({});

//export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
    //TODO const [globalState, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>
    );
};