import React from 'react';
import { render } from '@testing-library/react';
import ResultList from './ResultList';

function DisplayResults({results=[]}){

  return(
    <div>
        {results.map((result) => 
          <p>{result.items}</p>

        )}
    </div>      
    
  )

}

export default DisplayResults;