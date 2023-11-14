import React from 'react'
import '../../CSS/Homework.css';
import { homework as HomeworkData } from '../../data';
function homework() {
    return (
        <div className='homework_container'>
            <h3 className='homework_heading'>Homeworks</h3>
            <div className='homework_list'>
                {Object.keys(HomeworkData).map((item) => (
                    <div key={item} className='homework_item'>
                        <p>{HomeworkData[item].toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default homework;