import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';
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
  
  const handealDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/service/${id}`, {
          method: 'Delete',
        })
          .then(res => res.json())
          .then(data => {});

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

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
                    <th className="w-3/12 text-xl ">Update</th>
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
                      <button className=" hover:btn ml-6 text-xl font-bold hover:text-xl ">
                        <GrUpdate></GrUpdate>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handealDelete(service._id)}
                        className=" text-red-700 ml-6 text-xl"
                      >
                        <RiDeleteBin6Line></RiDeleteBin6Line>
                      </button>
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
