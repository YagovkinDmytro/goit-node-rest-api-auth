import Contact from "../db/models/Contact.js";

export const getContacts = (query) =>
  Contact.findAll({
    where: query,
  });

export const getContact = (query) =>
  Contact.findOne({
    where: query,
  });

export const addContact = (data) => Contact.create(data);

export const updateContact = (query, data) =>
  Contact.update(data, {
    where: query,
  });

export const removeContact = (query) =>
  Contact.destroy({
    where: query,
  });
