import React from 'react'
import { Text } from '@radix-ui/themes'

const Soal_11 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
        color="lime"
      >
        Tailwind responsiveness
      </Text>

      <div>Tailwind Menggunakan inline css dan memiliki breakpoint prefix</div>

      <div className="bg-gray-800 text-white rounded-2xl p-6">
  <h2 className="text-lg font-semibold mb-4">Tailwind Breakpoints</h2>
  <div className="grid grid-cols-3 gap-4 text-sm">
    <div className="font-medium">Prefix</div>
    <div className="font-medium">Min width</div>
    <div className="font-medium">CSS</div>

    <div>sm</div>
    <div>40rem (640px)</div>
    <div>@media (min-width: 40rem)</div>

    <div>md</div>
    <div>48rem (768px)</div>
    <div>@media (min-width: 48rem)</div>

    <div>lg</div>
    <div>64rem (1024px)</div>
    <div>@media (min-width: 64rem)</div>

    <div>xl</div>
    <div>80rem (1280px)</div>
    <div>@media (min-width: 80rem)</div>

    <div>2xl</div>
    <div>96rem (1536px)</div>
    <div>@media (min-width: 96rem)</div>
  </div>
</div>
<br />
<div> Jadi jika ada Text yang diberikan atribut class seperti ini</div>
<br />
<pre>
   {` <div className='text-9xl sm:text-2xl md:text-4xl'>Text Here</div>`}
</pre>
<br />
<div>Maka pada defaultnya ukuran text bermula dari 9XL </div>
<div>disaat break 640 akan adjust ke 2XL</div>
<div>dan saat 768 akan adjust ke 4XL</div>
    </div>
  )
}

export default Soal_11
