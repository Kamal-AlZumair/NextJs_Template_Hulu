import Image from 'next/image'
import React from 'react'
import hulu from '../assest/hulu-logo.png'
import HeaderItems from './HeaderItems'
import {HomeIcon} from '@heroicons/react/24/outline'
import {BoltIcon} from '@heroicons/react/24/outline'
import {CheckBadgeIcon} from '@heroicons/react/24/outline'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {UserIcon} from '@heroicons/react/24/outline'
import {RectangleStackIcon} from '@heroicons/react/24/outline'






const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className=' flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItems title="HOME" Icon={HomeIcon}/>
        <HeaderItems title="TRENDING" Icon={BoltIcon}/>
        <HeaderItems title="VERIFIED" Icon={CheckBadgeIcon}/>
        <HeaderItems title="COLLECTION" Icon={RectangleStackIcon}/>
        <HeaderItems title="SEARCH" Icon={MagnifyingGlassIcon}/>
        <HeaderItems title="USER" Icon={UserIcon}/>
      </div>
      <Image className=' object-contain ' alt='logo' src={hulu} width={100} height={100}/>
    </header>
  )
}

export default Header
