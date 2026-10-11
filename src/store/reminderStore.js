import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { compareAsc, compareDesc } from "date-fns";

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
        return get().reminders.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
    },
    getReminderByID: (id) => get().reminders.find((reminder) => reminder.id==id),

    getUpcommingReminder: () =>  {
        return get().reminders.filter(reminder => compareAsc(new Date(reminder.dateTime), new Date(Date.now())) > 0)
    }
    
}),{
    name: "reminders",
}
))
export default useReminderStore