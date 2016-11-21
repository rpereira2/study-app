import React from 'react'

const LoaderView = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? <p>Loading...</p> : ''}
    </div>
  )
}

export default LoaderView