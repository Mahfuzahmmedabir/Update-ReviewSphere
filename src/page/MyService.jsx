import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
const MyService = () => {
  const { user } = useContext(AuthContext);
  const [myServiec, setMyServiec] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/service?email=${user?.email}`)
      .then(data => {
        setMyServiec(data.data);
        data.data;
        console.log(data.data);
      });
  }, [user?.email]);
  return (
    <div>
      <h2> hie {myServiec.length}</h2>
      <div>
        {myServiec.map(service => (
          <div key={service._id}>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="w-3/12 text-xl">Company</th>
                    <th className="w-7/12 text-xl">Title</th>
                    <th className="w-3/12 text-xl ">Updeat</th>
                    <th className="w-3/12 text-xl">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {/* 
CompanyName
: 
"High Tech"
Description
: 
"You are now invited to participate in the next stage of our selection process. This project will be your opportunity to demonstrate your problem-solving skills"
Photourl
: 
"https://i.ibb.co.com/qsZLZhZ/1600w-f-AFQqyu-W2-Co.webp"
Price
: 
"200"
ServiceTitle
: 
"You are now invited to participate "
category
: 
"saas"
date
: 
"2024-12-25" */}

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={service?.Photourl} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{service.CompanyName}</div>
                        </div>
                      </div>
                    </td>

                    <td className="text-xl font-semibold">
                      {service?.ServiceTitle}
                    </td>

                    {/* <td>Updeat</td> */}

                    <td>
                      <button className="btn btn-ghost btn-xs">Updeat</button>
                    </td>
                    <td>
                      <button className=" border py-2 px-3">Detele</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyService;
