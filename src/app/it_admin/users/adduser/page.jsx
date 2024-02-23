'use client';
import Displaycard from '@/components/Card'
import Form, { AdditionalForm } from '@/components/Form'
import React from 'react'

const page = () => {
    const fields = [
        {
            id: 1,
            label: 'Name Of Employee',
            name: 'name Of Employee',
            type: 'text',
            placeholder: 'Enter full name of employee',
            feildType: 'textFeild',
        },
        {
            id: 2,
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter email of the employee',
            feildType: 'textFeild',
        },
        {
            id: 3,
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter default password for the employee',
            feildType: 'textFeild',
        },
        {
            id: 4,
            label: 'Position',
            name: 'position',
            type: 'text',
            placeholder: 'Enter occupation of the employee',
            feildType: 'textFeild',
        },
        {
            id: 5,
            label: 'Salary/Wage',
            name: 'salary',
            type: 'text',
            placeholder: 'Enter salary of the employee',
            feildType: 'textFeild',
        },
        {
            id: 6,
            label: 'Gender',
            name: 'gender',
            type: 'text',
            placeholder: 'Enter gender of the employee',
            feildType: 'textFeild',
        },
        {
            id: 7,
            label: 'Image of National ID/ License ID',
            name: 'nationalID',
            type: 'file',
            placeholder: 'You can add multiple image',
            feildType: 'fileFeild',
        },
    ]
    
    const handleSubmit = formData => {
            console.log(formData);
          };

  return (
    <div className='flex justify-center'>
        <Displaycard variant='card2' 
        >
            <AdditionalForm 
            fields={fields}
            onSubmit={handleSubmit}
            btnText={'Add Employee'}
            />
        </Displaycard>
    </div>
  )
}

export default page