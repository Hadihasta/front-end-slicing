import React from 'react'
import { Text, Code } from '@radix-ui/themes'

const Soal_3 = () => {
  return (
    <div className="mt-10">
      <div>
        <Text
          weight="bold"
          size="4"
        >
          Pseudo-element
        </Text>

        <div>
          <Text
            size="3"
            weight="light"
          >
            Pseudo-element adalah fitur CSS untuk membuat dan men-style bagian tertentu dari elemen seolah-olah itu
            elemen baru, tanpa perlu menambah tag HTML. Ditulis dengan :: (dua titik dua).
          </Text>
        </div>

        <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
            ::before
          </Text>

          <Code color='brown'>
            <br />
            <span>
              {`p::before {
  content: "👉 ";
  color: red;
}`}
            </span>
          </Code>

          <div>{`<p>Ini teks</p>
`}</div>
          <br />
          <div>{`Hasil:`}</div>
          <br />
          <div>{` 👉 Ini teks`}</div>
        </div>



        {/* 2  */}
            <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
          ::after
          </Text>

          <Code color='yellow'>
            <br />
            <span>
              {`p::after {
  content: " ✅";
  color: green;
}`}
            </span>
          </Code>

          <div>{`<p>Belajar CSS</p>
`}</div>
          <br />
          <div>{`Hasil:`}</div>
          <br />
          <div>{` Belajar CSS ✅`}</div>
        </div>



      </div>
    </div>
  )
}

export default Soal_3
