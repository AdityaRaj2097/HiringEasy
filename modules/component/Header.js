const header =()=>{
    onst [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };
    return(
        <>
  <div className="w-full  border flex flex-row md:justify-between h-12 bg-cyan-500"> 
        <div className="text-base  h-12 "> Hire Easy</div>  
        <button > Login/singup
            
        </button>
        </div>
       
        </>
        
    )
}
export default header;