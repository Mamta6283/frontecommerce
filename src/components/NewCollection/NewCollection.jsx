import React, { useEffect, useState } from 'react';
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Items from '../items/Items';

function NewCollection(props) {
    // const [newcollection,setNew_Collection]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost/4000/newcolleciton')
    //     .then((res)=>res.json())
    //     .then((data)=>setNew_Collection(data))
    // },[])
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS </h1>
            <hr></hr>
            <div className="collections">
            {new_collection.map((items,i)=>{
                return <Items key={i} id={items.id} name={items.name}
                image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>
            })}
            </div>
        </div>
    );
}

export default NewCollection;

// import React, { useEffect, useState } from 'react';
// import './NewCollection.css';
// import Items from '../items/Items';

// function NewCollection() {
//     const [newcollection, setNewCollection] = useState([]);

//     useEffect(() => {
//         const fetchNewCollection = async () => {
//             try {
//                 const response = await fetch('http://localhost:4000/newcollection');
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch: ${response.statusText}`);
//                 }
//                 const data = await response.json();
//                 setNewCollection(data);
//             } catch (error) {
//                 console.error('Error fetching new collections:', error);
//             }
//         };

//         fetchNewCollection();
//     }, []);

//     return (
//         <div className='newcollections'>
//             <h1>NEW COLLECTIONS</h1>
//             <hr />
//             <div className="collections">
//                 {newcollection.length > 0 ? (
//                     newcollection.map((item, i) => (
//                         <Items 
//                             key={i} 
//                             id={item.id} 
//                             name={item.name} 
//                             image={item.image} 
//                             new_price={item.new_price} 
//                             old_price={item.old_price} 
//                         />
//                     ))
//                 ) : (
//                     <p>No new collections available</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default NewCollection;
