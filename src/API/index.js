import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const API = {
  form: (name) => {
    return instance.get('forms?name=' + name).then((res) => res);
  },
  login: (login) => {
    return instance.get('users?login=' + login).then((res) => res);
  },
  signup: (login, password, contacts) => {
    return instance.post('users', { login, password, contacts }).then((response) => response);
  },
  edit: (id, data) => {
    return instance.patch('users/' + id, data);
  },
  delete: (id, data) => {
    return instance.patch('users/' + id, { contacts: data });
  },
  add: (id, data) => {
    return instance.patch('users/' + id, { contacts: data });
  },
};
