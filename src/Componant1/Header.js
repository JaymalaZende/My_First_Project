import React from 'react';

function Header() {
    
  return (
    <div className='m-2  h-screen'>
    <h1 className='text-7xl text-black'bg-slate-950> Header is important</h1>

<a href='/' className='text-5px text-black'>Logo</a>
<div className="mt-4 flex space-x-50 sm:mt-0 sm:justify-center object-right-bottom">
   <a href='https://www.facebook.com/' target='_blank'>
<img className='h-20 inset-x-3 object-right-bottom shadow-xl' src='https://cdn.pixabay.com/photo/2017/12/06/04/56/facebook-3000954_640.png' alt=''></img>
</a>

<a href='https://www.twitter.com/' target='_blank'>
<img className='justify-center h-10 ,object-right-top block shadow' src='https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png' alt=''></img>
</a>
</div>

    </div>
  )
}

export default Header 