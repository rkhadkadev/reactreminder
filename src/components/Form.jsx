import { useForm } from 'react-hook-form'
import Button from './button'
import useReminderStore from '../store/reminderStore';
import { useState } from 'react';

const Form = ( { isEditing=false, reminder }) => {
    
    const pushToReminderStore = useReminderStore((state) => state.addreminder)
    const updateToReminderStore = useReminderStore((state) => state.updateReminder)

    const { register, handleSubmit, reset } = useForm(
        {values: reminder,}
    );
    
    const submit = (data) => {
        const reminder = {
            id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
            ...data,
        }

        if (isEditing) {
            updateToReminderStore(reminder.id, data);
            const success = "Reminder has been updated successfully";
            alert(success);
        } else {
            pushToReminderStore(reminder);
            const success = "Reminder has been added successfully";
            alert(success);
        }
        reset();
        
        
    }

    return (
        <form onSubmit={handleSubmit(submit)}>  
        
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <div className='sm:col-span-2'>
                    
                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Title</label>
                    <input 
                    type='text'                 
                    id='name' 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' 
                    placeholder='Add Reminder Title' 
                    required 
                    {...register("title")}
                    />
                    
                </div>
                <div className='w-full'>
                    <label htmlFor='date' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Date & Time</label>
                    <input 
                    type='datetime-local'  
                    id='dateTime' 
                    className='bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-60'
                    {...register("dateTime")}
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor='time' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Status</label>
                    <select 
                    id='status' 
                    className='bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-60 disabled:text-gray-700' 
                    defaultValue="Pending"
                    disabled={!isEditing}
                    {...register("status")}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                
                <div className='sm:col-span-2'>
                    <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
                    <textarea 
                    id='description' 
                    rows='8' 
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' 
                    placeholder='Your description here'
                    {...register("description")}
                    ></textarea>
                </div>
            </div>
            <div className='mt-4'>                
                <Button label={isEditing ? "Update Reminder" : "Add Reminder"} />
            </div>
        </form>
    )
}

export default Form
