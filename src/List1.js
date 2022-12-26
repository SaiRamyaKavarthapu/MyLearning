import React,{useState} from 'react'

function App(){
  const Data =['nikhitha','sri','mounika','saranya','sairamya']

  const [items, setItems]=useState(Data)

  const handleClick=(id)=>{
  let firstItem;
  let filteredItems=items.filter((item,index)=> {
  if(index !=id){
    return true
  }
  else
  firstItem = [item]
  return false;
})
 console.log("filteredItems",filteredItems)
 console.log("firstItem",firstItem)
 setItems([...firstItem,...filteredItems])
 console.log("items",items)

  }

  return(<>
   {items.map((item,index)=><li key={index} onClick={()=>handleClick(index)}>{item}</li>) }
 
  
  
  
  </>)
}
export default App;