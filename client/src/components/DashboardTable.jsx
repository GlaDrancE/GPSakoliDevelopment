import React, { useState, useEffect } from "react";

export default function StaffTable({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) {
  useEffect(() => {
    fetched_data("staff-details");
  });
  return (
    <>
      {fetchedData && (
        <>
          <div className="overflow-x-auto w-full">
            <h1 className="sub-heading">Faculty Staffs</h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map((e) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                    >
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fetchedData.map((data, index) => (
                  <tr key={index} id={"data-" + data.sno}>
                    <td className="px-2 py-1 whitespace-nowrap">
                      <img
                        src={`https://gpsakoli.ac.in` + data.image}
                        alt={data.name}
                        className="h-25 m-auto w-25"
                      />
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">{data.name}</td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.designation}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.qualification}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.teachingExperience} Years
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.contact}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.branch}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.email}
                    </td>

                    <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                      <button
                        className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                        onClick={() =>
                          onEdit("updateFacultyDetails", "data-" + data.sno)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() =>
                          onDelete("deleteFacultyDetails", data.sno)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
export function SupportingStaffTable({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) {
  useEffect(() => {
    fetched_data("supporting-staff-details");
  });
  return (
    <>
      {fetchedData && (
        <>
          <div className="overflow-x-auto w-full">
            <h1 className="sub-heading">Supporting Faculty Staffs</h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map((e) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                    >
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fetchedData.map((data, index) => (
                  <tr key={index} id={"data-" + data.sno}>
                    <td className="px-2 py-1 whitespace-nowrap">
                      <img
                        src={`https://gpsakoli.ac.in/` + data.image}
                        alt={data.name}
                        className="h-25 m-auto w-25"
                      />
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">{data.name}</td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.designation}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.qualification}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.teachingExperience} Years
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.contact}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.branch}
                    </td>
                    <td className="px-2 py-1 whitespace-nowrap">
                      {data.email}
                    </td>

                    <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                      <button
                        className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                        onClick={() =>
                          onEdit("updateSupportingStaff", "data-" + data.sno)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() =>
                          onDelete("deleteSupportingStaff", data.sno)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export const AuditReportTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("auditReport");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Audit Reports</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    PDF
                  </a>
                </td>

                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateAuditReport", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteAuditReport", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const MonitoringReportTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("monitoringReport");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Monitoring Reports</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    PDF
                  </a>
                </td>

                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateMonitoringReport", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteMonitoringReport", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const AdmissionProcessTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("student-admission");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Admission Process</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    {data.path}
                  </a>
                </td>

                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateAdmissionProccess", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() =>
                      onDelete("deleteAdmissionProccess", data.sno)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const EoATable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("eoaReports");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">EOA (Extension Of Approval) Reports</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    PDF
                  </a>
                </td>

                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateEoa", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteEoa", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const PublicationTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("publications");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Faculty Publications</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.faculty_name}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    PDF
                  </a>
                </td>

                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateEoa", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteEoa", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export const NewsesTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("gps-newses");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">GPS In News</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.news_title}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <img
                    src={`https://gpsakoli.ac.in/` + data.news_article_image}
                    className="h-25 m-auto w-25"
                    style={{ width: "100px" }}
                  />
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.date_of_event}
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateGPSNews", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteGPSNews", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const DigitalLibTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("digital-library");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Digital Library</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.subjectName}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">{data.branch}</td>
                <td className="px-2 py-1 whitespace-nowrap">{data.title}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.authorName}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in/" + data.authorName}
                    target="_blank"
                  >
                    Book
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <img
                    src={`https://gpsakoli.ac.in/` + data.coverImage}
                    className="h-25 m-auto w-25"
                    style={{ width: "100px" }}
                  />
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateDigitalLibrary", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteDigitalLibrary", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const ResultAnalysisTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("resultAnalysis");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Result Analysis</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in/" + data.o_path}
                    target="_blank"
                  >
                    Odd Result Analysis
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in/" + data.e_path}
                    target="_blank"
                  >
                    Even Result Analysis
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateResultAnalysis", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteResultAnalysis", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const EventAnalysisTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("eventAnalysis");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Event Analysis</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in/" + data.o_path}
                    target="_blank"
                  >
                    Odd Result Analysis
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in/" + data.e_path}
                    target="_blank"
                  >
                    Even Result Analysis
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateEventAnalysis", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteEventAnalysis", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const MOUsTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("mouReports");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">MOUs Report</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.firm_name}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.valid_upto}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    MOU PDF
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateMous", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteMous", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const CurriculumTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("curriculum");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Curriculum</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.branch}</td>
                <td className="px-2 py-1 whitespace-nowrap">{data.name}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    Curriculum
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateCurriculum", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteCurriculum", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const TimeTableTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("timeTable");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Time Table</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.o_path}
                    target="_blank"
                  >
                    Odd Sem Time Table
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.e_path}
                    target="_blank"
                  >
                    Even Sem Time Table
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateTimeTable", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteTimeTable", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const NewsLettersTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("newsLetters");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">News Letters</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    News Letter
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateNewsLetters", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteNewsLetters", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const IRGTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("irg");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">IRG (Internal Revenue Generation)</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    News Letter
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateIrg", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteIrg", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const LaboratoryTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("labs");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">IRG (Internal Revenue Generation)</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    News Letter
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => onEdit("updateLab", "data-" + data.sno)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteLab", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const StudentListTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("studentList");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Student List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  {data.department}
                </td>
                <td className="px-2 py-1 whitespace-nowrap">{data.semester}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    Student List
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateStudentList", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteStudentList", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export const DeptPortfolioTable = ({
  fetched_data,
  fetchedData,
  onDelete,
  onEdit,
  cols,
}) => {
  useEffect(() => {
    fetched_data("dept-portfolio");
  });
  return (
    <>
      <div className="overflow-x-auto w-full">
        <h1 className="sub-heading">Department Portfolio</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((e) => (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fetchedData.map((data, index) => (
              <tr key={index} id={"data-" + data.sno}>
                <td className="px-2 py-1 whitespace-nowrap">{data.session}</td>
                <td className="px-2 py-1 whitespace-nowrap">{data.branch}</td>
                <td className="px-2 py-1 whitespace-nowrap">
                  <a
                    href={"https://gpsakoli.ac.in" + data.path}
                    target="_blank"
                  >
                    Student List
                  </a>
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-sm text-white-500">
                  <button
                    className="edit-btn text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() =>
                      onEdit("updateDeptPortfolio", "data-" + data.sno)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete("deleteDeptPortfolio", data.sno)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
