import React from 'react'

const Styling = () => {
      let myLink = "https://google.com/";
      let fruit = ['Banana', 'Apple', 'Mango'];
      // let gender = "Male";
      // let response = "";
    
      // if(gender === "Male"){
      //   response = "Na man you be";
      //   console.log(response);
      // }
      // else{
      //   response = "The Other Gender"
      //   console.log(response);
      // }
    
      // let myName = 'Emmanuel'
      let fruits = ['Banana', 'Apple', 'Mango'];
      // let fruits = [];
      console.log(fruits.length);
      let response = "";
      let gender = "Male";
      // let person = [{name:"Ola", age:30, gender:'Male'}, {name:"Dy", age:20, gender:'Female'}, {name:"Ay", age:40, gender:'Male'}]
      // if(gender === "Male"){
      //       response = "Na Man You Be";
      //       console.log(response);
      // }
      // else{
      //       response = "Other Gender";
      //       console.log(response);
      // }
      response = gender === "Male"? "Na Man You Be": "Other Gender";
      console.log(response);

  return (
    <>
    {fruits.length === 0? <div className="text">There Are No Fruits</div>:
     fruits.map((val, ind) => (
      <div className="text">
            <h1 className="text-3xl text-center">{val}</h1>
      </div>
    ))}
    {/* <div className="text p-40">
        <div className="text font-bold">Hello World</div>
        <input type="text" className="text" />
        <a href={myLink} className="text">Google</a>
        {!fruit.length === 0?
        <div className="text">There are no Fruit</div>:
         fruit.map((val, indx) => (
          <>
          <h1 key={indx} className="text-2xl font-mono font-bold">{indx+1} {val}</h1>
          </>
        ))}
    </div> */}
      {/* <h1 className="text-3xl font-bold font-mono mx-auto text-center mt-10" >{myName}</h1> */}
      {/* <div className="text-center mt-20">
            <span className="text text-3xl font-bold font-mono text-center mx-5">Name</span>
            <span className="text text-3xl font-bold font-mono text-center  mx-5">Age</span>
            <span className="text text-3xl font-bold font-mono  text-center  mx-5">Gender</span>
      </div>
      {person.map((val, ind) => (
            <div key={ind} className="text-center ">
                  <span className="text-2xl font-mono text-center span ">{val.name}  </span>
                  <span className="text-2xl font-mono text-center span ">{val.age} </span>
                  <span className="text-2xl font-mono text-center span ">{val.gender}</span>
            </div>
      ))} */}
    </>
  )
}

export default Styling;