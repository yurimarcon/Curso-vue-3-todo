// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "error",
    text: "teste!!!"
  }),
  actions:{
    notifyAlert(){
        this.showAlert = true;
        setTimeout(()=>{
            this.showAlert = false;
        }, 3000)
    },
    notifyAlertCreated(){
      this.type = "success";
      this.text = "Task created success!!!"
      this.notifyAlert();
    },
    notifyAlertDeleted(){
      this.type = "warning";
      this.text = "Task deleted!!!"
      this.notifyAlert();
    },
    notifyAlertUpdated(){
      this.type = "info";
      this.text = "Task updated!!!"
      this.notifyAlert();
    },
  }
})