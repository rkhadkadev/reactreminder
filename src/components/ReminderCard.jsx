import React from 'react'
import Button from './Button.jsx'
import { Link } from 'react-router-dom'
import { EDIT_ROUTE } from '../constants/routes.js'
import useReminderStore from '../store/reminderStore.js'

const ReminderCard = ({ id, title, date, time, status="PENDING", description, isUpcomming=false,  }) => {
  let cardColor = "bg-orange-100"
  if(status=="Completed") cardColor = "bg-green-100"
  if(status=="CANCELLED") cardColor = "bg-red-100"

  const deleteReminder = (id) => {
    if(confirm("Are you sure!")) {
      useReminderStore.getState().deleteReminder(id);
    }

  }
  const updateToStatus = (id, status) => {
    if(confirm(`Are you sure you want to mark this as ${status}?`)) {
      useReminderStore.getState().updateReminder(id, { status });
      console.log(`Marked as ${status} and status updated to id = ${id}`);
    }
  }
    return (
    <div className={`shadow rounded-2xl p-6  ${cardColor}`}>
        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:mb-2 gap-x-4'>
            <h2 className='text-3xl font-medium'>{title}</h2>
            <div className='flex gap-2'>
                <Link to={`edit/${id}`} className='bg-blue-200 hover:bg-blue-100 py-0.5 px-1.5 rounded-md'> ✏️</Link>
                <button onClick={() => deleteReminder(id)} className='bg-red-200 hover:bg-red-100 py-0.5 px-1.5 rounded-md'>🗑️</button>
            </div>
        </div>
        
        <div className='flex gap-2 text-orange-500 pt-1 pb-2 text-xs'>
            <span>{date} {time}</span>  
        </div>
        <p className="pb-4">{description}</p>
        {status == 'Pending' && !isUpcomming && <Button 
        onClick={() => updateToStatus(id, "Completed")}
        label="Mark as Completed"
        type = "Primary"   />}
        {status == 'Pending' && !isUpcomming && <Button 
        onClick={() => updateToStatus(id, "CANCELLED")}
        label="Mark as Cancled"
        type = "Secondary"   /> }
    </div>
  )
}

export default ReminderCard
