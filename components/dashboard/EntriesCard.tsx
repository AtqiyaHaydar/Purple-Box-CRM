import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Task } from '@/lib/types'

const EntriesCard = ({ id, title, userName, contactInfo, interactionHistory, status, notes }: Task) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  
  return (
    <div 
      className='p-2 mb-2 text-sm bg-white/100 rounded-md shadow-sm w-full' 
      ref={setNodeRef} 
      {...attributes} 
      {...listeners}
      style={style}
    >
      {title && <p className='text-md'>{title}</p>}
      {userName && <p className='font-semibold'>{userName}</p> }
      {contactInfo && <p className='text-[13px]'>{contactInfo?.email} <br></br> {contactInfo?.phone}</p>}
      {contactInfo && <div className='w-full bg-black/10 h-[1px] my-2' />}
      {interactionHistory && (
        <div>
          <p className='font-medium'>Interaction History: </p>
          <p className='text-[13px]'>{interactionHistory?.join(', ')}</p>
          <div className='w-full bg-black/10 h-[1px] my-2' />
        </div>
      )}
      {status && <p className='text-[13px]'>Status: {status}</p>}
      {notes && <p className='text-[13px]'>Notes: {notes}</p>}
    </div>
  )
}

export default EntriesCard