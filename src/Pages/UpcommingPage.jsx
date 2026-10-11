import React from 'react'
import ReminderCard from '../components/ReminderCard'
import { isAfter, isBefore, isEqual } from 'date-fns';
import useReminderStore from '../store/reminderStore'

const UpcommingPage = () => {
    const reminders = useReminderStore((state) => state.getAllReminder())
    const upcommingReminders =[]
    reminders.forEach((reminder) => {
        if(isAfter(reminder.dateTime, Date.now())){
            upcommingReminders.push(reminder)
        }
    })
    
    
  return (
    <div className='grid max-w-3xl grid-cols-1 w-full gap-4'>
        {upcommingReminders.map((reminder) => (
        <ReminderCard key={reminder.id} id={reminder.id} title={reminder.title} date={reminder.date} time={reminder.time} status={reminder.status} description={reminder.description} isUpcomming={true}/>
        ))}
        
    </div>
  )
}

export default UpcommingPage
