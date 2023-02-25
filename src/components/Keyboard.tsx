import Button from "./Button"
import { keyboards } from "../keyboards"
import { useState } from "react";

function Keyboard() {
    const buttonsRef: any[] = [];
  return (
    <div className="w-100 row justify-content-center text-center">
        <div className="col-12 d-flex justify-content-center p-0 px-1">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 d-flex justify-content-evenly mb-3">
                {
                    keyboards.firstLine.map( (el:string, index:number):any => <Button letter={el} key={index} index={index} buttons={buttonsRef} />)
                }
            </div>
        </div>
        <div className="col-12 d-flex justify-content-center p-0 px-1">
            <div className="col-10 col-md-9 col-lg-7 col-xl-6 d-flex justify-content-evenly mb-3">
                {
                    keyboards.secondLine.map( (el:string, index:number):any => <Button letter={el} key={index} index={index} buttons={buttonsRef}/>)
                }
            </div>
        </div>
        <div className="col-12 d-flex justify-content-center p-0 px-1">
            <div className="col-8 col-md-7 col-lg-6 col-xl-5 d-flex justify-content-evenly">
                {
                    keyboards.thirdLine.map( (el:string, index:number):any => <Button letter={el} key={index} index={index} buttons={buttonsRef}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Keyboard