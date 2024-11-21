import React from 'react'
import { useParams } from "react-router-dom"
export default function Bookdetail() {
    const { itemId } = useParams();
  return (
    <>
    <div>Bookdetail</div>
    {console.log(itemId)}
    
    </>
  )
}
