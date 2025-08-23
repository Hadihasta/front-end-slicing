import React from 'react'
import { Text, Code } from '@radix-ui/themes'

const Soal_2 = () => {
  return (
    <div className="mt-10">
      <div>
        <Text
          weight="bold"
          size="4"
        >
          CSS Combinator
        </Text>
        <div>
          <Text
            size="3"
            weight="light"
          >
            Combinator dipakai di CSS untuk menghubungkan selector (lebih dari satu elemen) agar bisa menargetkan elemen
            secara lebih spesifik.
          </Text>
        </div>

        <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
            Descendant Combinator (Kombinator Keturunan)
          </Text>

          <Code>
            <br />
            <span>
              {`div p {
  color: red;
}`}
            </span>
          </Code>

          <div>{`Semua <p> di dalam <div> akan merah.`}</div>
        </div>

        {/* 2 */}

        <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
            {`Child Combinator (>)`}
          </Text>

          <Code>
            <br />
            <span>
              {`div > p {
  color: blue;

}`}
            </span>
          </Code>

          <div>{`Hanya <p> yang langsung anak dari <div> yang biru.`}</div>
        </div>

        {/* 3 */}

        <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
            {`Adjacent Sibling Combinator (+)`}
          </Text>

          <Code>
            <br />
            <span>
              {`h1 + p {
  color: green;
}`}
            </span>
          </Code>

          <div>{`Hanya <p> yang tepat di bawah h1 yang hijau.`}</div>
        </div>

        {/* 4 */}

         <div className="mt-10">
          <Text
            size="3"
            weight="bold"
          >
            {`Adjacent Sibling Combinator (+)`}
          </Text>

          <Code>
            <br />
            <span>
              {`h1 ~ p {
  color: orange;
}`}
            </span>
          </Code>

          <div>{`Semua <p> setelah <h1> akan oranye.`}</div>
        </div>
      </div>
    </div>
  )
}

export default Soal_2
