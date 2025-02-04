import React from 'react';

const ParticipantsPage: React.FC = () => {
  const participants = [
    { name: 'Hilaire Sh', role: 'Product Designer' },
    { name: 'Christian Manzi', role: 'UI/UX Designer' },
    { name: 'Jolly Mutesi', role: 'Content Creator' },
    { name: 'Dr. Samuel Smith', role: 'Mental Health Professional' },
    { name: 'Dr. Lily Chen', role: 'Dermatologist' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Participants</h1>
      <div className="space-y-4">
        {participants.map((participant, index) => (
          <div key={index}>
            <div className="text-lg font-semibold">{participant.name}</div>
            <div className="text-sm text-gray-600">{participant.role}</div>
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsPage;
