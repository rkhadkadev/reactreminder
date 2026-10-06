import React from 'react'
import { Link } from "react-router-dom"
import ReminderCard from '../components/ReminderCard'
import useReminderStore from '../store/reminderStore'
import { format } from 'date-fns'

const HomePage = () => {
    const reminders = useReminderStore((state) => state.getAllReminder())
    console.log('Reminders:', reminders)
    if(reminders.length===0) {
        //Navigate it to add page
        return <h2 className='text-center bg-geen-400'>No reminders listed. Please click <Link className="text-blue-500 underline" to='/add'> here </Link>to add.</h2>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {reminders.map((reminder) => (
                <ReminderCard
                    key={reminder.id}
                    id={reminder.id}
                    title={reminder.title}
                    date={format(reminder.dateTime, "MMM dd, yyyy")}
                    time={format(reminder.dateTime, "HH:mm a")}
                    status={reminder.status}
                    description={reminder.description}
                />
            ))}
        </div>
    )
}

export default HomePage
