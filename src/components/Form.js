import React, { Component } from 'react';
import propTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';
import styles from './styles.module.css';
class AddNameContact extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  inputChange = event => {
    const { currentTarget } = event;
    this.setState({ [currentTarget.name]: currentTarget.value });
  };
  checkContact = name => {
    return this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  addContact = event => {
    event.preventDefault();
    if (this.checkContact(this.state.name)) {
      alert('такой контакт уже есть');
      return;
    } else {
      this.props.onSabmit(this.state);
    }
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.addContact}>
        <label className={styles.input}>
          Введите имя контакта:{' '}
          <input
            className={styles.inputValue}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          ></input>
        </label>
        <label className={styles.input}>
          Введите номер контакта:{' '}
          <input
            className={styles.inputValue}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
          ></input>
        </label>
        <button className={styles.buttonAddContact} type="submit">
          Добавить в контакты
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
  onSabmit: contact => dispatch(contactsActions.addContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddNameContact);

AddNameContact.propTypes = {
  formSabmit: propTypes.func,
};
