import React from 'react';
import media from './mediadata'


const media = () => {
  return (
    <React.Fragment>
        <main>
            <div className='h-screen'>
               {
                media.map((item, index) =>{
                  <div key={index}>
                    
                                 </div>
                  }
                
                )
               }
            </div>
        </main>
    </React.Fragment>
  )
}

export default media