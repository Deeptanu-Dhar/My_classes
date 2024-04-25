import {create} from 'zustand'
import { Teacher } from '../find-teacher/ui/responseType'

type Store = {
  Teachers:Teacher[],
  alradyFetchedTeacher:boolean
}

export type action ={
  addTeacher :(Teacher:Teacher[])=> void;
  changeAlradyFetchedTeacher:()=>void
}


export const useStore = create<Store & action>((set)=>({
  Teachers:[],
  alradyFetchedTeacher:false,
  addTeacher:(Teacher:Teacher[])=>set((state)=>({
    Teachers:[
      ...state.Teachers,
      ...Teacher
    ]
  })), 
  changeAlradyFetchedTeacher:()=>set(()=>({
    alradyFetchedTeacher:true

  }))

}))
