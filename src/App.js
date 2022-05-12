// -------------------- Lesson 3 --------------------
// import { useState } from 'react';
// import './App.css';
// function App() {
//   const [name, setName] = useState('John')
//   const [surname, setSurname] = useState('Adams')
//   const [age, setAge] = useState(17)
//   const [isBanned, setIsBanned] = useState(false)
//   const [inputYear, setInputYear] = useState(0)
//   const [languages, setLanguages] = useState(['html', 'css', 'js'])
//   const [chosenLanguages, setChosenLanguages] = useState([])

//   const changeName = () => {
//     setName('Alex')
//   }

//   const changeSurname = () => {
//     setSurname('Martin')
//   }

//   const handleBan = () => {
//     setIsBanned(!isBanned)
//   }

//   const ageCount = value => {
//     setAge(age + value)
//   }

//   const onKeyUp = e => {
//     if (e.target.value.length > 0 && (e.target.value > 0 && e.target.value < 2022)) {
//       setInputYear(2022 - e.target.value)
//     } else {
//       alert('incorrect')
//     }
   
//   }

//   const checkLanguage = e => {
//     if (e.target.checked) {
//       chosenLanguages.push(e.target.value)
//       setChosenLanguages([...chosenLanguages])
//     } else {
//       setChosenLanguages(chosenLanguages.filter((item, i) => item != e.target.value))
//     }
//   }
 
//   const languageItems = languages.map((item, i) => <div key={i}>
//     <input onChange={checkLanguage} type={'checkbox'} value={item}/>
//     <span>{item}</span>
//   </div>)
  
  
//   return(
//     <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
//       <p>{name} {surname} {age}</p>
//       <p>{isBanned ? 'Забанен' : 'Не забанен'}</p>
//       <div>
//         <button onClick={changeName}>Change name</button>
//         <button onClick={changeSurname}>Change surname</button>
//       </div>
//       <div>
//         <button onClick={() => handleBan()}>{isBanned ? 'Разбанить' : 'Забанить'}</button>
//       </div>
//       <div>
//         <button onClick={() => ageCount(1)}>Increase</button>
//         <button onClick={() => ageCount(-1)}>Decrease</button>
//       </div>
//       <div>
//         <input onKeyUp={onKeyUp}/>
//         <p>{inputYear}</p>
//       </div>
//       {languageItems}
//       {chosenLanguages}
//     </div>
//   )
// }
// export default App;



// -------------------- Lesson 3 homework --------------------
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [inputText, setInputText] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [middleName, setMiddleName] = useState('')
//   const [isShown, setIsShown] = useState(false)
//   const [form, setForm] = useState({})
//   const [color, setColor] = useState('white')
//   const [paragraph, setParagraph] = useState(false)
//   const [input, setInput] = useState(true)
//   const [products, setProducts] = useState([
//     {
//       name: 'milk',
//       done: false
//     },
//     {
//       name: 'fish',
//       done: false
//     },
//     {
//       name: 'bread',
//       done: false
//     }
// ])

//   let shownProducts = products.map((item, i) => 
//       <li style={{textDecoration: item.done ? 'line-through' : 'none'}}><input onChange={() => crossProduct(i)} type={'checkbox'}/>{item.name}</li>
//   )

//   const onKeyUp1 = e => {
//     setInputText(e.target.value)
//   }

//   const onKeyUp2 = e => {
//     setInputText(e.target.value.toUpperCase())
//   }

//   const formFirstName = e => {
//     setFirstName(e.target.value)
//   }

//   const formLastName = e => {
//     setLastName(e.target.value)
//   }

//   const formMiddleName = e => {
//     setMiddleName(e.target.value)
//   }

//   const changeName = e => {
//     setForm({...form, [e.target.name]: e.target.value})
//   }

//   const showFullName = () => {
//     setIsShown(!isShown)
//   }

//   const changeColor = e => {
//     setColor(e.target.value)
//   }

//   const showParagraph = e => {
//     setParagraph(!paragraph)
//   }

//   const showInput = () => {
//     setInput(!input)
//   }

//   const crossProduct = (i) => {
//     const t = [...products]
//     t[i].done = !t[i].done
//     setProducts(t)
//   }

//   return (
//     <div style={{margin: '15px'}}>
//       <h2>Question 1</h2>
//       <p>Type text here</p>
//       <input onKeyUp={onKeyUp1}/>
//       <p>It will appear here</p>
//       <p>{inputText}</p>
//       <hr/>

//       <h2>Question 2</h2>
//       <p>Type text here</p>
//       <input onKeyUp={onKeyUp2}/>
//       <p>It will appear here</p>
//       <p>{inputText}</p>
//       <hr/>

//       <h2>Question 3</h2>
//       <p>Имя</p>
//       <input onChange={changeName} name={'firstName'}/>
//       <p>Фамилия</p>
//       <input onChange={changeName} name={'lastName'}/>
//       <p>Отчество</p>
//       <input onChange={changeName} name={'middleName'}/><br/><br/>
//       <button onClick={showFullName}>Full name</button>
//       <p>{isShown ? `${form.firstName} ${form.lastName} ${form.middleName}` : ''}</p>
//       <hr/>

//       <h2>Question 4</h2>
//       <select onChange={changeColor}>
//         <option value={'red'}>Red</option>
//         <option value={'green'}>Green</option>
//         <option value={'blue'}>Blue</option>
//       </select>
//       <p style={{backgroundColor: color}}>Something</p>
//       <hr/>

//       <h2>Question 5</h2>
//       <input onChange={showParagraph} type={'checkbox'}/>Show paragraph
//       {paragraph ? <p>SOmethingSOmethingSOmethingSOmethingSOmethingSOmethingSOmething</p> : ''}
//       <hr/>

//       <h2>Question 6</h2>
//       <input onChange={showInput} type={'checkbox'}/>Show input
//       <input disabled={input}/>
//       <hr/>

//       <h2>Question 7</h2>
//       <div>
//         <ol>
//           {shownProducts}
//         </ol>
//       </div>
//     </div>
//   )
// }

// export default App;



// -------------------- Lesson 4 homework --------------------
// import { useState } from 'react';
// import './App.css';

// function App() {
  // const [notes, setNotes] = useState([
  //   {
  //     letter: 'a',
  //     hidden: false
  //   },
  //   {
  //     letter: 'b',
  //     hidden: false
  //   },
  //   {
  //     letter: 'c',
  //     hidden: false
  //   },
  //   {
  //     letter: 'd',
  //     hidden: false
  //   },
  //   {
  //     letter: 'e',
  //     hidden: false
  //   }
  // ])

  // const outputNotes = notes.map((item, i) => 
  //   <li style={{marginBottom: '15px', display: item.hidden ? 'none' : 'block'}}>{item.letter} <button onClick={() => deleteNotes(i)}>Delete</button></li>
  // )

  // const deleteNotes = (i) => {
  //   setNotes(notes.filter((item, index) => i != index))
  // }

  // const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
  // const [note, setNote] = useState('')
  
  // const outputNotes = notes.map((item) => 
  //   <li>{item}</li>
  // )

  // const saveInput = e => {
  //   setNote(e.target.value)
  // }

  // const addNote = () => {
  //   setNotes([...notes, note])
  //   setNote('')
  // }

  // return (
  //   <>
      /* <h1>Question 2</h1>
      <ul>
        {outputNotes}
      </ul><hr/> */

      /* <h1>Question 3</h1>
      <ul>
        {outputNotes}
      </ul>
      <input value={note} onChange={saveInput}/><button onClick={addNote}>Save changes</button> */
    /* </>
  );
}

export default App; */


// -------------------- Lesson 5 --------------------
// import './App.css';
// import {useState} from 'react'
// import Users from './containers/users'
// import User from './components/user'
// import Product from './components/product'

// function App() {
  // const [users, setUsers] = useState([
  //   {
  //     name: 'Vova',
  //     age: 22,
  //     isBanned: false
  //   },
  //   {
  //     name: 'Alexey',
  //     age: 30,
  //     isBanned: false
  //   },
  //   {
  //     name: 'Andrey',
  //     age: 28,
  //     isBanned: false
  //   }
  // ])

  // const handleBan = i => {
  //   const temp = [...users]
  //   temp[i].isBanned = !temp[i].isBanned
  //   setUsers(temp)
  // }

  // const userItems = users.map((item, i) => 
  // <User 
  //   key={i} 
  //   index={i}
  //   name={item.name} 
  //   age={item.age} 
  //   isBanned={item.isBanned}
  //   handleBan={handleBan}
  // />)

//   const [products, setProducts] = useState([
//     {
//       name: 'Milk',
//       price: 300
//     },
//     {
//       name: 'Bread',
//       price: 70
//     },
//     {
//       name: 'Water',
//       price: 150
//     },
//     {
//       name: 'Sausages',
//       price: 500
//     }
//   ])

//   const showPrice = index => {
//     console.log(products[index].price)
//   }

//   const outputProducts = products.map((item, i) => 
//   <Product
//     key={i}
//     index={i}
//     name={item.name}
//     price={item.price}
//     showPrice={showPrice}
//   />)

//   return (
//     <>
//       {outputProducts}
//     </>
//   )
// }

// export default App;


// -------------------- Lesson 5 homework --------------------
// import './App.css';
// import {useState} from 'react'
// import Products from './components/products'
// import TotalAmount from './components/totalAmount';
// import 'antd/dist/antd.css'; 

// function App() {

//   const [products, setProducts] = useState([
//     {
//       name: 'Milk',
//       price: 200,
//       quantity: 10
//     },
//     {
//       name: 'Bread',
//       price: 80,
//       quantity: 6
//     },
//     {
//       name: 'Cheese',
//       price: 300,
//       quantity: 3
//     },
//     {
//       name: 'Chocolate',
//       price: 200,
//       quantity: 20
//     }
//   ])

//   let totalPrice = 0
//   let countedPrice = products.map((item) => totalPrice += item.price * item.quantity)

//   const deleteProduct = i => {
//     setProducts(products.filter((item, index) => i != index))
//   }

//   const outputProducts = products.map((item, i) => 
//   <Products
//     key={i}
//     index={i}
//     name={item.name}
//     price={item.price}
//     quantity={item.quantity}
//     deleteProduct={deleteProduct}
//   />)
  
//   return (
//     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%', margin: '0 auto'}}>
//       <table style={{width: '100%', borderCollapse: 'collapse'}}>
//         <thead>
//           <tr style={{textAlign: 'left'}}>
//             <th style={{border: '1px solid black'}}>Name</th>
//             <th style={{border: '1px solid black'}}>Quantity</th>
//             <th style={{border: '1px solid black'}}>Price</th>
//             <th style={{border: '1px solid black'}}>Full Price</th>
//           </tr>
//         </thead>

//         <tbody>
//           {outputProducts} 
//         </tbody>
        
//         <tfoot>
//           <tr>
//             <td></td>
//             <td></td>
//             <td style={{border: '1px solid black'}}>Total</td>
//             <TotalAmount total={totalPrice} />
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   )
// }

// export default App;




// -------------------- Lesson 6 homework --------------------
// import './App.css'
// import 'antd/dist/antd.css'; 
// import Blogs from './components/blogs'

// function App() {
//   return(
//     <>
//       <Blogs/>
//     </>
//   )
// }

// export default App;





// -------------------- Lesson 7 --------------------

import './App.css'
import 'antd/dist/antd.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './components/blogs'
import BlogDetails from './containers/blog-details';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='blogs/:id' element={<BlogDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


