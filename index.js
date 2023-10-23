'use strict'
import contacts from './mock'

const contactId = contacts.find((item) => {
  return item.id
});

const handleSave = (event) => {
  const contact = {
    id: contactId ? contactId.id : contacts + 1,
    name : fullName,
    phone : phoneNumber, 
  }

  if ( item.id === undefined){
    contacts.push(contact);
  } else {
    contacts[Number(item.id) - 1 ] = contact;
  }
}

const saveButton = document.querySelector('.add-button');
saveButton.onclick = {handleSave}

