import React from "react";

function Actions() {
  return (
    <div className="w-1/3 bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Actions</h2>
      <input className="w-full border p-2 mb-4" type="text" placeholder="Add... @" />
      <ul>
        <li className="flex justify-between items-center mb-2">
          <span>보안검토 받기</span>
          <span className="text-gray-400">Plan →</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>이메일 템플릿 변경</span>
          <span className="text-gray-400">5/17 →</span>
        </li>
        <li className="flex justify-between items-center mb-2">
          <span>모니터링 대시보드 생성</span>
          <span className="text-gray-400">5/18 →</span>
        </li>
      </ul>
    </div>
  );
}

export default Actions;
