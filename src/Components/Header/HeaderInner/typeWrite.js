import React, { useState, useEffect, useRef} from 'react';

const TypeWrite = ({testo}) => {

    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(()=> {
        const timeOutId = setTimeout (() => {
            setCurrentText((value) => value + testo.charAt(index.current));
            index.current += 1;
        }, 200);

        return ()=>{
            clearTimeout(timeOutId);
        }
    }, [currentText, testo]);

    return (
        <div>{currentText}</div>
    )
}

export default TypeWrite;