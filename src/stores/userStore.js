import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: false,
    id: '',
    userName: '',
    typeRol: ''
  }),
  actions: {
    setUser(userData) {
      this.loggedIn = userData.loggedIn;
      this.id = userData.id;
      this.userName = userData.userName;
      this.typeRol = userData.typeRol;
    },
    logOut() {
      this.loggedIn = false;
      this.id = '';
      this.userName = '';
      this.typeRol = '';
      localStorage.removeItem('token');
    }
  }
});
