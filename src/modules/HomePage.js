import axios from 'axios';
import React, { useEffect } from 'react';
import CardComponent from '../componentes/CardComponent';

export default function HomePage() {
  const listData = () => {
    axios({
      method: 'get',
      url: 'https://test.tecnosapiens.online/',
      withCredentials: false,
      "Access-Control-Allow-Origin": "*"
    })
      .then(function (response) {
        console.log(response)
      }); 
  }

  useEffect(() => {
    listData();
  }, [])
  
  return (
    <div>
      <CardComponent />
    </div>
  )
}