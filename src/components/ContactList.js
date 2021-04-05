import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';
import styles from './styles.module.css';

const ContactList = ({ contacts, deleteCantact }) => {
  return (
    <div>
      <ul className={styles.contactList}>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <li className={styles.contactCard} key={id}>
              {name} : {number}
              <button onClick={() => deleteCantact(id)}>Удалить</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
const getVisibleContact = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContact(state),
});
const mapDispatchToProps = dispatch => ({
  deleteCantact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteCantact: propTypes.func.isRequired,
};
