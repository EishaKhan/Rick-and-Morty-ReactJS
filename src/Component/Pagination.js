import React, {useState, useEffect} from 'react';

const Pagination = ({showperpage, onPaginationChange, total})=> {
const [counter, setCounter] = useState(1);  


useEffect(() => {
const value = showperpage * counter;
onPaginationChange( value - showperpage, value);
},[counter])


const onButtonClick = (type) => {
    if(type === "previous"){
        if(counter === 1){
        setCounter(1);
        } else {
            setCounter(counter - 1);
        }
    }else if(type === "Next"){
       if(Math.ceil(total / showperpage) === counter) {
           setCounter(counter);
       }else {
           setCounter(counter + 1);
       }
    }
};
    
    return(
        <div className="d-flex justify-content-between py-2">
            <button className="btn btn-primary" onClick={() => onButtonClick('previous')}>Previous</button>
            <button className="btn btn-primary" onClick={() => onButtonClick('Next')}>Next</button>
        </div>
    );
}

export default Pagination;