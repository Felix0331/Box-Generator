import React, { useState } from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';


const BoxGenerator = props => {

    const [ formState, setFormState ] = useState({
        color: "",
        submitted: false,
        arr: []

  
    })

    const StyledBox = styled.div`
    border: 1px solid lightgray;
    display: inline-block;
    background: ${props => props.color};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    `;

    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
            // submitted : false
        });
        // console.log(formState);

    }
    const onSubmitHandler = event => {
        event.preventDefault();
        let x = formState.color;
        formState.arr.push(x);
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
            submitted:true
        })
        console.log(formState);
        console.log(formState.arr.length);
        console.log(formState.arr[0]);
        console.log(formState.arr[1]);
        console.log(formState.arr[2]);
        console.log(formState.arr[3]);
        console.log(formState.arr.height);
    }

    
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                
                <label>Select Box Color: </label>
                <input type="text" name="color" onChange={onChangeHandler}/>
                <button>Add</button>
            </form>
            {/* {formState.submitted?<StyledBox/>:<p>Not color</p>} */}
           <ul>
               {formState.arr.map((item) => <StyledBox color = {item}/>) }
           </ul>
            

        </div>
    );
}
export default BoxGenerator;