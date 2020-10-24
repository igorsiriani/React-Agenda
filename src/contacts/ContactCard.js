import React from 'react';

export default function ContactCard(props) {
    let { id, name, email, company, charge } = { ...props.data }
    return (
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
            <span className="block text-2xl font-semibold">{name}</span>
            <div className="flex w-full justify-between">
                <span className="block text-base text-gray-500">{email}</span>
                <span className="block text-base text-gray-500">{charge} - {company}</span>
            </div>
            <div className="flex w-full justify-start">
                <button
                    onClick={() => props.onDelete(id)}
                    className="bg-red-500 hover:bg-red-700 text-white rounded text-base mt-3 py-1 px-2"
                >
                    Remover
                </button>
                <button
                    onClick={() => props.onEdit(props.data)}
                    className="ml-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded text-base mt-3 py-1 px-2"
                >
                    Editar
                </button>
            </div>
        </div>
    )
}