// import {useState, createContext,FC,ReactNode} from "react"


// const CitasContext = createContext(null);



// const CitasContextProvider: FC<{children: ReactNode}> = ({children}) => {
//     const [citas, setCitas] = useState(() => {
//         JSON.parse(window.localStorage.getItem("listCitas") as string) || listCitas;    
//     })
//     const updateListCitas = (list) => {
//         window.localStorage.setItem("listCitas", JSON.stringify(list));
//         setCitas(list);
//     }

//     const value = {
//         citas,
//         updateListCitas
//     };

//     return <CitasContext.Provider value={value}
//     >{children}</CitasContext.Provider>;
// };

// export {CitasContextProvider};
// export default CitasContext;