// DraggableItem.tsx
import React, { useState } from 'react';
import { Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd';

interface SubItem {
  id: string;
  label: string;
}

interface DraggableItemProps {
  id: string;
  index: number;
  label: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, index, label }) => {
  const [subItems, setSubItems] = useState<SubItem[]>([]);

  const handleAddSubItem = () => {
    // Logic to handle adding sub-items
    // For example, add a new sub-item to the subItems array
    const newSubItem: SubItem = {
      id: `sub-${subItems.length + 1}`,
      label: `Sub-Item ${subItems.length + 1}`,
    };
    setSubItems([...subItems, newSubItem]);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            border: '1px dashed #ccc',
            padding: '10px',
            margin: '10px',
            width: '200px',
            textAlign: 'center',
            ...provided.draggableProps.style,
          }}
        >
          <div>{label}</div>
          <button onClick={handleAddSubItem}>Add Sub-Item</button>
          {/* Render sub-items here */}
          <Droppable droppableId={id} type='SUB_ITEM'>
            {(provided: DroppableProvided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {/* Render sub-items */}
                {subItems.map((subItem) => (
                  <div key={subItem.id}>{subItem.label}</div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
