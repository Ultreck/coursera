import React, { useState } from 'react';
import Buttons from './Buttons';

const Loops = (props) => {
      
      const [currentUsers, setcurrentUsers] = useState()
      const [index, setindex] = useState()
      const [currentUsersname, setcurrentUsersname] = useState();
      const [currentUsersdept, setcurrentUsersdept] = useState();
      const [currentUsersschl, setcurrentUsersschl] = useState();
      const [popUpClass, setpopUpClass] = useState('text bg-sky-50 w-full h-screen z-30 fixed hidden');

      const deleteFunction = (e) =>{
            let found = props.userArr.filter((val, index) => (index !== e));
            props.setuserArr(found);
      }
      const editFunction = async(e) =>{
            setindex(e);
            setpopUpClass('text bg-sky-50 w-full h-screen z-30 fixed flex');
            let found = props.userArr.filter((val, index) => (index === e));
            setcurrentUsers(found);
            if (found){
                  await found.map((val, id) => (
                        setcurrentUsersname(val.name) &
                        setcurrentUsersdept(val.dept) &
                        setcurrentUsersschl(val.school)
                  ))
            }
      }
      const safeChangesFunction = () =>{
            let editedUsers = {name:currentUsersname, dept:currentUsersdept, school:currentUsersschl};
            props.setuserArr({...props.userArr[index],editedUsers})
            console.log( props.userArr);
            console.log(editedUsers);
            console.log(props.userArr[index]);
            setpopUpClass('text bg-sky-50 w-full h-screen z-30 fixed hidden');
            
      }
   
  return (
    <div className='grid'>
            <table className="text border border-collapse mt-10" align='center'>
                  <thead className="text">
                        <tr className="text bg-slate-200">
                              <th className="text border border-slate-300 px-14 py-3">S/N</th>
                              <th className="text border border-slate-300 px-14 py-3">NAME</th>
                              <th className="text border border-slate-300 px-14 py-3">DEPARTMENT</th>
                              <th className="text border border-slate-300 px-14 py-3">SCHOOL</th>
                              <th className="text border border-slate-300 px-14 py-3">ACTIONS</th>
                        </tr>
                  </thead>
                  {props.userArr.map((val, index) => (
                  <tbody className="text">
                        <tr className="text-xl hover:bg--100" key={index}>
                              <td className="text  border border-slate-300 px-14 py-3">{index+1}</td>
                              <td className="text  border border-slate-300 px-14 py-3">{val.name}</td>
                              <td className="text  border border-slate-300 px-14 py-3">{val.dept}</td>
                              <td className="text  border border-slate-300 px-14 py-3">{val.school}</td>
                              <td className="text  border border-slate-300 px-3 py-1 flex gap-2">
                                    <Buttons name={'Edit'} styles={'bg-blue-500 px-5 py-2 text-white font-bold hover:bg-blue-700'}  functs = {editFunction}  id={index}/>
                                    <Buttons name={'Delete'} styles={'bg-red-500 px-2 py-2 text-white font-bold hover:bg-red-700'} functs = {deleteFunction}  id={index} />
                              </td>
                        </tr>
                  </tbody>
                  ))}
            </table>
            <div className={popUpClass}>
                  <div className="text mt-60 z-50 drop-shadow-xl w-3/4 md:w-1/2 h-2/5 mx-auto bg-white p-10">
                        <h1 className="text-center text-white font-semibold py-1 bg-slate-400 w-40">Edit User</h1>
                        <button className="text absolute right-6 top-6 text-xl font-bold text-red-500" title='Close' onClick={() =>setpopUpClass('hidden')}>X</button>
                              <input type="text" onChange={(e) =>setcurrentUsersname(e.target.value)} value={currentUsersname} className="text outline-0 focus:border-2 focus:border-blue-400 px-3 w-full my-5 py-3 bg-slate-100" placeholder='Name' />
                              <input type="text" onChange={(e) =>setcurrentUsersdept(e.target.value)}  value={currentUsersdept} className="text outline-0 focus:border-2 focus:border-blue-400 px-3 w-full my-5 py-3 bg-slate-100" placeholder='Department' />
                              <input type="text" onChange={(e) =>setcurrentUsersschl(e.target.value)}  value={currentUsersschl} className="text outline-0 focus:border-2 focus:border-blue-400 px-3 w-full my-5 py-3 bg-slate-100" placeholder='School' />
                              <button onClick={safeChangesFunction} className="mt-24 bg-green-500 hover:text-xl hover:scale-105 w-1/2 py-3 text-white font-bold hover:bg-green-700 absolute right-10">Save Changes</button>
                              {/* <Buttons name={'Save Changes'} styles={'bg-green-500 hover:text-xl hover:scale-105 w-1/2 py-3 text-white font-bold hover:bg-green-700 absolute right-10'} functs={safeChangesFunction}/> */}
                  </div>
            </div>
    </div>
  )
}

export default Loops
