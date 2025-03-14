import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false,
    userName: '',
    typeRol: ''
  }),
  actions: {
    setUser(userData) {
      this.loggedIn = userData.loggedIn;
      this.userName = userData.userName;
      this.typeRol = userData.typeRol;
    },
    logOut() {
      this.loggedIn = false;
      this.userName = '';
      this.typeRol = '';
      localStorage.removeItem('token');
    }
  }
});
