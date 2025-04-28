// components/OpeningHours.tsx
export const OpeningHours = () => {
    const hours = [
      { day: 'Mon', time: '07:00 am – 07:00 pm' },
      { day: 'Tue', time: '07:00 am – 07:00 pm' },
      { day: 'Wed', time: '07:00 am – 07:00 pm' },
      { day: 'Thu', time: '07:00 am – 07:00 pm' },
      { day: 'Fri', time: '07:00 am – 07:00 pm' },
      { day: 'Sat', time: '07:00 am – 07:00 pm' },
      { day: 'Sun', time: 'Closed' },
    ];
  
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow max-w-sm">
        <h4 className="font-medium text-zinc-800 dark:text-white mb-2">Opening hours</h4>
        <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
          {hours.map(({ day, time }) => (
            <li key={day} className="flex justify-between">
              <span>{day}</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  