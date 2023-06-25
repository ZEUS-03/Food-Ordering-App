import React, { useEffect, useState } from 'react'

const ProfileFunctionalComponent = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
  })

  return (
    <div className="text-center border border-black p-4">
      <h3 className="text-xl font-bold mb-4">Profile Component</h3>
      <h3 className="text-lg font-bold mb-2">Name: {props.name}</h3>
      <h4 className="text-lg font-medium mb-2">Count: {count}</h4>
      <button onClick={() => { setCount(count + 1) }} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Set Count</button>
    </div>
  )
}

export default ProfileFunctionalComponent;
