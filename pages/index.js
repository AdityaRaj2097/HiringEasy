import Image from 'next/image'
import Header from "../modules/component/Header"
import Modal from '../modules/component/Modal';
import { useState } from "react";
export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
      console.log(" clicked handleOpenModal")
        setModalOpen(true);
      };
  
  return (
    <>
 <Header handleOpenModal={handleOpenModal} ></Header>

 
 <Modal></Modal>
{/* {isModalOpen?(Modal):(<h1>nothin</h1>)} */}
       
         </>
  )
}
