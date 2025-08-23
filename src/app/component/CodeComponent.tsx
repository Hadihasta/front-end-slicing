import React from 'react'
import { Code } from '@radix-ui/themes'

const CodeComponent = () => {
  return (
    <div>
      <Code
        color="gray"
        wrap="pretty"
        className="m-10 flex flex-col font-mono text-sm"
      >
        {/* Head Section */}
        <span className="text-blue-500">{`<head>`}</span>

        <span className="ml-4 text-blue-500">{`<title>`}</span>
        <span className="text-green-400">{`Contoh Kasus Spesifik CSS`}</span>
        <span className="text-blue-500">{`</title>`}</span>

        <br />

        <span className="ml-4 text-blue-500">{`<style type="text/css">`}</span>

        {/* CSS rules */}
        <span className="ml-8 text-purple-400">{`p {`}</span>
        <span className="ml-12">
          <span className="text-teal-400">{`color:`}</span>
          <span className="text-red-400">{` red;`}</span>
        </span>
        <span className="ml-8">{`}`}</span>

        <span className="ml-8 text-purple-400">{`div p {`}</span>
        <span className="ml-12">
          <span className="text-teal-400">{`color:`}</span>
          <span className="text-green-400">{` green;`}</span>
        </span>
        <span className="ml-8">{`}`}</span>

        <span className="ml-8 text-purple-400">{`#aaa {`}</span>
        <span className="ml-12">
          <span className="text-teal-400">{`color:`}</span>
          <span className="text-orange-400">{` orange;`}</span>
        </span>
        <span className="ml-8">{`}`}</span>

        <span className="ml-8 text-purple-400">{`body div p {`}</span>
        <span className="ml-12">
          <span className="text-teal-400">{`color:`}</span>
          <span className="text-yellow-400">{` yellow;`}</span>
        </span>
        <span className="ml-8">{`}`}</span>

        <span className="ml-8 text-purple-400">{`div p.kalimat {`}</span>
        <span className="ml-12">
          <span className="text-teal-400">{`color:`}</span>
          <span className="text-gray-200">{` silver;`}</span>
        </span>
        <span className="ml-8">{`}`}</span>

        <span className="ml-4 text-blue-500">{`</style>`}</span>
        <span className="text-blue-500">{`</head>`}</span>

        <br />

        {/* Body Section */}
        <span className="text-blue-500">{`<body>`}</span>
        <span className="ml-4 text-blue-500">{`<div>`}</span>
        <span className="ml-8 text-blue-500">{`<p id= "aaa" >`}</span>
     
        <span className="text-blue-500">{``}</span>
        <span className="text-orange-500">{`Sedang Slicing`}</span>
        <span className="text-blue-500">{`</p>`}</span>
        <span className="ml-4 text-blue-500">{`</div>`}</span>
        <span className="text-blue-500">{`</body>`}</span>
      </Code>
    </div>
  )
}

export default CodeComponent
