import Contact from "../db/models/Contact.js";

export const getContacts = () => Contact.findAll();

export const getContactById = (contactId) => Contact.findByPk(contactId);

export const addContact = (data) => Contact.create(data);

export const updateContact = (contactId, data) =>
  Contact.update(data, {
    where: {
      id: contactId,
    },
  });

export const removeContact = (contactId) =>
  Contact.destroy({
    where: {
      id: contactId,
    },
  });
