import React from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { DeckInterface } from '../utils/interface';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { selectBlog } from '../features/blogs/selectedBlogSlice'
import image1 from '../imgs/28.svg'
import image2 from '../imgs/29.svg'


const Card: React.FC<DeckInterface> = ({_id, body, description, title, user, index}) => {
  const motionValue: any = useMotionValue(0);
  const rotateValue: any = useTransform(motionValue, [-200, 200], [-50, 50])
  const opacityValue: any = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const animControls = useAnimation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const image = index % 2 === 0? image1: image2

  const selected = () => {
    dispatch(selectBlog({
      _id,
      body,
      description,
      title,
      user,
      index
    }))

    navigate(`${_id}`)
  }

  return (
    <motion.div
      drag='x'
      style={{x: motionValue ,rotate: rotateValue, opacity: opacityValue}}
      dragConstraints={{ left: -1000, right: 1000}}
      onDragEnd={(event, info) => {
        if(Math.abs(info.point.x) <= 300) {
          animControls.start({x: 100});
        } else {
          animControls.start({x: info.point.x < 0 ? -200: 200})
        }
      }}
      className='absolute top-8 -left-2 cursor-pointer w-64 h-1'
      onClick={selected}
    >
      <div className='bg-slate-300 rounded-lg shadow-slate-800 shadow-md border-2 border-[#b6fff4]'>
        <img draggable='false' alt='' src={image} className='rounded-t-lg w-full h-48 bg-[#b6fff4]' />
        <div className=' rounded-b-lg p-5'>
          <h1>{title}</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Card