"use client";

// Library Import
import React, { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

// Component Import
import EntriesColumn from "./EntriesColumn";
import EntriesCard from "./EntriesCard";

// Constants Import
import { columnsData } from "@/lib/constants";

// Types Import
import { Column } from "@/lib/types";

const MobileDashboard = ({
  selectedColumn,
}: {
  selectedColumn: "Customer Support" | "Customer Acquisition" | "Others" | null;
}) => {
  const [columns, setColumns] = useState<Record<string, Column>>(
    columnsData.reduce((acc, column) => {
      acc[column.id] = column;
      return acc;
    }, {} as Record<string, Column>)
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  const findActiveTask = (id: string) => {
    for (const column of Object.values(columns)) {
      const task = column.tasks.find((task) => task.id === id);
      if (task) return task;
    }
    return null;
  };

  const handleDragStart = (event: any) => {
    const { active } = event;
    setActiveId(active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const [sourceColumnId, sourceIndex] = findTask(active.id);
    const [targetColumnId, targetIndex] = findTask(over.id);

    if (!sourceColumnId || !targetColumnId) return;
    if (sourceColumnId === targetColumnId && sourceIndex === targetIndex)
      return;

    setColumns((columns) => {
      // @ts-ignore
      const sourceTasks = [...columns[sourceColumnId].tasks];
      // @ts-ignore
      const targetTasks =
        sourceColumnId === targetColumnId
          ? sourceTasks
          : [...columns[targetColumnId].tasks];
      // @ts-ignore
      const [movedTask] = sourceTasks.splice(sourceIndex, 1);

      if (sourceColumnId === targetColumnId) {
        // @ts-ignore
        sourceTasks.splice(targetIndex, 0, movedTask);
      } else {
        // @ts-ignore
        targetTasks.splice(targetIndex, 0, movedTask);
      }

      return {
        ...columns,
        [sourceColumnId]: {
          // @ts-ignore
          ...columns[sourceColumnId],
          tasks: sourceTasks,
        },
        [targetColumnId]: {
          // @ts-ignore
          ...columns[targetColumnId],
          tasks: targetTasks,
        },
      };
    });
  };

  const findTask = (taskId: string) => {
    for (const [columnId, column] of Object.entries(columns)) {
      const index = column.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        return [columnId, index];
      }
    }
    return [null, null];
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const activeTask = activeId ? findActiveTask(activeId) : null;

  return (
    <div className="block lg:hidden h-full">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <div className="gap-x-4 overflow-x-scroll overflow-y-hidden h-full scroll-container">
          {selectedColumn && (
            <EntriesColumn
              id={
                columnsData.find((col) => col.name === selectedColumn)?.id || ""
              }
              name={
                columnsData.find((col) => col.name === selectedColumn)?.name ||
                ""
              }
              icon={
                columnsData.find((col) => col.name === selectedColumn)?.icon ||
                ""
              }
              tasks={
                columnsData.find((col) => col.name === selectedColumn)?.tasks ||
                []
              }
            />
          )}
        </div>
        <DragOverlay>
          {activeTask ? (
            <EntriesCard
              id={activeTask.id}
              title={activeTask.title}
              userName={activeTask.userName}
              contactInfo={activeTask.contactInfo}
              interactionHistory={activeTask.interactionHistory}
              status={activeTask.status}
              notes={activeTask.notes}
              social={activeTask.social}
              urgency={activeTask.urgency}
              category={activeTask.category}
              subcategory={activeTask.subcategory}
              timestamp={activeTask.timestamp}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default MobileDashboard;
