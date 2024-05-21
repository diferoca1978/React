import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onDateOpenModal } from "../store";


export const useUiStore = () => {

  const dispatch = useDispatch()
   
  const { isDateModalOpen } = useSelector(state => state.ui)


  const openDateModal = () => {

    dispatch(onDateOpenModal())
     
  }

  const closeDateModal = () => {

    dispatch(onCloseDateModal()) 
  }

  return {
    //* properties
      isDateModalOpen,

    //* Methods
      openDateModal,
      closeDateModal
  }

}