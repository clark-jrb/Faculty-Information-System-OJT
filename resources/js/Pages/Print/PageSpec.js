import React from 'react';
import '../../../../public/css/print.css'

const PageSpec = React.forwardRef(({ data, specify }, ref) => (
    
    <div className='print-page-paper p-4' ref={ref}>
        <div className='print-header mb-3'>
            {specify === 'education' && (
                <h1>Background Education</h1>
            )}
            {specify === 'work' && (
                <h1>Work Experience</h1>
            )}
            {specify === 'research' && (
                <h1>Research Activities</h1>
            )}
            {specify === 'publications' && (
                <h1>Publications</h1>
            )}
            {specify === 'trainings' && (
                <h1>Relevant Training, Symposia, Seminar Attended/ Completed</h1>
            )}
        </div>


        <div>
            {/* Background Education  */}
            {specify === 'education' && (
                <p>Background Education data here</p>
            )}
            {/* Work Experience */}
            {specify === 'work' && (
                <p>Work Experience data here</p>
            )}
            {/* Research Activities  */}
            {specify === 'research' && (
                <p>Research Activities data here</p>
            )}
            {/* Publications  */}
            {specify === 'publications' && (
                <p>Publications data here</p>
            )}
            {/* Trainings/ Seminars  */}
            {specify === 'trainings' && (
                <p>Trainings/ Seminars data here</p>
            )}
        </div>
        
    </div>
));

export default PageSpec;