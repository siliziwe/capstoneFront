import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
const tech = 'https://capstone-final-projec.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    userMsg: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers (state, values) {
      state.users = values;
    },
    setUser (state, value) {
      state.user = value;
    },
    setProducts (state, values) {
      state.products = values;
    },
    setProduct (state, value) {
      state.product = value;
    },
    setfavourites: (state, favourites) => {
      state.favourites = favourites;
      console.log(favourites);
    },
    setUserMsg (state, value) {
      state.userMsg = value;
    }
  },
  actions: {
    getProducts: async (context) => {
      const res = await axios.get(tech + 'products');
      const { results } = await res.data;
      if (results) {
        context.commit('setProducts', results);
      }
    },
    getProduct: async (context, id) => {
      const res = await axios.get(tech + 'products/' + id);
      console.log(res.data);
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results);
      }
    },
    fetchUsers: async (context) => {
      const res = await axios.get(tech + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    fetchUser: async (context) => {
      const res = await axios.get(tech + 'user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
    },
    register: async (context, payload) => {
      const { firstName, lastName, email, password, mobile} = payload;
      const data = {
        firstName,
        lastName,
        email,
        password,
        mobile
      };
      const res = await axios.post(tech + '/register', data);
      const { results, msg, err } = await res.data;
      if (results) {
        context.commit('setUsers', results);
        context.commit('setUserMsg', msg);
      } else {
        context.commit('setUserMsg', err);
      }
    },
    login: async (context, payload) => {
      const { email, password } = payload;
      const data = {
        email,
        password
      };
      const res = await axios.post(tech + 'users/login', data);
      const results = await res.data;
      if (results) {
        router.push({ name: 'favorites' });
      }
    },
    getfavourites: (context, id) => {
      if (context.state.users.user_id === null) {
        alert('Please Login');
      } else {
        id = context.state.users.user_id;
        fetch(`https://capstone-final-projec.herokuapp.com/users${id}/favourites`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-auth-token': context.state.token
          }
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.results != null) {
              context.commit('setfavourites', (data.results));
            }
          });
      }
    },
    addTofavourites: async (context, product, id) => {
      console.log(product);
      if (context.state.users === null) {
        alert('Please Login');
      } else {
        id = context.state.users.user_id;
        fetch(`http://localhost:3000/users/${id}/favourites`, {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            context.dispatch('getfavourites', (id));
          });
      }
    },
    DeletItem: async (context, product, id) => {
      console.log(product);
      id = context.state.users.user_id;
      fetch(`http://localhost:3000/users/${id}/favourites/${product}`, {
        method: 'DELETE',
        body: JSON.stringify(product),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
          // "x-auth-token": context.state.token,
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch('getfavourites', (id));
        });
    }
  },
  modules: {
  }
});