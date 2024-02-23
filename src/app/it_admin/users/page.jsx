import Button from '@/components/Button'
import Text from '@/components/TextField'
import React from 'react'
import { filter_icon, plus_icon } from '../../../../public/icons/index'
import Image from '../../../../node_modules/next/image'
import Table from '@/components/Table'
import Link from '../../../../node_modules/next/link'


const page = () => {
  return (
    <div className='w-full max-w-[1220px]'>
      <div className='flex justify-between'>
      <Text content='All users' className='font-primary text-heading_1' />
      <div className='flex gap-4'>
        <Button color='bt_secondary'> <Image src={filter_icon} alt="filter icon" height={24} width={24}/> Filter</Button>
        <Button color='bt_primary'><Link href="/it_admin/users/adduser" className='flex'><Image src={plus_icon} alt="plus icon" height={24} width={24} />Add New User</Link></Button>
      </div>
      </div>
      {/* <Table 
      data={}
      columns={}
      space='large'
      color='black'/> */}
    </div>
  )
}

export default page