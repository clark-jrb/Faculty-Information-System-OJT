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
use App\Models\Trainings;
use Carbon\Carbon;
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

    // Add EDUCATION
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
                        'date' => $academicEducData['date'],
                        'location' => $academicEducData['location']
                    ]);
                }
            }
        }

        $acad_educ_data = Acad_Education::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['acadEduc_data' => $acad_educ_data]);
    }

    // Add WORK EXPERIENCE
    public function addWork(Request $request)
    {
        if ($request->filled('academic_work')) {
            foreach ($request->input('academic_work') as $academicWorkData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($academicWorkData))) {
                    Acad_WorkExp::create([
                        'faculty_id' => auth()->user()->id,
                        'position' => $academicWorkData['position'],
                        'work_loc' => $academicWorkData['institution'],
                        'date' => $academicWorkData['date'],
                        'location' => $academicWorkData['location']
                    ]);
                }
            }
        }

        $acad_work_data = Acad_WorkExp::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['acadWork_data' => $acad_work_data]);
    }

    // Add PUBLICATION
    public function addPublication(Request $request)
    {
        if ($request->filled('publications')) {
            foreach ($request->input('publications') as $publicationData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($publicationData))) {
                    Publication::create([
                        'faculty_id' => auth()->user()->id,
                        'proj_title' => $publicationData['proj_title'],
                        'authors' => $publicationData['authors'],
                        'date' => $publicationData['date'],
                        'doi' => $publicationData['doi']
                    ]);
                }
            }
        }

        $publication_data = Publication::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['publication_data' => $publication_data]);
    }

    // Add RESEARCH ACTIVITY
    public function addResearch(Request $request)
    {
        if ($request->filled('research')) {
            foreach ($request->input('research') as $researchData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($researchData))) {
                    ResActivity::create([
                        'faculty_id' => auth()->user()->id,
                        'res_title' => $researchData['title'],
                        'status' => $researchData['status'],
                        'duration' => $researchData['duration'],
                        'researcher' => $researchData['researchers']
                    ]);
                }
            }
        }

        $research_data = ResActivity::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['research_data' => $research_data]);
    }
    
    // Add EXTENSION ACTIVITY
    public function addExtension(Request $request)
    {
        if ($request->filled('extensions')) {
            foreach ($request->input('extensions') as $extensionData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($extensionData))) {
                    Ext_Activity::create([
                        'faculty_id' => auth()->user()->id,
                        'ext_title' => $extensionData['ext_title'],
                        'lead' => $extensionData['lead'],
                        'member' => $extensionData['member'],
                        'sponsor' => $extensionData['sponsor'],
                        'beneficiaries' => $extensionData['beneficiaries'],
                        'duration' => $extensionData['duration']
                    ]);
                }
            }
        }

        $extension_data = Ext_Activity::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['extension_data' => $extension_data]);
    }

    // Add TRAININGs/ SEMINARs
    public function addTraining(Request $request)
    {
        if ($request->filled('trainings')) {
            foreach ($request->input('trainings') as $trainingsData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($trainingsData))) {
                    $startDate = Carbon::parse($trainingsData['start_date'])->toDateString();
                    $endDate = Carbon::parse($trainingsData['end_date'])->toDateString();

                    Trainings::create([
                        'faculty_id' => auth()->user()->id,
                        'title' => $trainingsData['title'],
                        'role' => $trainingsData['role'],
                        'start_date' => $startDate,
                        'end_date' => $endDate,
                        'location' => $trainingsData['location']
                    ]);
                }
            }
        }

        $trainings_data = Trainings::get();

        // return Inertia::render('Profile/Basic', ['faculty_data' => $faculty_data]);
        return redirect()->back()->with(['trainings_data' => $trainings_data]);
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

    public function showTrainings()
    {
        return $this->renderProfileView('Profile/Trainings', [
            'trainings_data' => Trainings::where('faculty_id', auth()->user()->id)->get(),
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

    // Update BASIC INFORMATION
    protected function updateBasicInfo(Request $request)
    {
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

    // Update EDUCATION
    public function updateEduc(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('academic_educ')) {
            foreach ($request->input('academic_educ') as $academicEducData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($academicEducData))) {
                    // dd($academicEducData['id']);
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

    // Update WORK EXPERIENCE
    public function updateWork(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('academic_work')) {
            foreach ($request->input('academic_work') as $academicWorkData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($academicWorkData))) {
                    // dd($academicWorkData['id']);
                    if (isset($academicWorkData['id'])) {
                        $acad_educ = Acad_WorkExp::where('id', $academicWorkData['id'])->firstOrFail();
    
                        // Update the academic education data
                        $acad_educ->update([
                            'position' => $academicWorkData['position'] ?? $acad_educ->position,
                            'work_loc' => $academicWorkData['institution'] ?? $acad_educ->work_loc,
                            'date' => $academicWorkData['date'] ?? $acad_educ->date,
                            'location' => $academicWorkData['location'] ?? $acad_educ->location
                        ]);
                    }
                }
            }
        }

        $new_acad_educ = Acad_WorkExp::all();

        return redirect()->back()->with(['acadEduc_data' => $new_acad_educ]);
    }

    // Update PUBLICATION
    public function updatePub(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('publications')) {
            foreach ($request->input('publications') as $publicationData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($publicationData))) {
                    // dd($publicationData['id']);
                    if (isset($publicationData['id'])) {
                        $pub_data = Publication::where('id', $publicationData['id'])->firstOrFail();
    
                        // Update the academic education data
                        $pub_data->update([
                            'proj_title' => $publicationData['proj_title'] ?? $pub_data->proj_title,
                            'authors' => $publicationData['authors'] ?? $pub_data->authors,
                            'date' => $publicationData['date'] ?? $pub_data->date,
                            'doi' => $publicationData['doi'] ?? $pub_data->doi
                        ]);
                    }
                }
            }
        }

        $new_pub_data = Publication::all();

        return redirect()->back()->with(['publication_data' => $new_pub_data]);
    }

    // Update RESEARCH ACTIVITIES
    public function updateRes(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('research')) {
            foreach ($request->input('research') as $researchData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($researchData))) {
                    // dd($researchData['id']);
                    if (isset($researchData['id'])) {
                        $res_data = ResActivity::where('id', $researchData['id'])->firstOrFail();
    
                        // Update the academic education data
                        $res_data->update([
                            'res_title' => $researchData['title'] ?? $res_data->res_title,
                            'status' => $researchData['status'] ?? $res_data->status,
                            'duration' => $researchData['duration'] ?? $res_data->duration,
                            'researcher' => $researchData['researchers'] ?? $res_data->researcher
                        ]);
                    }
                }
            }
        }

        $new_res_data = ResActivity::all();

        return redirect()->back()->with(['research_data' => $new_res_data]);
    }

    // Update EXTENSION ACTIVITIES
    public function updateExt(Request $request)
    {
        // $acad_educ = Acad_Education::where('id', $request->id)->firstOrFail();
        if ($request->filled('extensions')) {
            foreach ($request->input('extensions') as $extensionData) {
                // Check if any of the fields in the academic education data is not null
                if (!empty(array_filter($extensionData))) {
                    // dd($extensionData['id']);
                    if (isset($extensionData['id'])) {
                        $ext_data = Ext_Activity::where('id', $extensionData['id'])->firstOrFail();
    
                        // Update the academic education data
                        $ext_data->update([
                            'ext_title' => $extensionData['ext_title'] ?? $ext_data->ext_title,
                            'lead' => $extensionData['lead'] ?? $ext_data->lead,
                            'member' => $extensionData['member'] ?? $ext_data->member,
                            'duration' => $extensionData['duration'] ?? $ext_data->duration,
                            'sponsor' => $extensionData['sponsor'] ?? $ext_data->sponsor,
                            'beneficiaries' => $extensionData['beneficiaries'] ?? $ext_data->beneficiaries
                        ]);
                    }
                }
            }
        }

        $new_ext_data = Ext_Activity::all();

        return redirect()->back()->with(['extension_data' => $new_ext_data]);
    }

    // Update PROFILE PICTURE
    protected function updateProfPic(Request $request)
    {
        // Validate the request
        $request->validate([
            'profile_pic' => 'required|image|mimes:jpeg,png,jpg|max:100000', // Adjust the max file size as needed
        ]);

        $basicInfo = Basic_Info::where('faculty_id', auth()->user()->id)->firstOrFail();
    
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
                return redirect('/profile/basic')->with('error', 'Invalid file.');
            }
        }
    
        $basicInfo->save(); // Moved save operation outside the if-else block

        // return redirect()->route('admin.faculty.show', ['id' => $id]);
        return redirect()->back()->with(['faculty_data' => $basicInfo]);
        // return redirect('/admin/faculty/' . $id)->with('success', 'Profile picture updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // Destroy EDUCATION
    public function destroyEduc($id)
    {
        //
        $acad_educ = Acad_Education::findOrFail($id);
        // dd($acad_educ);
        $acad_educ->delete();

        $new_acad_educ = Acad_Education::get();

        return redirect()->back()->with(['acadEduc_data' => $new_acad_educ]);
    }

    // Destroy WORK EXPERIENCE
    public function destroyWork($id)
    {
        //
        $acad_work = Acad_WorkExp::findOrFail($id);
        // dd($acad_work);
        $acad_work->delete();

        $new_acad_work = Acad_WorkExp::get();

        return redirect()->back()->with(['acadWork_data' => $new_acad_work]);
    }

    // Destroy PUBLICATION
    public function destroyPub($id)
    {
        //
        $pub_data = Publication::findOrFail($id);
        // dd($pub_data);
        $pub_data->delete();

        $new_pub_data = Publication::get();

        return redirect()->back()->with(['publication_data' => $new_pub_data]);
    }

    // Destroy RESEARCH ACTIVITY
    public function destroyRes($id)
    {
        //
        $res_data = ResActivity::findOrFail($id);
        // dd($res_data);
        $res_data->delete();

        $new_res_data = ResActivity::get();

        return redirect()->back()->with(['research_data' => $new_res_data]);
    }
}
