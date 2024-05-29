import React from 'react';
import '../../../../public/css/print.css'

const PageSpec = React.forwardRef(({ data }, ref) => (
    
    <div className='print-page-paper p-4' ref={ref}>
        <div className='print-header mb-3'>
            <h1>Background Education</h1>
        </div>


        <div>
            {/* Agricultural Extension Table  */}
            Background Education data here
        </div>
        
    </div>
));

export default PageSpec;