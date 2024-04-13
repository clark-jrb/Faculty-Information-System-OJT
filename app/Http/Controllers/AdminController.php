<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Basic_info;
use App\Models\Acad_Education;
use App\Models\Acad_WorkExp;
use App\Models\ResActivity;
use App\Models\Publication;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $this->validate($request,[
            'fname' => 'required',
            'lname' => 'required',
            'gender' => 'required',
            'birth_date' => 'required|date',
            'age' => 'required|integer',
            'department' => 'required',
            'position' => 'required',
            'role' => 'required',
            'specialization' => 'required',
            'email' => 'required',
            'contact_no' => 'required',
            'profile_pic' => 'nullable',

            'academic_educ.*.institution' => 'required',
            'academic_educ.*.degree' => 'required',
            'academic_educ.*.educ_location' => 'required',
            'academic_educ.*.educ_date' => 'required',

            'academic_work.*.work_institution' => 'required',
            'academic_work.*.work_position' => 'required',
            'academic_work.*.work_location' => 'required',
            'academic_work.*.work_date' => 'required',

            'research.*.title' => 'required',
            'research.*.status' => 'required',
            'research.*.duration' => 'required',
            'research.*.researchers' => 'required',

            'publications.*.proj_title' => 'required',
            'publications.*.proj_date' => 'required',
            'publications.*.authors' => 'required',
            'publications.*.doi' => 'required',
            'publications.*.cover_page' => 'nullable'
        ]);

        $basicInfo = Basic_info::create([
            'fname' => $request->input('fname'),
            'lname' => $request->input('lname'),
            'gender' => $request->input('gender'),
            'birth_date' => $request->input('birth_date'),
            'age' => $request->input('age'),
            'department' => $request->input('department'),
            'position' => $request->input('position'),
            'role' => $request->input('role'),
            'specialization' => $request->input('specialization'),
            'email' => $request->input('email'),
            'contact_no' => $request->input('contact_no'),
            'profile_pic' => $request->input('profile_pic')
        ]);

        foreach ($request->input('academic_educ') as $academicEducData) {
            Acad_Education::create([
                'faculty_id' => $basicInfo->id,
                'degree' => $academicEducData['degree'],
                'institution' => $academicEducData['institution'],
                'date' => $academicEducData['educ_date'],
                'location' => $academicEducData['educ_location']
            ]);
        }

        foreach ($request->input('academic_work') as $academicWorkData) {
            Acad_WorkExp::create([
                'faculty_id' => $basicInfo->id,
                'position' => $academicWorkData['work_position'],
                'location' => $academicWorkData['work_institution'],
                'date' => $academicWorkData['work_date'],
                'work_loc' => $academicWorkData['work_location']
            ]);
        }

        foreach ($request->input('research') as $researchData) {
            ResActivity::create([
                'faculty_id' => $basicInfo->id,
                'res_title' => $researchData['title'],
                'status' => $researchData['status'],
                'duration' => $researchData['duration'],
                'researcher' => $researchData['researchers']
            ]);
        }

        foreach ($request->input('publications') as $publicationData) {
            Publication::create([
                'faculty_id' => $basicInfo->id,
                'proj_title' => $publicationData['proj_title'],
                'date' => $publicationData['proj_date'],
                'doi' => $publicationData['doi'],
                'authors' => $publicationData['authors'],
                'cover' => $publicationData['cover_page']
            ]);
        }

        if ($basicInfo && $academicEducData && $academicWorkData && $researchData && $publicationData) {
            return redirect('/admin/faculties/departments');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
