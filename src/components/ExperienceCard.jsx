export function ExperienceCard({ experienceDetails }) {
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
        {experienceDetails.startDate && !experienceDetails.endDate ? (
          <p>{`${formatDate(experienceDetails.startDate)} - Present`}</p>
        ) : !experienceDetails.startDate && !experienceDetails.endDate ? (
          false
        ) : (
          <p>{`${formatDate(experienceDetails.startDate)} - ${formatDate(
            experienceDetails.endDate
          )}`}</p>
        )}

        <p>{experienceDetails.location}</p>
      </div>
      <div className="more-details">
        <h3>{experienceDetails.title}</h3>
        <h5>{experienceDetails.companyName}</h5>
        <p>{experienceDetails.description}</p>
      </div>
    </div>
  );
}
