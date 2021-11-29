//import React from "react";
//import styles from "./ContactList.module.css";
//import { useSelector, useDispatch } from "react-redux";
//import { deleteContact } from "../redux/contacts/contacts-operations";
//import {
//  getFilteredContacts,
//} from "../redux/contacts/contacts-selectors";

//export default function ContactList() {
//  const filteredContacts = useSelector(getFilteredContacts);
//  const dispatch = useDispatch();

//  return (
//    <ul className="list">
//      {filteredContacts.map(({ id, name, number }) => (
//        <li key={id} className="item">
//          <p className={styles.contact}>
//            {name}: {number}
//          </p>

//          <button
//            className="btn"
//            type="button"
//            onClick={() => dispatch(deleteContact(id))}
//          >
//            Delete
//          </button>
//        </li>
//      ))}
//    </ul>
//  );
//}
import propTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useGetContactsQuery } from "../redux/contactSlice";
import actions from "../redux/actions";
import ContactListItem from "./ContactItem";

function ContactList({ filter }) {
  const { data, isLoading: contactsIsLoading } = useGetContactsQuery();
  return (
    <div>
      {contactsIsLoading && (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      )}
      {data &&
        data
          .filter((obj) =>
            obj.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((el) => <ContactListItem key={el.id} el={el} />)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(actions.setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filter: propTypes.string.isRequired,
};