export function EducationCard({ educationalDetails }) {
  const formatDate = (inputDate) => {
    if (!inputDate) return "";
    const options = { year: "numeric", month: "short" };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate.replace(" ", ", ");
  };
  return (
    <div className="card">
      <div className="date-place">
        {educationalDetails.startDate && !educationalDetails.endDate ? (
          <p>{`${formatDate(educationalDetails.startDate)} - Present`}</p>
        ) : !educationalDetails.startDate && !educationalDetails.endDate ? (
          false
        ) : (
          <p>{`${formatDate(educationalDetails.startDate)} - ${formatDate(
            educationalDetails.endDate
          )}`}</p>
        )}

        <p>{educationalDetails.location}</p>
      </div>
      <div className="more-details">
        <h3>{educationalDetails.degree}</h3>
        <h5>{educationalDetails.school}</h5>
      </div>
    </div>
  );
}
