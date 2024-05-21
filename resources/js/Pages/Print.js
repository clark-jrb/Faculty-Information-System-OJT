import React from 'react';

const Print = React.forwardRef((props, ref) => (
    <div className='print-page-paper' ref={ref}>
        <h1>Printable Content</h1>
        <p>This content will be printed.</p>
    </div>
));

export default Print;