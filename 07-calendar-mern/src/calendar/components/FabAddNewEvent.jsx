import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@nextui-org/react"
import { useCalendarStore, useUiStore } from "../../hooks"
import { addSeconds } from "date-fns"


export const FabAddNewEvent = () => {

  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClick = () => {
    setActiveEvent({
      title: '',
      description: '',
      start: new Date(),
      end: addSeconds(new Date(), 30),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Diego'
      }
    })
    openDateModal()

  }

  return (
    <Button
      onClick={handleClick}
      isIconOnly
      className="fixed bottom-6 right-6 rounded-full bg-blueDark-800 text-white-50 p-3 hover:bg-blueDark-600 cursor-pointer">
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  )
}
