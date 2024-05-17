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

class FacultyController extends Controller
{
    protected function validateRequest(Request $request)
    {
        return $this->validate($request, [
            // Validation rules here
            'fname' => 'required',
            'lname' => 'required',
            'gender' => 'required',
            'birth_date' => 'required|date',
            'age' => 'required',
            'department' => 'required',
            'position' => 'required',
            'high_degree' => 'required',
            'role' => 'required',
            'specialization' => 'required',
            'email' => 'required',
            'contact_no' => 'required',
            'profile_pic' => 'nullable|file|image|mimes:jpg,jpeg,png|max:10000',

            'academic_educ.*.institution' => 'nullable',
            'academic_educ.*.degree' => 'nullable',
            'academic_educ.*.educ_location' => 'nullable',
            'academic_educ.*.educ_date' => 'nullable',

            'academic_work.*.work_institution' => 'nullable',
            'academic_work.*.work_position' => 'nullable',
            'academic_work.*.work_location' => 'nullable',
            'academic_work.*.work_date' => 'nullable',

            'research.*.title' => 'nullable',
            'research.*.status' => 'nullable',
            'research.*.duration' => 'nullable',
            'research.*.researchers' => 'nullable',

            'publications.*.proj_title' => 'nullable',
            'publications.*.proj_date' => 'nullable',
            'publications.*.authors' => 'nullable',
            'publications.*.doi' => 'nullable',

            'extensions.*.ext_title' => 'nullable',
            'extensions.*.ext_duration' => 'nullable',
            'extensions.*.lead_faculty' => 'nullable',
            'extensions.*.members' => 'nullable',
            'extensions.*.sponsor' => 'nullable',
            'extensions.*.beneficiaries' => 'nullable',

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
        //
    }

    public function addEduc(Request $request)
    {
        if ($request->filled('academic_educ')) {
            foreach ($request->input('academic_educ') as $academicEducData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($academicEducData))) {
                    Acad_Education::create([
                        'faculty_id' => auth()->user()->id,
                        'degree' => $academicEducData['degree'],
                        'institution' => $academicEducData['institution'],
                        'date' => $academicEducData['educ_date'],
                        'location' => $academicEducData['educ_location']
                    ]);
                }
            }
        }

        $acad_educ_data = Acad_Education::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['acadEduc_data' => $acad_educ_data]);
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

    public function showProfile()
    {
        return $this->renderProfileView('Profile');
    }

    public function showBasic()
    {
        return $this->renderProfileView('Profile/Basic');
    }

    public function showAcademic()
    {
        return $this->renderProfileView('Profile/Academic', [
            'acadEduc_data' => Acad_Education::where('faculty_id', auth()->user()->id)->get(),
            'acadWork_data' => Acad_WorkExp::where('faculty_id', auth()->user()->id)->get(),
        ]);
    }

    public function showPublications()
    {
        return $this->renderProfileView('Profile/Publication', [
            'publication_data' => Publication::where('faculty_id', auth()->user()->id)->get(),
        ]);
    }

    public function showResearch()
    {
        return $this->renderProfileView('Profile/Research', [
            'research_data' => ResActivity::where('faculty_id', auth()->user()->id)->get(),
        ]);
    }

    public function showExtensions()
    {
        return $this->renderProfileView('Profile/Extensions', [
            'extension_data' => Ext_Activity::where('faculty_id', auth()->user()->id)->get(),
        ]);
    }

    public function showDocuments()
    {
        return $this->renderProfileView('Profile/Documents', [
            'document_data' => Document::where('faculty_id', auth()->user()->id)->get(),
        ]);
    }

    private function renderProfileView($view, $data = [])
    {
        $faculty_data = Basic_Info::where('faculty_id', auth()->user()->id)->firstOrFail();
        return Inertia::render($view, array_merge(['faculty_data' => $faculty_data], $data));
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

    protected function updateBasicInfo(Request $request)
    {
        // dd('Function called', $id, $request->all());
        // $basicInfo = Basic_Info::findOrFail($id);
        $basicInfo = Basic_Info::where('faculty_id', auth()->user()->id)->firstOrFail();

        // Validate the request data for basic info
        $validatedBasic = $request->only([
            'fname', 
            'mname',
            'lname', 
            'gender', 
            'birth_date', 
            'age', 
            'department', 
            'position', 
            'high_degree', 
            'role', 
            'specialization', 
            'email', 
            'contact_no'
        ]);
        $basicInfo->save();
        $basicInfo->update($validatedBasic);

        $faculty_data = Basic_Info::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['faculty_data' => $faculty_data]);

    }

    public function updateEduc(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('academic_educ')) {
            foreach ($request->input('academic_educ') as $academicEducData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($academicEducData))) {
                    if (isset($academicEducData['id'])) {
                        $acad_educ = Acad_Education::where('id', $academicEducData['id'])->firstOrFail();
    
                        // Update the academic education data
                        $acad_educ->update([
                            'degree' => $academicEducData['degree'] ?? $acad_educ->degree,
                            'institution' => $academicEducData['institution'] ?? $acad_educ->institution,
                            'date' => $academicEducData['date'] ?? $acad_educ->date,
                            'location' => $academicEducData['location'] ?? $acad_educ->location
                        ]);
                    }
                }
            }
        }

        $new_acad_educ = Acad_Education::all();

        return redirect()->back()->with(['acadEduc_data' => $new_acad_educ]);
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
