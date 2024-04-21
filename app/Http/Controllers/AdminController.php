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
    protected function validateRequest(Request $request)
    {
        return $this->validate($request, [
            // Validation rules here
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
            'profile_pic' => 'nullable|file|image|mimes:jpg,jpeg,png|max:10000',

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
    }
    
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
        $validatedData = $this->validateRequest($request);

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
            // 'profile_pic' => ''
        ]);

        if ($request->hasFile('profile_pic')) {
            $file = $request->file('profile_pic');

            if ($file->isValid()) {
                $newFileName = uniqid() . '.' . $file->getClientOriginalExtension();

                $file->move(public_path('images/faculty_images'), $newFileName);

                $filePath = $newFileName;

                $basicInfo->profile_pic = $filePath;
                $basicInfo->save();
            } else {
                return redirect('/admin/faculties/departments');
            }
        }

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
        $acadEduc_data = Acad_Education::where('faculty_id', '=', $id)->get();
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

    protected function updateRecords($data, $id, $model, $fieldMappings)
    {
        $updatedIds = [];

        foreach ($data as $item) {
            $recordData = ['faculty_id' => $id];

            foreach ($fieldMappings as $dbField => $requestDataKey) {
                $recordData[$dbField] = $item[$requestDataKey];
            }

            if (isset($item['id']) && $item['id']) {
                $model::whereId($item['id'])->update($recordData);
                $updatedIds[] = $item['id'];
            } else {
                $createdRecord = $model::create($recordData);
                $updatedIds[] = $createdRecord->id;
            }
        }

        // Delete records not present in the updated request
        $model::where('faculty_id', $id)->whereNotIn('id', $updatedIds)->delete();
    }

    protected function updateBasicInfo(Request $request, $id)
    {
        // $basicInfo = Basic_Info::findOrFail($id);

        $validatedBasic = $request->only([
            'fname', 
            'lname', 
            'gender', 
            'birth_date', 
            'age', 
            'department', 
            'position', 
            'role', 
            'specialization', 
            'email', 
            'contact_no'
            // 'profile_pic'
        ]);

        Basic_Info::whereId($id)->update($validatedBasic);

    }

    protected function updateAcademicEducation(Request $request, $id)
    {
        if ($request->has('academic_educ')) {
            $this->updateRecords($request->academic_educ, $id, Acad_Education::class, [
                'degree' => 'degree',
                'institution' => 'institution',
                'location' => 'educ_location',
                'date' => 'educ_date',
            ]);
        } else {
            Acad_Education::where('faculty_id', $id)->delete();
        }
    }

    protected function updateAcademicWork(Request $request, $id)
    {
        if ($request->has('academic_work')) {
            $this->updateRecords($request->academic_work, $id, Acad_WorkExp::class, [
                'position' => 'work_position',
                'location' => 'work_institution',
                'work_loc' => 'work_location',
                'date' => 'work_date',
            ]);
        } else {
            Acad_WorkExp::where('faculty_id', $id)->delete();
        }
    }

    protected function updateResearch(Request $request, $id)
    {
        if ($request->has('research')) {
            $this->updateRecords($request->research, $id, ResActivity::class, [
                'res_title' => 'title',
                'status' => 'status',
                'duration' => 'duration',
                'researcher' => 'researchers',
            ]);
        } else {
            ResActivity::where('faculty_id', $id)->delete();
        }
    }

    protected function updatePublications(Request $request, $id)
    {
        if ($request->has('publications')) {
            $this->updateRecords($request->publications, $id, Publication::class, [
                'proj_title' => 'proj_title',
                'date' => 'proj_date',
                'authors' => 'authors',
                'doi' => 'doi',
                'cover' => 'cover_page'
            ]);
        } else {
            Publication::where('faculty_id', $id)->delete();
        }
    }

    protected function updateExtensions(Request $request, $id)
    {
        if ($request->has('extensions')) {
            $this->updateRecords($request->extensions, $id, Ext_Activity::class, [
                'ext_title' => 'ext_title',
                'duration' => 'ext_duration',
                'lead' => 'lead_faculty',
                'member' => 'members',
                'sponsor' => 'sponsor',
                'beneficiaries' => 'beneficiaries'
            ]);
        } else {
            Ext_Activity::where('faculty_id', $id)->delete();
        }
    }

    protected function updateDocuments(Request $request, $id)
    {
        if ($request->has('documents')) {
            $this->updateRecords($request->documents, $id, Document::class, [
                'label' => 'label',
                'file_name' => 'file_name'
            ]);
        } else {
            Document::where('faculty_id', $id)->delete();
        }
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
        $this->validateRequest($request);

        $this->updateBasicInfo($request, $id);
        $this->updateAcademicEducation($request, $id);
        $this->updateAcademicWork($request, $id);
        $this->updateResearch($request, $id);
        $this->updatePublications($request, $id);
        $this->updateExtensions($request, $id);
        $this->updateDocuments($request, $id);

        return redirect('/admin/faculties/departments');
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
