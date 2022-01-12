import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let arr = ["user", "admin"];
  const [role, setRole] = useState(arr[0])
  const [nama, setNama] = useState("");
  let navigate = useNavigate();
  const handleProfil = () => {
    if (nama === "") {
      alert("masukan nama");
    } else {
        if(role === "user"){
      navigate(`/profil/${nama}`);
        }else{
            navigate(`/dasboard/${nama}`)
        }
    }
  };
  return (
    <div className="text-center pt-5 flex flex-col justify-center items-center">
      <h3 className="text-2xl text-indigo-800 font-bold mb-5">Homepage</h3>
      <div className="flex w-80 flex-col items-start">
        <label htmlFor="role">
          Role :
          <select
            onChange={(e) => setRole(e.target.value)}
            className="ml-3 px-3 py-1 rounded-sm border-gray-500 border"
          >
            {arr.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>

        <br />
        <label htmlFor="nama">
          Nama :
          <input
            type="text"
            className="ml-3 px-3 py-1 rounded-sm border-gray-500 border"
            onChange={(e) => setNama(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleProfil} className="px-3 ml-3 bg-blue-400 w-full py-2 text-center">
          Login
        </button>
      </div>
    </div>
  );
}
