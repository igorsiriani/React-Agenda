import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'
import { getContacts } from './data'

export default function ContactList() {
    let [list, setList] = useState(getContacts());

    const handleDelete = (itemId) => {
        const items = list.filter(item => item.id !== itemId);
        setList(items);
    };

    const handleEdit = (item) => {

        document.getElementById('id').value = item.id;
        document.getElementById('name').value = item.name;
        document.getElementById('email').value = item.email;
        document.getElementById('company').value = item.company;
        document.getElementById('charge').value = item.charge;
        document.getElementById('btnSubmit').innerText = 'Alterar';
    }

    const addItem = (itemComp) => {

        let listItems = [];
        let isUpdate = false;

        list.forEach(element => {
            if(element.id != itemComp.id) {
                listItems.push(element);
            } else {
                isUpdate = true;
                listItems.push(itemComp);
            }
        });

        if (!isUpdate) {
            listItems.push(itemComp);
        }

        setList(listItems);
    }

    let cards = list.map(contact => (
        <ContactCard key={contact.id} data={contact} onDelete={handleDelete} onEdit={handleEdit} />
    ))

    return (
    <div className="w-6/12 m-auto">
        <div className="mb-8">
        <ContactForm save={addItem}  />
        </div>
        {cards}
    </div>
    )
}