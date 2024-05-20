import React from 'react';
import Profile from '../Profile';
import { usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';
import Education from './Academic/Education';
import Work from './Academic/Work';

export default function Academic(){
    const {
        acadEduc_data,
        acadWork_data
    } = usePage().props;

    const { data: educData, setData: educData_set, post: educData_post, processing: educData_pro } = useForm({
        academic_educ: [{ 
            degree: '',
            institution: '',
            location: '',
            date: ''
        }]
    })

    const { data: workData, setData: workData_set, post: workData_post, processing: workData_pro } = useForm({
        academic_work: [{ 
            position: '',
            institution: '',
            location: '',
            date: ''
        }]
    })

    return (
        <Profile>
            {/* CONTENT  */}
            <div className="p-3 px-4 academic-content d-flex gap-5">
                {/* EDUCATION  */}
                <Education 
                    data={educData} 
                    setData={educData_set} 
                    post={educData_post} 
                    acadEduc_data={acadEduc_data}
                />

                {/* WORK EXPERIENCE  */}
                <Work 
                    data={workData} 
                    setData={workData_set} 
                    post={workData_post} 
                    acadWork_data={acadWork_data}
                />
            </div>
        </Profile>
    )
}