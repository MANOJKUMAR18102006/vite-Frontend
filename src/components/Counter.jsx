//normal varaible cannot change immediately in dom
import { useEffect, useState } from "react";

const Counter = () => {
    // let count=0;
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('OutSide useEffect')
    },[count1])            //it is used when any changes in count1
    const increment1 = () => {
        console.log("Increment button clicked");
        setCount1(count1 + 1);
    }
    // const increment2 = () => {
    //     console.log("Increment button clicked");
    //     setCount2(count2 + 1);
    // }

    const decrement1 = () => {
        console.log("Decrement button clicked");
        setCount1(count1 - 1);
    }

    // const decrement2 = () => {
    //     console.log("Decrement button clicked");
    //     setCount2(count2 - 1);
    // }

    return (
        <div className="w-[400px] p-4 mx-auto m-5 bg-gray-300 rounded-[30px] shadow-lg flex flex-col items-center justify-center">
            <h1 className="text-xl mb-2 font-bold">Counter</h1>
            <p className="text-4xl mb-2 mt-3">{count1}</p>
            {/* <p className="text-4xl mb-2 mt-3">{count2}</p> */}

            <div className="flex gap-2 m-4">
                <button className="bg-red-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={decrement1}>decrement</button>
                <button className="bg-green-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={increment1}>Increment</button>
            </div>
            {/* <div className="flex gap-2 mb-5">
                <button className="bg-red-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={decrement2}>decrement</button>
                <button className="bg-green-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={increment2}>Increment</button>
            </div> */}

        </div>
    )
}

export default Counter;