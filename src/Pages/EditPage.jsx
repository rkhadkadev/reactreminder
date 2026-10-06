import React from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'
import useReminderStore from '../store/reminderStore'

const EditPage = () => {
    const params = useParams();
    const getReminderbyID = useReminderStore((state) => state.getReminderByID(params.id))
    
  return (
    <section className="max-w-2xl mx-auto" >
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Reminder</h2>
        <Form isEditing={true} reminder={getReminderbyID} />
    </section>
  )
}

export default EditPage
