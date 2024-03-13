import React, { useState } from 'react'
import style from './Calculator.module.css'
const Calculator = () => {
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
    return (
        <div>
            <div className={style.calculator}>
                <div className={style.showInput}>
                    {data}
                </div>
                <div className={style.calcBody}>
                    <div>
                        <div className={style.modifiers}>
                            <button onClick={() => setData("")}>C</button>
                            <button onClick={() => setData(data.substring(0, data.length - 1))}>Del</button>
                            <button onClick={e => setData(data + e.target.value)} value='%'>%</button>

                        </div>
                        <div className={style.digits}>{calcBtns}</div>
                    </div>
                    <div className={style.operations}>
                        <button onClick={e => setData(data + e.target.value)} value='+'>+</button>
                        <button onClick={e => setData(data + e.target.value)} value='-'>-</button>
                        <button onClick={e => setData(data + e.target.value)} value='*'>*</button>
                        <button onClick={e => setData(data + e.target.value)} value='/'>/</button>
                        <button onClick={e => {
                            try {
                                setData(
                                    String(eval(data)).length > 3 &&
                                        String(eval(data)).includes(".")
                                        ? String(eval(data).toFixed(4))
                                        : String(eval(data))
                                )
                            }

                            catch (err) {
                                console.log(err);
                            }

                        }} value='='>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
