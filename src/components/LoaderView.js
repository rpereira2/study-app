import React from 'react'
var Spinner = require('react-spinkit');

const LoaderView = ({ isLoading }) => {
        return ( 
        	< div >

            {
                <Spinner className="spinner" spinnerName='three-bounce' />
            	
                // isLoading ? < p > Loading... < /p> : ''
            } 
            < /div>
            )
        }

        export default LoaderView
