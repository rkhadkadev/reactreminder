import React from 'react'
import ReminderCard from '../components/ReminderCard'

const UpcommingPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ReminderCard isUpcomming={true}/>
        <ReminderCard isUpcomming={true}/>
        <ReminderCard isUpcomming={true}/>
    </div>
  )
}

export default UpcommingPage
