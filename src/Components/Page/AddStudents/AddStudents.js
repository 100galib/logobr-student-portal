import React from 'react';
import DateObject from "react-date-object";

const AddStudents = () => {
    let date = new DateObject();
    return (
        <div className='w-full pr-5'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>Add Student</h1>
                <h1>{date.format()}</h1>
            </div>
            <form>

            </form>
        </div>
    );
};

export default AddStudents;