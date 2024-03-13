import { createContext, useState } from "react";



const CalculatorContext = createContext()


 export const CalculatorProvider = ({ children }) => {
    const [data, setData] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
        calcBtns.push(
            <button onClick={e => {
                setData(data + e.target.value)
            }}
                value={item}
                key={item}
            >{item}</button>
        )
    })
    const datass = {
        data,
        calcBtns,
        setData
    }
    return (
        <CalculatorContext.Provider value={datass}>
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorContext