import React from "react";

function Today() {
  return (
    <div className="w-1/3 bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Today</h2>
      <ul>
        <li className="flex justify-between items-center mb-2">
          <span>몽골 비행기편 알아보기</span>
          <span className="text-gray-400">←</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>5분 요가</span>
          <span className="text-gray-400">←</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>토비 릴리즈 후 안정화를 했다</span>
          <span className="text-gray-400">←</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>모니터링 대시보드 생성</span>
          <span className="text-gray-400">←</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>애즈 연동</span>
          <span className="text-gray-400">←</span>
        </li>
      </ul>
    </div>
  );
}

export default Today;
