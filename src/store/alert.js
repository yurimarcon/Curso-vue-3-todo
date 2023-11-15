// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false
  }),
  actions:{
    notifyAlert(){
        this.showAlert = true;
        setTimeout(()=>{
            this.showAlert = false;
        }, 3000)
    }
  }
})