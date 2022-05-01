import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const Header = () => {
  return (
    <div className='bg-transparent flex p-5 justify-between items-center'>
      <div>
        <Link to='/'>
          <p className='text-xl sm:text-2xl underline font-serif text-[#b6fff4] font-bold uppercase'>Saadatu_blog</p>
        </Link>
      </div>
      <div>
        <IconButton>
          <FacebookIcon sx={{color: '#b6fff4', fontSize: 30}} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{color: '#b6fff4', fontSize: 30}} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{color: '#b6fff4', fontSize: 30}} />
        </IconButton>
      </div>
    </div>
  )
}

export default Header;