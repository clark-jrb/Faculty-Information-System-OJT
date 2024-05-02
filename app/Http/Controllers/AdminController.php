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

    public function showProfile($id)
    {
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile', [
            'faculty_data' => $faculty_data,
        ]);
    }

    public function showBasic($id)
    {
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Basic', [
            'faculty_data' => $faculty_data,
        ]);
    }

    public function showAcademic($id)
    {
        $acadEduc_data = Acad_Education::where('faculty_id', '=', $id)->get();
        $acadWork_data = Acad_WorkExp::where('faculty_id', '=', $id)->get();
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Academic', [
            'faculty_data' => $faculty_data,
            'acadEduc_data' => $acadEduc_data,
            'acadWork_data' => $acadWork_data
        ]);
    }

    public function showPublications($id)
    {
        $publication_data = Publication::where('faculty_id', '=', $id)->get();
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Publication', [
            'faculty_data' => $faculty_data,
            'publication_data' => $publication_data
        ]);
    }

    public function showResearch($id)
    {
        $research_data = ResActivity::where('faculty_id', '=', $id)->get();
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Research', [
            'faculty_data' => $faculty_data,
            'research_data' => $research_data
        ]);
    }

    public function showExtensions($id)
    {
        $extention_data = Ext_Activity::where('faculty_id', '=', $id)->get();
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Extensions', [
            'extension_data' => $extention_data,
            'faculty_data' => $faculty_data
        ]);
    }

    public function showDocuments($id)
    {
        $document_data = Document::where('faculty_id', '=', $id)->get();
        $faculty_data = Basic_Info::findOrFail($id);

        return Inertia::render('Profile/Documents', [
            'faculty_data' => $faculty_data,
            'document_data' => $document_data
        ]);
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
                'authors' => $publicationData['authors']
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

        // foreach ($request->input('documents') as $documentsData) {
        //     Document::create([
        //         'faculty_id' => $basicInfo->id,
        //         'label' => $documentsData['label'],
        //         'file_name' => $documentsData['file_name']
        //     ]);
        // }

        foreach ($request->input('documents') as $index => $documentData) {
            $document = new Document();
            $document->faculty_id = $basicInfo->id;
            $document->label = $documentData['label'];
            
            // Handle file upload
            if ($request->hasFile('documents.'.$index.'.file_name')) {
                $file = $request->file('documents.'.$index.'.file_name');
                if ($file->isValid()) {
                    $newFileName = uniqid() . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('images/faculty_images'), $newFileName);
                    $document->file_name = $newFileName;
                }
            }
        
            $document->save();
        }

        return redirect('/admin/faculties/departments');
    }

    public function addDocument(Request $request, $id)
    {
        // dd($request);
        // Validate the incoming request
        $validatedData = $request->validate([
            // 'faculty_id' => 'required',
            'label' => 'required|string|max:255',
            'file_name' => 'required|image|mimes:jpeg,png,jpg|max:100000', // Example: max file size of 10MB
        ]);

        // Assuming you want to associate the document with a faculty by its ID
        $facultyId = $id;

        // Upload the file
        $file = $request->file('file_name');
        $fileName = $file->getClientOriginalExtension();
        $newFileName = uniqid() . '.' . $fileName;
        $file->move(public_path('images/faculty_files'), $newFileName); // Store the file in the 'documents' directory

        // Create a new document record
        $document = new Document();
        $document->faculty_id = $facultyId;
        $document->label = $validatedData['label'];
        $document->file_name = $newFileName; // Or you can store the path to the file if you prefer
        $document->save();
        
        $modifiedDocuments = Document::where('faculty_id', $facultyId)->get();
        // You can return a response if needed
        // return response()->json(['message' => 'Document added successfully'], 200);
        return redirect()->back()->with(['document_data' => $modifiedDocuments]);
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

    public function showFaculties()
    {
        $faculty_data_ae = Basic_Info::where('department', 'like', 'Agricultural Extension')->get();
        $faculty_data_am = Basic_Info::where('department', 'like', 'Agri-Management')->get();
        $faculty_data_as = Basic_Info::where('department', 'like', 'Animal Science')->get();
        $faculty_data_cp = Basic_Info::where('department', 'like', 'Crop Protection')->get();
        $faculty_data_cs = Basic_Info::where('department', 'like', 'Crop Science')->get();
        $faculty_data_ss = Basic_Info::where('department', 'like', 'Soil Science')->get();

        return Inertia::render('Faculty', [
            'faculty_data_ae' => $faculty_data_ae,
            'faculty_data_am' => $faculty_data_am,
            'faculty_data_as' => $faculty_data_as,
            'faculty_data_cp' => $faculty_data_cp,
            'faculty_data_cs' => $faculty_data_cs,
            'faculty_data_ss' => $faculty_data_ss
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
        // dd('Function called', $id, $request->all());
        $basicInfo = Basic_Info::findOrFail($id);

        // Validate the request data for basic info
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
        ]);
        $basicInfo->save();
        $basicInfo->update($validatedBasic);

        return redirect('/admin/faculties/departments')->with('success', 'Basic info updated successfully.');
    }

    protected function updateProfilePicture(Request $request, $id)
    {
        // Validate the request
        $request->validate([
            'profile_pic' => 'required|image|mimes:jpeg,png,jpg|max:100000', // Adjust the max file size as needed
        ]);

        $basicInfo = Basic_Info::findOrFail($id);
    
        if ($request->hasFile('profile_pic')) {
            $file = $request->file('profile_pic');
    
            if ($file->isValid()) {
                $newFileName = uniqid() . '.' . $file->getClientOriginalExtension();

                // Delete previous profile picture if exists
                if ($basicInfo->profile_pic) {
                    $previousFilePath = public_path('images/faculty_images/') . $basicInfo->profile_pic;
                    if (file_exists($previousFilePath)) {
                        unlink($previousFilePath);
                    }
                }
    
                $file->move(public_path('images/faculty_images'), $newFileName);
    
                $basicInfo->profile_pic = $newFileName; // Updated to use the filename directly
            } else {
                return redirect('/admin/faculties/departments')->with('error', 'Invalid file.');
            }
        }
    
        $basicInfo->save(); // Moved save operation outside the if-else block

        // return redirect()->route('admin.faculty.show', ['id' => $id]);
        return redirect()->back()->with(['faculty_data' => $basicInfo]);
        // return redirect('/admin/faculty/' . $id)->with('success', 'Profile picture updated successfully.');
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
                'doi' => 'doi'
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
        // $this->updateDocuments($request, $id);

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

    public function deleteDocument($id)
    {
        $document = Document::findOrFail($id);
        $document->delete();

        $documents = Document::get();

        return redirect()->back()->with(['document_data' => $documents]);
    }
}
