import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
import { DeckInterface } from '../utils/interface'
import { getBlog } from '../features/blogs/blogSlice'


const Deck = () => {
  const { blogs, isError, isLoading, message } = useAppSelector((state) => state.blogs)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getBlog())
  }, [dispatch, isError, message])

  isLoading && <Spinner />

  return (
    <div className="h-[40vh] w-full items-center flex justify-center">
      <div className='text-center flex flex-col items-center'>
        <p className='text-sm font-semibold animate-pulse text-[#b6fff4]'>Swipe right/left to discard</p>
        <div className='relative w-60'>
          {
            blogs.map(({_id, body, description, title, user}: DeckInterface, index: any) => (
              <Card 
                key={_id}
                _id={_id}
                user={user}
                title={title}
                description={description}
                body={body}
                index={index + 1}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Deck