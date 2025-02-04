import React from 'react';

interface ParticipantProps {
  name: string;
  role: string;
}

const ParticipantCard: React.FC<ParticipantProps> = ({ name, role }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default ParticipantCard;