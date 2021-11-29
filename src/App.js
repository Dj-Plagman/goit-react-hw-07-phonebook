import React from 'react';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import './App.css';

function App() {
    return (
      <div className="Containet">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }

export default App;