import React, { useRef } from "react";

const UncontroledForm = () => {

const nameref=React.createRef();
const ageRef=React.createRef();

    const FormSubmitHandler=()=>{
        console.log(nameref.current.value)
        console.log(ageRef.current.value)

    }

    return <>
       <form onSubmit={FormSubmitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" ref={nameref} />
            
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Age" ref={ageRef} />
            
            <button type="submit">Submit</button>
        </form>
    </>
};
export default UncontroledForm;