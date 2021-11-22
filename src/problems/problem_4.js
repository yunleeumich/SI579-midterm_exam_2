
import { useState, useEffect } from 'react';

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem () {

    const x = useState(0);
    // const clickCount = x[0];
    // const setClickCount = x[1];
    const [clickCount, setClickCount] = useState(0);
    function onClickBtn() {
        setClickCount(clickCount+1);
    }
    function clickReset() {
        const resetCount = 0;
    }
    
    useEffect(() => {
        localStorage.setItem("clickCount", JSON.stringify(clickCount))
    }, [clickCount]);

    return <div className="btn-group">
            <button className="btn btn-primary" onClick={onClickBtn} >Clicked {clickCount} times</button>
            <button className="btn btn-secondary" onClick={clickReset}>Reset</button>
        </div>;
    ;
}