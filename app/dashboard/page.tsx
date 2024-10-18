'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/Sidebar'
import { Input } from '@/components/ui/input'
import { Bell, ListFilter } from 'lucide-react';

const CRMDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className='p-4 h-screen font-gotham'>
        <div 
          className={cn(
            'relative transition-all w-auto h-full rounded-xl p-[1px] ml-[70px] bg-gradient',
            isSidebarOpen && 'ml-[325px]'
          )}
        >
          <div className='bg-[#0A0A0A] relative w-full h-full inset-0 rounded-xl flex flex-col items-center'> 

            {/* Header */}
            <div className='#CB6CE6 pb-[1px] w-full bg-gradient rounded-t-xl'>
              <div className='w-full px-8 py-2 bg-[#0A0A0A] rounded-t-xl flex items-center justify-between'>
                <p className='text-xl font-bold'>
                  <span className='bg-gradient-to-r text-transparent bg-clip-text from-[#571FC4] to-[#CB6CE6] '>
                    Your Customer
                  </span>
                </p>

                <div className='flex gap-x-8 items-center'>
                  <Input 
                    className='rounded-full border-[1px] placeholder:text-white/50 text-white min-w-[300px] focus:border-[#CB6CE6]'
                    placeholder='Search customer...'
                  />
                  <div className="hover:bg-white/10 hover:text-[#CB6CE6] transition-all p-2 rounded-full flex justify-between items-center cursor-pointer">
                    <Bell className='w-6 h-6 text-white hover:text-[#CB6CE6]'/>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className='#CB6CE6 pb-[1px] w-full bg-gradient rounded-t-xl text-[14px]'>
              <div className='w-full pl-8 pr-32 py-2 bg-[#0A0A0A] rounded-t-xl flex items-center justify-between text-white'>
                <div className='flex gap-x-4 items-center'>
                  Filter <ListFilter className='w-4 h-4' />
                </div>
                <div className='h-full py-3 w-[1px] bg-white/25'  />
                <div>
                  Customer Acquisition Rate: <span className='text-status-green'>80%</span>
                </div>
                <div className='h-full py-3 w-[1px] bg-white/25'  />
                <div>
                  Customer Retention Rate: <span className='text-status-orange'>50%</span> 
                </div>
                <div className='h-full py-3 w-[1px] bg-white/25'  />
                <div>
                  Churn Rate: <span className='text-status-red'>50%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CRMDashboard