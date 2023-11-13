// Utilities
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks:[
        {
            title: "Estudar Vue",
            description: "Estudar vue com Vuetify..."
        },
        {
            title: "Ler documentação",
            description: "Estudar vue com Vuetify..."
        }
    ],
    titleTaskCreating: ""
  }),
  actions:{
    addTask(){
        this.tasks.push({
            title : this.titleTaskCreating
        })
        this.titleTaskCreating = "";
    }
  }
})