import { useState } from 'react';
import { Button, DatePicker, Divider } from '@nextui-org/react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root');

export const ModalCalendar = () => {

  const [ isOpen, setIsOpen ] = useState(true)

  const onCloseModal = () => {
    setIsOpen(false)
  }


  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
      >

        <div className='flex flex-col p-2 gap-3'>
          <div className='flex justify-between items-center'>
            <h1>Nuevo evento</h1>
            <i
              onClick={onCloseModal}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </i>
          </div>

          <hr className='border-blueDark-800 my-3'></hr>

          <form className='flex flex-col gap-3 w-80'>
            <div>
              <DatePicker color='primary' label='Start date' variant='underlined' />
            </div>
            <div>
              <DatePicker label='End date' variant='underlined' />
            </div>


          </form>
        </div>


      </Modal>
    </>
  )
}
