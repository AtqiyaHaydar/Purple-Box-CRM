'use client'

// Library Import
import { useState, useEffect } from 'react';
import { 
  SortableContext, 
  verticalListSortingStrategy 
} from '@dnd-kit/sortable';

// Components Import
import EntriesCard from './EntriesCard';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Types Import
import { Column } from '@/lib/types';

// Icons Import
import { Users } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { Box } from 'lucide-react';

const EntriesColumn = ({ tasks, name, icon: ColumnIcon }: Column) => {
  const [filter, setFilter] = useState({ type: '', value: '' });
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    const applyFilter = () => {
      if (filter.type === 'Status') {
        setFilteredTasks(tasks.filter(task => task.status === filter.value));
      } else if (filter.type === 'Urgency') {
        setFilteredTasks(tasks.filter(task => task.urgency === filter.value));
      } else if (filter.type === 'Interaction') {
        setFilteredTasks(tasks.filter(task => task.interactionHistory.includes(filter.value)));
      } else if (filter.type === 'Subcategory') {
        setFilteredTasks(tasks.filter(task => task.subcategory === filter.value));
      } else {
        setFilteredTasks(tasks);
      }
    };
    applyFilter();
  }, [filter, tasks]);

  return (
    <div className="bg-[#0B0B0F] backdrop-blur-sm rounded-xl p-2 shadow-sm relative h-full w-full overflow-hidden text-white">
      <div className="font-medium text-start w-full pb-4 flex items-center justify-between text-sm">

        {/* Column Title */}
        <div className='flex items-center gap-x-2'>
          {ColumnIcon === 'Users' && <Users size={20} />}
          {ColumnIcon === 'Handshake' && <Handshake size={20} />}
          {ColumnIcon === 'Box' && <Box size={20} />}
          <h5>{name}</h5>
        </div>

        {/* Column Filtering */}
        <Select onValueChange={(value) => {
          const [type, val] = value.split(':');
          setFilter({ type, value: val });
        }}>
          <SelectTrigger className='max-w-[100px] font-normal text-[14px]'>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by Status</SelectLabel>
              <SelectItem value="Status:Open">Open</SelectItem>
              <SelectItem value="Status:Closed">Closed</SelectItem>
              <SelectItem value="Status:Active">Active</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Filter by Urgency</SelectLabel>
              <SelectItem value="Urgency:High">High</SelectItem>
              <SelectItem value="Urgency:Mid">Mid</SelectItem>
              <SelectItem value="Urgency:Low">Low</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Filter by Interaction</SelectLabel>
              <SelectItem value="Interaction:Initial Contact">Initial Contact</SelectItem>
              <SelectItem value="Interaction:Follow-up">Follow-up</SelectItem>
              <SelectItem value="Interaction:Demo Session">Demo Session</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Filter by Subcategory</SelectLabel>
              <SelectItem value="Subcategory:Complaint">Complaint</SelectItem>
              <SelectItem value="Subcategory:Delivery Issue">Delivery Issue</SelectItem>
              <SelectItem value="Subcategory:Billing">Billing</SelectItem>
              <SelectItem value="Subcategory:Competitor">Competitor</SelectItem>
              <SelectItem value="Subcategory:Prospect">Prospect</SelectItem>
              <SelectItem value="Subcategory:Potential Lead">Potential Lead</SelectItem>
              <SelectItem value="Subcategory:Demo">Demo</SelectItem>
              <SelectItem value="Subcategory:Support Inquiry">Support Inquiry</SelectItem>
              <SelectItem value="Subcategory:Feedback">Feedback</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Card Display */}
      <div className="overflow-y-auto scrollbar-hide flex items-center justify-start flex-col h-full no-scrollbar">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {filteredTasks.length === 0 ? (
            <div className="placeholder p-4 text-gray-500">No tasks</div>
          ) : (
            <div className='w-full pb-20'>
              {
                filteredTasks.map((task) => (
                  <EntriesCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    userName={task.userName}
                    contactInfo={task.contactInfo}
                    interactionHistory={task.interactionHistory}
                    status={task.status}
                    notes={task.notes}
                    social={task.social} 
                    urgency={task.urgency}
                    subcategory={task.subcategory}
                    timestamp={task.timestamp}
                  />
                ))
              }
            </div>
          )}
        </SortableContext>
      </div>
    </div>
  );
};

export default EntriesColumn;