import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useReminderStore = create(persist((set, get) => ({
    reminders: [],
    addreminder: (reminder) => {
      set((state) => {
        const alreadyExists = state.reminders.some((item) => item.id === reminder.id)
        if (alreadyExists) return state
        return { reminders: [...state.reminders, reminder] }
      })
    },
    updateReminder: (id, data) => {
       const updatedReminder = get().reminders.map(reminder => 
        reminder.id === id ? { ...reminder, ...data } : reminder
        );
       set((state) => ({ reminders: updatedReminder }));
    },
    deleteReminder: (id) => {
        set((state)=>({
            reminders: state.reminders.filter((reminder)=>reminder.id != id)
    }))
    },
    getAllReminder: () => {
        return get().reminders;
    },
    getReminderByID: (id) => get().reminders.find((reminder) => reminder.id==id),
    
}),{
    name: "reminders",
}
))
export default useReminderStore