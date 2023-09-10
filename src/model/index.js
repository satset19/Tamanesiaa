import { create } from 'zustand'

export const useStore = create((set) => ({
    bar: false,
    setBar: (data) => set((state) => ({ bar: data })),
    // removeAllBears: () => set({ bears: 0 }),
}))

