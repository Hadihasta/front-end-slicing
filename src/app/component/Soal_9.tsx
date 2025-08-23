import React from 'react'
import { Text, Code } from '@radix-ui/themes'

const Soal_9 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
        color="indigo"
      >
        Pengaturan Tampilan Website di device yang berbeda
      </Text>

      <div>
        <span> Untuk mengature responsive pada layar yang berbeda beda biasanya menggunakan <span className='text-purple-400'>@media query </span> 
        yang dapat di atur dengan skala resolusi layarnya </span>
      </div>
      
    </div>
  )
}

export default Soal_9
