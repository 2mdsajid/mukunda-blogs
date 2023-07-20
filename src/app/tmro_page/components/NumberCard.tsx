import React from 'react';

type TypeNumberCard = {
  label: string;
  value?: number;
  date?: string;
};

const NumberCard = ({ label, value, date }: TypeNumberCard) => {
  const dateObj = date ? new Date(date) : null;
  let formattedDate = "";

  if (dateObj) {
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    formattedDate = `${month} ${day}, ${year}`;
  }

  return (
    <div className='border shadow-md rounded-md w-max px-3 py-2 m-2'>
      <p className='text-3xl font-bold'>{value}</p>
      <p className='text-lg font-semibold'>{label}</p>
      {formattedDate && <p className='text-sm'>{formattedDate}</p>}
    </div>
  );
};

export default NumberCard;
