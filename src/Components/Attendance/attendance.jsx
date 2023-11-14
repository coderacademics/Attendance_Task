import React from 'react'
import data from '../../data';
import '../../CSS/Attendance.css';
function Attendance() {
    const attendanceData = data.attendance;
    return (
        <div className='attendance_container'>
            <h4>ATTENDANCE</h4>
            <div className='attendance_data'>
                <div className='fn_an'>
                    <li>FN</li>
                    <li>AN</li>
                </div>
                <div className='days_data'>
                    {Object.keys(attendanceData).map((day) => (
                        <div key={day} className='day_data'>
                            <li className='day'>{day}</li>
                            <li className='date'>{attendanceData[day].date}</li>
                            <li className={attendanceData[day].fn ==="present"?"present":"absent"}></li>
                            <li className={attendanceData[day].an ==="present"?"present":"absent"}></li>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Attendance;