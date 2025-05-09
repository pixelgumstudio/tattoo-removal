type WorkingHour = {
  day: string;
  time: string;
};

const dayMap: Record<string, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

const formatTime = (t: string) => {
  const match = t.match(/^(\d{1,2})(AM|PM)$/i);
  if (!match) return t;
  let hour = parseInt(match[1], 10);
  const period = match[2].toUpperCase();
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  return `${hour.toString().padStart(2, '0')}:00`;
};

const convertWorkingHours = (raw: string): WorkingHour[] => {
  const parsed: Record<string, string> = JSON.parse(raw);
  return Object.entries(parsed).map(([day, value]) => {
    if (value === 'Closed') {
      return { day: dayMap[day], time: 'Closed' };
    }
    const [start, end] = value.split('-').map(formatTime);
    const startStr = new Date(`1970-01-01T${start}:00`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const endStr = new Date(`1970-01-01T${end}:00`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return { day: dayMap[day], time: `${startStr} – ${endStr}` };
  });
};

export const OpeningHours = ({ hours }: { hours: string }) => {
  const parsedHours = convertWorkingHours(hours);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow max-w-sm">
      <h4 className="font-semibold text-grey-900 dark:text-white mb-2">Opening hours</h4>
      <ul className="text-sm dark:text-zinc-300 space-y-1">
        {parsedHours.map(({ day, time }) => (
          <li key={day} className="flex justify-between">
            <span  className="text-grey-600">{day}</span>
            <span  className="text-grey-900">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
