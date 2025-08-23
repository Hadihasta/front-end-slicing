import Image from 'next/image'
import { Text } from '@radix-ui/themes'
import Soal_1 from './component/Soal_1'
import Soal_2 from './component/Soal_2'
import Soal_3 from './component/Soal_3'
import Soal_4 from './component/Soal_4'
import Soal_5 from './component/Soal_5'
import Soal_6 from './component/Soal_6'
import Soal_7 from './component/Soal_7'
import Soal_8 from './component/Soal_8'
import Soal_9 from './component/Soal_9'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-center h-10 ">
        <Text
          weight="medium"
          size="6"
        >
          Front End Slicing
        </Text>
      </div>

      <div
        id="content"
        className="flex flex-col"
      >
        <Soal_1 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_2 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_3 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_4 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_5 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_6 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_7 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_8 />
        <div className="h-px w-full  mt-3 bg-white"></div>
        <Soal_9 />
      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
