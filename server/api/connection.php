<?php
require_once 'vendor/autoload.php'; // Include Composer's autoloader

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Should match * or the origin of your frontend application
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Create a new MySQLi connection
$connection = new mysqli($_ENV['MYSQL_HOST'], $_ENV['MYSQL_USER'], $_ENV['MYSQL_PASSWORD'], $_ENV['MYSQL_DATABASE']);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Endpoint to retrieve lab data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['labs'])) {
    $result = $connection->query("SELECT * FROM labs where branch='" . $_GET['labs'] . "'");
    $labs = [];
    while ($row = $result->fetch_assoc()) {
        $labs[] = $row;
    }
    echo json_encode(['data' => $labs]);
}

// Endpoint to retrieve curriculum data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['curriculum'])) {
    if ($_GET['curriculum'] === '') {
        $result = $connection->query("SELECT * FROM curriculum");
    } else {
        $result = $connection->query("SELECT * FROM curriculum where branch='" . $_GET['curriculum'] . "'");
    }
    $curriculum = [];
    while ($row = $result->fetch_assoc()) {
        $curriculum[] = $row;
    }
    echo json_encode(['data' => $curriculum]);
}
// Endpoint to retrieve IRG data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['irg'])) {
    if ($_GET['irg'] === '') {
        $result = $connection->query("SELECT * FROM irg");
    } else {
        $result = $connection->query("SELECT * FROM irg where department='" . $_GET['irg'] . "'");
    }
    $irg = [];
    while ($row = $result->fetch_assoc()) {
        $irg[] = $row;
    }
    echo json_encode(['data' => $irg]);
}
// Endpoint to retrieve Student List data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['studentList'])) {
    if ($_GET['studentList'] === '') {
        $result = $connection->query("SELECT * FROM students_list");
    } else {
        $result = $connection->query("SELECT * FROM students_list where department='" . $_GET['studentList'] . "'");
    }
    $student_list = [];
    while ($row = $result->fetch_assoc()) {
        $student_list[] = $row;
    }
    echo json_encode(['data' => $student_list]);
}

// Endpoint to retrieve Time Table data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['timeTable'])) {
    if ($_GET['timeTable'] === '') {
        $result = $connection->query("SELECT * FROM time_table");
    } else {
        $result = $connection->query("SELECT * FROM time_table where department ='" . $_GET['timeTable'] . "'");
    }
    $timeTable = [];
    while ($row = $result->fetch_assoc()) {
        $timeTable[] = $row;
    }
    echo json_encode(['data' => $timeTable]);
}

// Endpoint to retrieve Result data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['resultAnalysis'])) {
    if ($_GET['resultAnalysis'] === '') {
        $result = $connection->query("SELECT * FROM result_analysis");
    } else {
        $result = $connection->query("SELECT * FROM result_analysis where department='" . $_GET['resultAnalysis'] . "'");
    }
    $resultAnalysis = [];
    while ($row = $result->fetch_assoc()) {
        $resultAnalysis[] = $row;
    }
    echo json_encode(['data' => $resultAnalysis]);
}

// Endpoint to retrieve Event Analysis data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['eventAnalysis'])) {
    if ($_GET['eventAnalysis'] === '') {
        $result = $connection->query("SELECT * FROM event_analysis");
    } else {
        $result = $connection->query("SELECT * FROM event_analysis where department='" . $_GET['eventAnalysis'] . "'");
    }
    $eventAnalysis = [];
    while ($row = $result->fetch_assoc()) {
        $eventAnalysis[] = $row;
    }
    echo json_encode(['data' => $eventAnalysis]);
}


// Endpoint to retrieve staff details
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['staff-details'])) {
    if ($_GET['staff-details'] != "") {
        $result = $connection->query("SELECT * FROM staff where branch='" . $_GET['staff-details'] . "'");
    }else{
        $result = $connection->query("SELECT * FROM staff");
    }
    $staffDetails = [];
    while ($row = $result->fetch_assoc()) {
        $staffDetails[] = $row;
    }
    echo json_encode(['data' => $staffDetails]);
}

// Endpoint to retrieve supporting staff details
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['supporting-staff-details'])) {
    $result = $connection->query("SELECT * FROM supporting_staff");
    $supportingStaffDetails = [];
    while ($row = $result->fetch_assoc()) {
        $supportingStaffDetails[] = $row;
    }
    echo json_encode(['data' => $supportingStaffDetails]);
}

// Endpoint to retrieve department portfolio data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['dept-portfolio'])) {
    if ($_GET['dept-portfolio'] === '') {
        $result = $connection->query("SELECT * FROM dept_portfolio");
    } else {
        $result = $connection->query("SELECT * FROM dept_portfolio where branch='" . $_GET['dept-portfolio'] . "'");
    }
    $deptPortfolio = [];
    while ($row = $result->fetch_assoc()) {
        $deptPortfolio[] = $row;
    }
    echo json_encode(['data' => $deptPortfolio]);
}

// Endpoint to retrieve Audit Report data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['auditReport'])) {
    $result = $connection->query("SELECT * FROM audit_reports");
    $auditReport = [];
    while ($row = $result->fetch_assoc()) {
        $auditReport[] = $row;
    }
    echo json_encode(['data' => $auditReport]);
}
// Endpoint to retrieve Publication data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['publications'])) {
    $result = $connection->query("SELECT * FROM publications");
    $publications = [];
    while ($row = $result->fetch_assoc()) {
        $publications[] = $row;
    }
    echo json_encode(['data' => $publications]);
}
// Endpoint to retrieve Monitoring Report data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['monitoringReport'])) {
    $result = $connection->query("SELECT * FROM monitoring_reports");
    $monitoringReport = [];
    while ($row = $result->fetch_assoc()) {
        $monitoringReport[] = $row;
    }
    echo json_encode(['data' => $monitoringReport]);
}
// Endpoint to retrieve EOA data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['eoaReports'])) {
    $result = $connection->query("SELECT * FROM eoa");
    $eoa = [];
    while ($row = $result->fetch_assoc()) {
        $eoa[] = $row;
    }
    echo json_encode(['data' => $eoa]);
}
// Endpoint to retrieve NBA Reports data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['nbaReports'])) {
    $result = $connection->query("SELECT * FROM nba_accreditation");
    $eoa = [];
    while ($row = $result->fetch_assoc()) {
        $eoa[] = $row;
    }
    echo json_encode(['data' => $eoa]);
}

// Endpoint to retrieve Digital Library data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['digital-library'])) {
    $result = $connection->query("SELECT * FROM digital_library");
    $deptPortfolio = [];
    while ($row = $result->fetch_assoc()) {
        $deptPortfolio[] = $row;
    }
    echo json_encode(['data' => $deptPortfolio]);
}
// Endpoint to retrieve Mous data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['mouReports'])) {
    if ($_GET['mouReports'] === '') {
        $result = $connection->query("SELECT * FROM mous");
    } else {
        $result = $connection->query("SELECT * FROM mous where branch='" . $_GET['mouReports'] . "'");
    }
    $deptPortfolio = [];
    while ($row = $result->fetch_assoc()) {
        $deptPortfolio[] = $row;
    }
    echo json_encode(['data' => $deptPortfolio]);
}

// Endpoint to retrieve News Letters data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['newsLetters'])) {
    if ($_GET['newsLetters'] === '') {
        $result = $connection->query("SELECT * FROM news_letters");
    } else {
        $result = $connection->query("SELECT * FROM news_letters where department ='" . $_GET['newsLetters'] . "'");
    }
    $deptPortfolio = [];
    while ($row = $result->fetch_assoc()) {
        $deptPortfolio[] = $row;
    }
    echo json_encode(['data' => $deptPortfolio]);
}



// Endpoint to retrieve GPS News data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['gps-newses'])) {
    $result = $connection->query("SELECT * FROM news_articles");
    $news = [];
    while ($row = $result->fetch_assoc()) {
        $news[] = $row;
    }
    echo json_encode(['data' => $news]);
}
// Endpoint to retrieve GPS News data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['committees'])) {
    $result = $connection->query("SELECT 
    s.session_name AS SessionName,
    c.committee_name AS CommitteeName,
    m1.member_name AS ChairmanName,
    m1.member_number AS ChairmanMobileNumber,
    JSON_ARRAYAGG(JSON_OBJECT('name', m2.member_name, 'number', m2.member_number)) AS Members

FROM 
    sessions s
JOIN 
    committees c ON s.session_id = c.session_id
JOIN 
    members m1 ON c.committee_id = m1.committee_id AND m1.is_chairman = 1
JOIN 
    members m2 ON c.committee_id = m2.committee_id AND m2.is_chairman = 0
GROUP BY 
    c.committee_id;
");
    $committees = [];
    while ($row = $result->fetch_assoc()) {
        $committees[] = $row;
    }
    echo json_encode(['data' => $committees]);
}




// Endpoint to Insert Alumni Registration data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertAlumniDetails') {
    $alumniData = json_decode(file_get_contents('php://input'), true);
    print_r($alumniData);
    $name = $alumniData['name'];
    $email = $alumniData['email'];
    $phone = $alumniData['phone'];
    $yearOfPassing = $alumniData['yearOfPassing'];
    $dateOfBirth = $alumniData['dateOfBirth'];
    $occupation = $alumniData['occupation'];
    $address = $alumniData['address'];
    $afterDiploma = $alumniData['afterDiploma'];
    $gender = $alumniData['gender'];
    // Add other staff details here...
    $stmt = $connection->prepare("INSERT INTO alumni_registration (name, email, phone, yearOfPassing, dateOfBirth, occupation, address, afterDiploma, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $name, $email, $phone, $yearOfPassing, $dateOfBirth, $occupation, $address, $afterDiploma, $gender);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Alumni data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to store alumni data']);
    }
}


// Endpoint to insert student confirmation data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertStudentAdmissionDetails') {
    // $_POST = json_decode(file_get_contents('php://input'), true);
    print_r($_POST);
    $enrollment = $_POST['enrollment'];
    $aadharNo = $_POST['aadharNo'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $admissionYear = $_POST['admissionYear'];
    $directSecondYear = $_POST['directSecondYear'];
    $gender = $_POST['gender'];
    // Add other staff details here...
    $stmt = $connection->prepare("INSERT INTO students_admission_confirmation (enrollment, aadharNo, name, email, phone, gender, admissionYear, directSecondYear) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $enrollment, $aadharNo, $name, $email, $phone, $gender, $admissionYear, $directSecondYear);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Student Admission data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to store student admission data']);
    }
}
// Endpoint to retrieve student Admission Process
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['student-admission'])) {
        $result = $connection->query("SELECT * FROM student_admissions_process");

    $admissionProcess = [];
    while ($row = $result->fetch_assoc()) {
        $admissionProcess[] = $row;
    }
    echo json_encode(['data' => $admissionProcess]);
}



//Saving faculty data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertFacultyDetails') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/images/staff-imgs/"; // Specify the directory where you want to save the image
    $uploadOk = 1;
    $imagePath = "";
    // Extracting the staff form data
    $name = $_POST['name'];
    $designation = $_POST['designation'];
    $qualification = $_POST['qualification'];
    $experience = $_POST['teachingExperience'];
    $contactNumber = $_POST['phone'];
    $department = $_POST['department'];
    $email = $_POST['email'];

    $imagePath = storeFile($targetDir . $department . '/', "staffImg");
    // Prepare the SQL statement
    $stmt = $connection->prepare("INSERT INTO staff (name, designation, qualification, experience, contact, branch, email, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $designation, $qualification, $experience, $contactNumber, $department, $email, $imagePath);

    // Execute the statement and respond accordingly
    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
    }
}

//Saving Supporting faculty data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertSupportingFacultyDetails') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/images/supporting-staff-imgs/"; // Specify the directory where you want to save the image
    $imagePath = ""; // Extracting the supporting staff form data
    $name = $_POST['name'];
    $designation = $_POST['designation'];
    $qualification = $_POST['qualification'];
    $experience = $_POST['experience'];
    $contactNumber = $_POST['phone'];
    $department = $_POST['department'];
    $email = $_POST['email'];

    $imagePath = storeFile($targetDir . $department . '/', "supporting-staffImg");
    if ($imagePath == "") {
        $imagePath = "staff-imgs/others/unavailable-faculty.jpg";
    }
    // Prepare the SQL statement
    $stmt = $connection->prepare("INSERT INTO supporting_staff (name, designation, qualification, experience, contact, branch, email, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $designation, $qualification, $experience, $contactNumber, $department, $email, $imagePath);

    // Execute the statement and respond accordingly
    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
    }
}


//Saving GPS News data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertGPSNews') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/images/gps-news/"; // Specify the directory where you want to save the image
    $imagePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $newsTitle = $_POST['newsTitle'];
    $dateOfEvent = $_POST['dateOfEvent'];

    $imagePath = storeFile($targetDir, "newsArticleImage");
    if ($imagePath == "") {
        $imagePath = "others/No-Image.png";
    }
    // Prepare the SQL statement
    $stmt = $connection->prepare("INSERT INTO news_articles (session, news_title, news_article_image, date_of_event) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $session, $newsTitle, $imagePath, $dateOfEvent);

    // Execute the statement and respond accordingly
    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
    }
}

//Saving Time Table data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertTimeTable') {
    // print_r($_POST);
    $session = $_POST['session'];
    $department = $_POST['department'];

    $EvenSem = 'Even: ' . $session;
    $OddSem = 'Odd: ' . $session;

    $oddSemFilePath = storeFile("/public/api/assets/TimeTable_PDFs/" . $department . '/', "oddSemTimeTable");
    // $evenSemFilePath = storeFile("/public/api/assets/TimeTable_PDFs/" . $department . '/', "evenSemTimeTable");
    echo $targetDir . $department . '/';
    if ($oddSemFilePath != "") {
        // Bind parameters
        // Prepare the SQL statement
        // $stmt1 = $connection->prepare("INSERT INTO time_table (session, department, path)
        // VALUES (?, ?, ?)");
        $stmt2 = $connection->prepare("INSERT INTO time_table (session, department, path)
        VALUES (?, ?, ?)");
        // $stmt1->bind_param("sss", $EvenSem, $department, $evenSemFilePath);
        $stmt2->bind_param("sss", $OddSem, $department, $oddSemFilePath);

        // Execute the statement and respond accordingly
        // if ($stmt1->execute()) {
        //     echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        // } else {
        //     echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        // }
        // Execute the statement and respond accordingly
        if ($stmt2->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }

}

//Saving Student List Form data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertStudentList') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/StudentList_PDFs/"; // Specify the directory where you want to save the image
    $FilePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];
    $semester = $_POST['semester'];

    $FilePath = storeFile($targetDir . $department . '/', "studentList");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO students_list (session, department, semester, path) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $session, $department, $semester, $FilePath);
        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }

}

//Saving News Letters data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertNewsletter') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/NewsLetters_PDFs/"; // Specify the directory where you want to save the image
    $FilePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];

    $FilePath = storeFile($targetDir . $department . '/', "newsletterPdf");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO news_letters (session, department, path) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $session, $department, $FilePath);

        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }

}

//Saving MOUs data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertMoUsDetails') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/MOUs_PDFs/"; // Specify the directory where you want to save the image
    $FilePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];
    $firmName = $_POST['firmName'];
    $validUpto = $_POST['validUpto'];

    $FilePath = storeFile($targetDir . $department . '/', "pdfFile");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO MOUs (session, department, firm_name, valid_upto, path) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $session, $department, $firmName, $validUpto, $FilePath);
        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }

}

//Saving IRG data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertIRG') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/IRG_PDFs/"; // Specify the directory where you want to save the image
    $FilePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];

    $FilePath = storeFile($targetDir . $department . '/', "irgPdf");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO irg (session, department, path) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $session, $department, $FilePath);
        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }
}


//Saving Lab data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertLab') {
    // print_r($_POST);
    $targetDir = "/public/api/assets/LAB_PDFs/"; // Specify the directory where you want to save the image
    $FilePath = ""; // Extracting the supporting staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];

    $FilePath = storeFile($targetDir . $department . '/', "LabPdf");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO labs (session, department, path) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $session, $department, $FilePath);
        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }
}



// Saving Monitoring Report data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertMonitoringReport') {
    $targetDir = "/public/api/assets/MonitoringReports_PDFs/"; // Specify the directory where you want to save the image
    $uploadOk = 1;
    $FilePath = "";
    // Extracting the staff form data
    $session = $_POST['session'];
    $FilePath = storeFile($targetDir, "reportPdf");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO monitoring_reports (session, path) VALUES (?, ?)");
        $stmt->bind_param("ss", $session, $FilePath);
        // Execute the statement and respond accordingly.

        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not Stored']);
        }
    }

}


// Saving Audit Report data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertAuditReport') {

    $targetDir = "/public/api/assets/Audit_PDFs/"; // Specify the directory where you want to save the image
    $uploadOk = 1;
    $FilePath = "";
    // Extracting the staff form data
    $session = $_POST['session'];
    $FilePath = storeFile("/public/api/assets/Audit_PDFs", "auditReportPdf");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO audit_reports (session, path) VALUES (?, ?)");
        $stmt->bind_param("ss", $session, $FilePath);
        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not Stored']);
        }
    }

}

// Saving Curriculum data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertCurriculamDetails') {

    $targetDir = "/public/api/assets/Curriculum_PDFs/"; // Specify the directory where you want to save the image
    $uploadOk = 1;
    $FilePath = "";
    // Extracting the staff form data
    $branch = $_POST['department'];
    $sem = $_POST['semester'];
    $FilePath = storeFile('/public/api/assets/Curriculum_PDFs/', "syllabusPdf");
    if ($FilePath == "") {
        $FilePath = "pdf/unavailable.pdf";
    }
    // Prepare the SQL statement
    $stmt = $connection->prepare("INSERT INTO curriculum (branch, name, path) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $branch, $sem, $FilePath);

    // Execute the statement and respond accordingly.
    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Data Not Stored']);
    }
}



// Saving Digital Library data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertDigitalLib') {

    // Extracting the staff form data
    $subjectName = $_POST['subjectName'];
    $department = $_POST['department'];
    $title = $_POST['title'];
    $authorName = $_POST['authorName'];

    $PdfFilePath = storeFile("/public/api/assets/DigitalLib_PDFs/$department/", "bookPdf");
    $ImageFilePath = storeFile("/public/api/assets/images/book-cover-images/$department/", "coverImage");
    if ($PdfFilePath != "" && $ImageFilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO digital_library (subjectName, title, branch, authorName, coverImage, path) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $subjectName, $title, $department, $authorName, $ImageFilePath, $PdfFilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not stored']);
        }
    }
}


// Saving EOA data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertEoaForm') {

    // Extracting the staff form data
    $session = $_POST['session'];


    $FilePath = storeFile("/public/api/assets/EOA_PDFs/", "pdfFile");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO eoa (session, path) VALUES (?, ?)");
        $stmt->bind_param("ss", $session, $FilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not stored']);
        }
    }
}
// Saving Nba Accreditation data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertNbaForm') {

    // Extracting the staff form data
    $session = $_POST['session'];


    $FilePath = storeFile("/public/api/assets/NBA_ACCREDITATION_PDFs/", "pdfFile");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO nba_accreditation (session, path) VALUES (?, ?)");
        $stmt->bind_param("ss", $session, $FilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not stored']);
        }
    }
}


// Saving Department Portfolio data 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertDeptPortfolio') {

    // Extracting the staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];


    $FilePath = storeFile("/public/api/assets/DeptPortfolio_PDFs/" . $department . '/', "pdfFile");
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO dept_portfolio (session, branch, path) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $session, $department, $FilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not stored']);
        }
    }
}


// Saving Event and analysis data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertEventDetails') {
    // Extracting the staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];
    $eventName = $_POST['eventName'];
    $dateOfEvent = $_POST['dateOfEvent'];
    $activityDescription = $_POST['activityDescription'];

    $FilePath = storeFile("/public/api/assets/images/event-imgs/", "eventImage");

    if ($FilePath == "") {
        $FilePath = "staff-imgs/others/unavailable-faculty.jpg";
    }

    // Prepare the SQL statement
    $stmt = $connection->prepare("INSERT INTO event_analysis (session, department, eventName, dateOfEvent, activityDescription, path) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $session, $department, $eventName, $dateOfEvent, $activityDescriptionm, $FilePath);

    // Execute the statement and respond accordingly.

    try {

        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        }
    } catch (Exception $e) {

    }
}

//saving publication data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertPublications') {
    // Extracting the staff form data
    $faculty_name = $_POST['faculty_name'];
    $department = $_POST['department'];

    $FilePath = storeFile("/public/api/assets/Publications_PDFs/", "publicationPDF");

    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO publications (faculty_name, department, path) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $faculty_name, $department, $FilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 200, 'message' => 'Data not stored']);
        }
    }


}


// Saving Result analysis data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertResultAnalysisDetails') {



    // Extracting the staff form data
    $session = $_POST['session'];
    $department = $_POST['department'];

    $oddSemResult = storeFile("/public/api/assets/ResultAnalysis_PDFs/" . $department . '/', "oddSemResult");
    $evenSemResult = storeFile("/public/api/assets/ResultAnalysis_PDFs/" . $department . '/', "evenSemResult");

    if ($oddSemResult != "" && $evenSemResult != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO result_analysis (session, department, o_path, e_path) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $session, $department, $oddSemResult, $evenSemResult);
        // Execute the statement and respond accordingly
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'staff data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Failed to store staff data']);
        }
    }
}



// Saving Commitee members data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertCommittee') {



    // Extracting the staff form data
    $session = $_POST['session'];
    $committeeName = $_POST['committeeName'];
    $chairmanName = $_POST['chairmanName'];
    $chairmanMobNo = $_POST['chairmanMobNo'];
    $memberNames = $_POST['memberNames'];
    $memberNumber = $_POST['memberNumber'];
    // print_r($memberNames);
    echo count($memberNames);
    // Prepare the SQL statements
    $stmt1 = $connection->prepare("INSERT INTO sessions (session_name) VALUES (?)");
    $stmt2 = $connection->prepare("INSERT INTO committees (committee_name, session_id) VALUES (?, ?)");
    $stmt3 = $connection->prepare("INSERT INTO members (member_name, member_number, committee_id, is_chairman) VALUES (?, ?, ?, 1)");
    $stmt4 = $connection->prepare("INSERT INTO members (member_name, member_number, committee_id, is_chairman) VALUES (?, ?, ?, 0)");
    $stmt1->bind_param("s", $session);
    $stmt1->bind_param("s", $session);
    if ($stmt1->execute()) {
        $session_id = $stmt1->insert_id;

        $stmt2->bind_param("ss", $committeeName, $session_id);
        if ($stmt2->execute()) {
            $committee_id = $stmt2->insert_id;

            $stmt3->bind_param("sss", $chairmanName, $chairmanMobNo, $committee_id);

            if ($stmt3->execute()) {
                for ($i = 0; $i < count($memberNumber); $i++) {
                    $membrName = $memberNames[$i];
                    $membrNumber = $memberNumber[$i];
                    $stmt4->bind_param("sss", $membrName, $membrNumber, $committee_id);
                    if (!$stmt4->execute()) {
                        $response['status'] = 500;
                        $response['message'] = "Error inserting member data: " . $stmt4->error;
                        break; // Exit loop if an error occurs
                    }
                }
                if (!isset($response['status'])) {
                    $response['status'] = 200;
                    $response['message'] = "Data inserted successfully.";
                }
            } else {
                $response['status'] = 500;
                $response['message'] = "Error inserting chairman data: " . $stmt3->error;
            }
        } else {
            $response['status'] = 500;
            $response['message'] = "Error inserting committee data: " . $stmt2->error;
        }
    } else {
        $response['status'] = 500;
        $response['message'] = "Error inserting session data: " . $stmt1->error;
    }

    // // Return the response as JSON
    // http_response_code($response['status']);
    // header('Content-Type: application/json');
    echo json_encode($response);
}

// Saving Admission Process data
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'insertAdmissionProcess') {

    // Extracting the staff form data
    $session = $_POST['session'];

    $FilePath = storeFile("/public/api/assets/STUDENT_CORNER_PDFs/Admission_Process/", 'admissionPdf');
    if ($FilePath != "") {
        // Prepare the SQL statement
        $stmt = $connection->prepare("INSERT INTO student_admissions_process (session, path) VALUES (?, ?)");
        $stmt->bind_param("ss", $session, $FilePath);

        // Execute the statement and respond accordingly.
        if ($stmt->execute()) {
            echo json_encode(['status' => 200, 'message' => 'Data stored successfully']);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Data Not stored']);
        }
    }
}



function storeFile($targetDir, $file)
{
    $uploadOk = 1;
    $FilePath = "";

    // Check if file already exists
    $targetFile = $_SERVER['DOCUMENT_ROOT'] . $targetDir . basename($_FILES["$file"]["name"]);
    // if (file_exists($targetFile)) {
    //     echo json_encode(['status' => 415, 'message' => 'Sorry, file already exists.']);
    //     $uploadOk = 0;
    //     // return;
    // }

    // Check file size (for example, limit to 8MB)
    if ($_FILES["$file"]["size"] > 100000000) {
        echo json_encode(['status' => 415, 'message' => 'Sorry, your file is too large.']);
        $uploadOk = 0;
        // return;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["$file"]["tmp_name"], $targetFile)) {
            echo "The file " . htmlspecialchars(basename($_FILES["$file"]["name"])) . " has been uploaded." . $targetDir;
            $FilePath = $targetDir . basename($_FILES["$file"]["name"]);
        } else {
            echo json_encode(['status' => 500, 'message' => 'Sorry, there was an error uploading your file.";' . $targetDir]);
            // return;
        }
    }
    return $FilePath;
}
// Endpoint to update staff/faculty
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateFacultyDetails') {
    $result = $connection->query("UPDATE staff 
    SET 
        name = '$_POST[name]', 
        qualification = '$_POST[qualification]',
        designation = '$_POST[designation]', 
        experience = '$_POST[experience]',
        contact = '$_POST[contact]',
        email = '$_POST[email]', 
        branch = '$_POST[branch]'
    WHERE 
        sno = '$_GET[sno]'");
    echo $_GET['sno'];
    // print_r($_POST) ;
}
//Endpoint to update Supporting Staff 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateSupportingStaff') {
    $stmt = $connection->prepare("UPDATE supporting_staff 
        SET 
            name = ?, 
            designation = ?, 
            qualification = ?, 
            experience = ?, 
            contact = ?, 
            branch = ?, 
            email = ?
            -- image = ? 
        WHERE 
            sno = ?");
    $stmt->bind_param("ssssssss", $_POST['name'], $_POST['designation'], $_POST['qualification'], $_POST['experience'], $_POST['contact'], $_POST['branch'], $_POST['email'], $_GET['sno']);
    // $stmt->bind_param("sssssssss", $_POST['name'], $_POST['designation'], $_POST['qualification'], $_POST['experience'], $_POST['contact'], $_POST['branch'], $_POST['email'], $_POST['image'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Supporting staff data updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update supporting staff data']);
    }
}

//End point to update GPS News
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateNewsArticle') {
    $stmt = $connection->prepare("UPDATE news_articles 
        SET 
            session = ?, 
            news_title = ?, 
            -- news_article_image = ?, 
            date_of_event = ? 
        WHERE 
            sno = ?");
    $stmt->bind_param("ssss", $_POST['session'], $_POST['news_title'], $_POST['date_of_event'], $_GET['sno']);
    // $stmt->bind_param("sssss", $_POST['session'], $_POST['news_title'], $_POST['news_article_image'], $_POST['date_of_event'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'News article updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update news article']);
    }
}

// End point for time table
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateTimeTable') {
    $stmt = $connection->prepare("UPDATE time_table 
        SET 
            session = ?, 
            department = ?
            -- -- path=? 
        WHERE 
            sno = ?");
    $stmt->bind_param("sss", $_POST['session'], $_POST['department'], $_GET['sno']);
    // $stmt->bind_param("ssss", $_POST['session'], $_POST['department'], $_POST['path'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Time table updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update time table']);
    }
}

// Endpoint of update student list
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateStudentsList') {
    $stmt = $connection->prepare("UPDATE students_list 
        SET 
            session = ?, 
            department = ?, 
            semester = ?
            -- -- path=? 
        WHERE 
            sno = ?");
    $stmt->bind_param("ssss", $_POST['session'], $_POST['department'], $_POST['semester'], $_GET['sno']);
    // $stmt->bind_param("sssss", $_POST['session'], $_POST['department'], $_POST['semester'], $_POST['path'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Students list updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update students list']);
    }
}
// Endpoint of update news letters
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateNewsLetter') {
    $stmt = $connection->prepare("UPDATE news_letters 
        SET 
            session = ?, 
            department = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssss", $_POST['session'], $_POST['department'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['session'], $_POST['department'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'News letter updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update news letter']);
    }
}

// Endpoint of update mous
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateMOU') {
    $stmt = $connection->prepare("UPDATE MOUs 
        SET 
            session = ?, 
            department = ?, 
            firm_name = ?, 
            valid_upto = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssssss", $_POST['session'], $_POST['department'], $_POST['firm_name'], $_POST['valid_upto'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sssss", $_POST['session'], $_POST['department'], $_POST['firm_name'], $_POST['valid_upto'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'MOU updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update MOU']);
    }
}
// Endpoint of update labs
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateLab') {
    $stmt = $connection->prepare("UPDATE labs 
        SET 
            session = ?, 
            department = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssss", $_POST['session'], $_POST['department'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['session'], $_POST['department'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Lab updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Lab']);
    }
}


// Endpoint of update monitoring report
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateMonitoringReport') {
    $stmt = $connection->prepare("UPDATE monitoring_reports 
        SET 
            session = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("sss", $_POST['session'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("ss", $_POST['session'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Monitoring report updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Monitoring report']);
    }
}
// Endpoint of update Admission Process
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateAdmissionProccess') {
    $stmt = $connection->prepare("UPDATE student_admissions_process 
        SET 
            session = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("sss", $_POST['session'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("ss", $_POST['session'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Admission Process Data updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Admission Process']);
    }
}

// Endpoint of update Audit report
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateAuditReport') {
    $stmt = $connection->prepare("UPDATE audit_reports 
        SET 
            session = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("sss", $_POST['session'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("ss", $_POST['session'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Audit report updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Audit report']);
    }
}

// endpoint to update curriculum
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateCurriculum') {
    $stmt = $connection->prepare("UPDATE curriculum 
        SET 
            branch = ?, 
            name = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssss", $_POST['branch'], $_POST['name'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['branch'], $_POST['name'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Curriculum updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Curriculum']);
    }
}

// enpoint to update digital library
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateDigitalLibrary') {
    $stmt = $connection->prepare("UPDATE digital_library 
        SET 
            subjectName = ?, 
            title = ?, 
            branch = ?, 
            authorName = ?, 
            -- coverImage = ? 
            -- path=? 
        WHERE 
            sno = ?");
    $stmt->bind_param("sssss", $_POST['subject_name'], $_POST['title'], $_POST['branch'], $_POST['author_name'], $_GET['sno']);
    // $stmt->bind_param("sssssss", $_POST['subject_name'], $_POST['title'], $_POST['branch'], $_POST['author_name'], $_POST['cover_image'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Digital library updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Digital library']);
    }
}


// endpoint ot update eoas
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateNBA') {
    $stmt = $connection->prepare("UPDATE nba_accreditation 
        SET 
            session = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("sss", $_POST['session'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("ss", $_POST['session'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'NBA updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update NBA']);
    }
}


// endpoin to update department portfolio
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateDeptPortfolio') {
    $stmt = $connection->prepare("UPDATE dept_portfolio 
        SET 
            name = ?, 
            branch = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssss", $_POST['name'], $_POST['branch'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['name'], $_POST['branch'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Department portfolio updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Department portfolio']);
    }
}

// endpoint to update Result analysis
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateResultAnalysis') {
    $stmt = $connection->prepare("UPDATE result_analysis 
        SET 
            session = ?, 
            department = ?, 
            -- o_path = ?,
            -- e_path = ?
        WHERE 
            sno = ?");
    // $stmt->bind_param("sssss", $_POST['session'], $_POST['department'], $_POST['odd_sem_result'], $_POST['odd_sem_result'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['session'], $_POST['department'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Result analysis updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Result analysis']);
    }
}
// endpoint to update Publications
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updatePublications') {
    $stmt = $connection->prepare("UPDATE publications 
        SET 
        
            faculty_name = ?, 
            department = ?
            -- path = ?,
            -- e_path = ?
        WHERE 
            sno = ?");
    // $stmt->bind_param("sssss", $_POST['session'], $_POST['department'], $_POST['odd_sem_result'], $_POST['odd_sem_result'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['faculty_name'], $_POST['department'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Result analysis updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Result analysis']);
    }
}


//endpoint to update members
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateMember') {
    $stmt = $connection->prepare("UPDATE members 
        SET 
            member_name = ?, 
            member_number = ?, 
            -- committee_id = ?, 
            -- is_chairman = ? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssiis", $_POST['member_name'], $_POST['member_number'], $_POST['committee_id'], $_POST['is_chairman'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['member_name'], $_POST['member_number'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'Member updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update Member']);
    }
}


//endpoint update irg
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['action']) && $_GET['action'] === 'updateIrg') {
    $stmt = $connection->prepare("UPDATE irg 
        SET 
            session = ?, 
            department = ? 
            -- path=? 
        WHERE 
            sno = ?");
    // $stmt->bind_param("ssss", $_POST['session'], $_POST['department'], $_POST['path'], $_GET['sno']);
    $stmt->bind_param("sss", $_POST['session'], $_POST['department'], $_GET['sno']);

    if ($stmt->execute()) {
        echo json_encode(['status' => 200, 'message' => 'IRG updated successfully']);
    } else {
        echo json_encode(['status' => 500, 'message' => 'Failed to update IRG']);
    }
}




// Delete Staff from database 
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteFacultyDetails') {
    $result = $connection->query("DELETE FROM staff WHERE sno = " . $_GET['sno']);

    echo $_GET['sno'];
}

// Delete Labs from database 

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteLab') {
    $result = $connection->query("DELETE FROM labs WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from curriculum table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteCurriculum') {
    $result = $connection->query("DELETE FROM curriculum WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from irg table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteIrg') {
    $result = $connection->query("DELETE FROM irg WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from students_list table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteStudentList') {
    $result = $connection->query("DELETE FROM students_list WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from time_table table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteTimeTable') {
    $result = $connection->query("DELETE FROM time_table WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from result_analysis table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteResultAnalysis') {
    $result = $connection->query("DELETE FROM result_analysis WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}
// Endpoint to delete data from publication_analysis table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deletePublications') {
    $result = $connection->query("DELETE FROM publications WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}


// Endpoint to delete data from event_analysis table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteEventAnalysis') {
    $result = $connection->query("DELETE FROM event_analysis WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}


// Endpoint to delete data from supporting_staff table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteSupportingStaff') {
    $result = $connection->query("DELETE FROM supporting_staff WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from dept_portfolio table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteDeptPortfolio') {
    $result = $connection->query("DELETE FROM dept_portfolio WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from audit_reports table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteAuditReport') {
    $result = $connection->query("DELETE FROM audit_reports WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from monitoring_reports table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteMonitoringReport') {
    $result = $connection->query("DELETE FROM monitoring_reports WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}
// Endpoint to delete data from monitoring_reports table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteAdmissionProccess') {
    $result = $connection->query("DELETE FROM student_admissions_process WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from eoa table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteEoa') {
    $result = $connection->query("DELETE FROM eoa WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}
// Endpoint to delete data from eoa table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteNba') {
    $result = $connection->query("DELETE FROM nba_accreditation WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from digital_library table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteDigitalLibrary') {
    $result = $connection->query("DELETE FROM digital_library WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from mous table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteMous') {
    $result = $connection->query("DELETE FROM mous WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}

// Endpoint to delete data from mous table
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'deleteGPSNews') {
    $result = $connection->query("DELETE FROM news_articles WHERE sno = " . $_GET['sno']);
    echo $_GET['sno'];
}


// Retrieving Admin data
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['username'])) {
    $sql = "SELECT username, password FROM admin WHERE username = ? AND password = ?";

    // Bind parameters and execute the statement
    if ($stmt = $connection->prepare($sql)) {
        // Bind variables to the prepared statement as parameters
        $stmt->bind_param("ss", $_GET['username'], $_GET['password']);
        // Execute the statement
        $stmt->execute();

        // Bind result variables
        $stmt->bind_result($username, $password);

        // Fetch the result
        $stmt->fetch();

        // Check if a row was found
        if ($username !== null && $password !== null) {
            // Admin with provided username and password exists
            // Perform further actions here
            echo "ok";
        } else {
            // Admin not found or invalid credentials
            // Handle error or authentication failure
            echo "Admin not found or invalid credentials";
        }

        // Close statement
        $stmt->close();
    } else {
        // Error in preparing the statement
        // Handle the error
        echo "Error: " . $mysqli->error();
    }
}
// Close MySQLi connection
$connection->close();
?>