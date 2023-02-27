import React, { useState } from "react";
import './Clicker.css'
function Clicker() {
    const [count, setCount] = useState(0);
    return (
            <div className='clicker' id='clicker'>
                <div className='container'>
                    <div className='col-2'>
                        <h2>Home</h2>
                        <span className='line'></span>
                        <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                        <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                        <button className='button'>Explore More</button>
                            <p>You clicked {count} times!</p>
                            <button onClick={() => setCount(count + 1)}>Click me</button>
                    </div>
                </div>
            </div>
        
    );
}

export default Clicker;