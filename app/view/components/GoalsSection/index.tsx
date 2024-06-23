import React from "react";

function Goals() {
  return (
    <div className="w-1/3 bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Goals</h2>
      <input className="w-full border p-2 mb-4" type="text" placeholder="Add... #" />
      <ul>
        <li className="flex justify-between items-center mb-2">
          <span>운전면허를 땄다 #life</span>
          <span className="bg-green-200 p-1 rounded">Doing</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>3kg 감량했다 #life</span>
          <span className="bg-yellow-200 p-1 rounded">Pending</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>리액트 강의를 냈다 #회사커리어</span>
          <span className="bg-red-200 p-1 rounded">Cancel</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>토비 릴리즈 후 안정화를 했다 #회사</span>
          <span className="bg-red-200 p-1 rounded">Cancel</span>
        </li>
      </ul>
    </div>
  );
}

export default Goals;
