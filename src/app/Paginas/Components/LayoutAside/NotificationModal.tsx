"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/features/counter/counterSlice/counterSlice";

export default function NotificationModal() {

    interface RootState {
        counter: {
          value: number;
        };
      }

    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch()
      function Testar() {
        dispatch(increment())
        console.log(count)
      }

    return(
        <div onClick={() => Testar()} 
        className="w-[20rem] h-[15rem] absolute bg-BrancoBg drop-shadow-2xl translate-x-12 -translate-y-60">

        </div>
    )
}