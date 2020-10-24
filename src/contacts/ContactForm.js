import React, { useState } from 'react'

function getId() {
    return (5999 - Math.round(Math.random() * 392))
} 

function validateContact(data) {
    switch('') {
        case data.name:
            alert('Preencha o campo "Nome".');
            return false;
        case data.email:
            alert('Preencha o campo "E-mail".');
            return false;
        case data.company:
            alert('Preencha o campo "Empresa".');
            return false;
        default:
            break;
    }

    if(!data.email.includes('@')) {
        alert('Preencha um e-mail válido.');
        return false;
    }

    return true;
}

export default function ContactForm(props) {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let data = { 
            id: document.getElementById('id').value,
            name: document.getElementById('name').value, 
            email: document.getElementById('email').value, 
            company: document.getElementById('company').value, 
            charge: document.getElementById('charge').value 
        }

        if (validateContact(data)) {
            if (document.getElementById('id').value == null || document.getElementById('id').value == '') {
                props.save({ ...data, id: getId() })
            } else {
                props.save({ ...data, id:  document.getElementById('id').value })
            }
            document.getElementById('id').value = '';
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('company').value = '';
            document.getElementById('charge').value = '';
            document.getElementById('btnSubmit').innerText = 'Adicionar';
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
            <input type="hidden" id="id"/>
            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Nome:</label>
                <input id="name" type="text" className="p-2 rounded text-gray-600 text-lg  w-10/12"
                    maxLength={35}  />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">E-mail:</label>
                <input id="email" type="text" className="p-2 rounded text-gray-600 text-lg  w-10/12" 
                    maxLength={50}  />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between mt-2">
                <label className="text-lg">Empresa:</label>
                <input id="company" type="text" className="p-2 rounded text-gray-600 text-lg  w-10/12" 
                    maxLength={50} />
            </div>

            <div className="flex flex-row mb-2 items-stretch justify-between">
                <label className="text-lg">Cargo:</label>
                <input id="charge" type="text" className="p-2 rounded text-gray-600 text-lg  w-10/12" 
                    maxLength={50} />
            </div>

            <div>
                <button id="btnSubmit"className="p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded mt-4" type="submit">Adicionar</button>
            </div>
        </form>
    )
}