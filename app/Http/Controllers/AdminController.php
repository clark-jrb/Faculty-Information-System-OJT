<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Basic_info;
use App\Models\Acad_Education;
use App\Models\Acad_WorkExp;
use App\Models\ResActivity;
use App\Models\Publication;
use App\Models\Ext_Activity;
use App\Models\Document;
use Inertia\Inertia;

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
    // Agricultural Extension
    public function getAE()
    {
        $ae = Basic_info::where('department', 'like', 'Agricultural Extension')->get();
        return Inertia::render('Admin/Departments/DAE', ['ae' => $ae]);
    }
    // Agri-Management
    public function getAM()
    {
        $am = Basic_info::where('department', 'like', 'Agri-Management')->get();
        return Inertia::render('Admin/Departments/DAM', ['am' => $am]);
    }
    // Animal Science
    public function getAS()
    {
        $as = Basic_info::where('department', 'like', 'Animal Science')->get();
        return Inertia::render('Admin/Departments/DAS', ['as' => $as]);
    }
    // Crop Protection
    public function getCP()
    {
        $cp = Basic_info::where('department', 'like', 'Crop Protection')->get();
        return Inertia::render('Admin/Departments/DCP', ['cp' => $cp]);
    }
    // Crop Science
    public function getCS()
    {
        $cs = Basic_info::where('department', 'like', 'Crop Science')->get();
        return Inertia::render('Admin/Departments/DCS', ['cs' => $cs]);
    }
    // Soil Science
    public function getSS()
    {
        $ss = Basic_info::where('department', 'like', 'Soil Science')->get();
        return Inertia::render('Admin/Departments/DSS', ['ss' => $ss]);
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
            'publications.*.cover_page' => 'nullable',

            'extensions.*.ext_title' => 'required',
            'extensions.*.ext_duration' => 'required',
            'extensions.*.lead_faculty' => 'required',
            'extensions.*.members' => 'required',
            'extensions.*.sponsor' => 'required',
            'extensions.*.beneficiaries' => 'required',

            'documents.*.label' => 'nullable',
            'documents.*.file_name' => 'nullable'
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

        foreach ($request->input('extensions') as $extensionsData) {
            Ext_Activity::create([
                'faculty_id' => $basicInfo->id,
                'ext_title' => $extensionsData['ext_title'],
                'duration' => $extensionsData['ext_duration'],
                'lead' => $extensionsData['lead_faculty'],
                'member' => $extensionsData['members'],
                'sponsor' => $extensionsData['sponsor'],
                'beneficiaries' => $extensionsData['beneficiaries']
            ]);
        }

        foreach ($request->input('documents') as $documentsData) {
            Document::create([
                'faculty_id' => $basicInfo->id,
                'label' => $documentsData['label'],
                'file_name' => $documentsData['file_name']
            ]);
        }

        return redirect('/admin/faculties/departments');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $faculty_data = Basic_Info::findOrFail($id);

        // Retrieve related data for the faculty
        $acadEduc_data = Acad_Education::where('faculty_id', '=', '1')->get();
        $acadWork_data = Acad_WorkExp::where('faculty_id', '=', $id)->get();
        $research_data = ResActivity::where('faculty_id', '=', $id)->get();
        $publication_data = Publication::where('faculty_id', '=', $id)->get();
        $extention_data = Ext_Activity::where('faculty_id', '=', $id)->get();
        $document_data = Document::where('faculty_id', '=', $id)->get();

        // Pass the retrieved data to the Inertia view
        return Inertia::render('Admin/FacultyInfo', [
            'faculty_data' => $faculty_data,
            'acadEduc_data' => $acadEduc_data,
            'acadWork_data' => $acadWork_data,
            'research_data' => $research_data,
            'publication_data' => $publication_data,
            'extention_data' => $extention_data,
            'document_data' => $document_data
        ]);
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
        $faculty = Basic_Info::findOrFail($id);
        $faculty->delete();
        
        // Delete associated records
        Acad_Education::where('faculty_id', $id)->delete();
        Acad_WorkExp::where('faculty_id', $id)->delete();
        ResActivity::where('faculty_id', $id)->delete();
        Publication::where('faculty_id', $id)->delete();
        Ext_Activity::where('faculty_id', $id)->delete();
        Document::where('faculty_id', $id)->delete();

        return redirect('/admin/faculties/departments');
    }
}
