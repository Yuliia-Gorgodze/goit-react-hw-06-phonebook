import React, { Component } from 'react';

//components
import AddNameContact from './components/Form';
import ContactList from './components/ContactList';
// import { connect } from 'react-redux';
// import itemsActions from './redux/items/items-actions';
import Filter from './components/Filter';
// import styles from './components/styles.module.css';

class App extends Component {
  // state = {
  // contacts: [],
  // filter: '',
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   if (contacts) {
  //     const parseContacts = JSON.parse(contacts);
  //     this.setState({ contacts: parseContacts });
  //   } else {
  //     return;
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Телефонная книга</h1>
        <AddNameContact />
        <h2>Мои контакты: </h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
