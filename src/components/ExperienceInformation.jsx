import "../styles/details.css";
export function ExperienceInformation({
  details = [],
  setDetails,
  index = 0,
  onSubmit,
  focused,
  setFocused,
  deleteItem,
  type,
}) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const det = {
      ...details[index],
      [name]: value,
    };
    const allDet = [...details];
    allDet[index] = det;
    setDetails(allDet);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="input-div">
        <label htmlFor="details-companyName">Company Name *</label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter Company Name"
          id="details-companyName"
          value={details[index].companyName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-degree">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Position Title"
          id="details-title"
          value={details[index].title}
          onChange={handleInputChange}
        />
      </div>
      <div className="start-end-div">
        <div className="input-div">
          <label htmlFor="details-start-date">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={details[index].startDate}
            onChange={handleInputChange}
            id="details-start-date"
          />
        </div>
        <div className="input-div">
          <label htmlFor="details-start-date">End Date</label>
          <input
            type="date"
            name="endDate"
            value={details[index].endDate}
            onChange={handleInputChange}
            id="details-end-date"
          />
        </div>
      </div>
      <div className="input-div">
        <label htmlFor="details-location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          id="details-location"
          value={details[index].location}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-description">Description</label>
        <textarea
          rows={3}
          name="description"
          placeholder="Enter Description"
          value={details[index].description}
          id="details-description"
          onChange={handleInputChange}
        />
      </div>
      <div className={`submit-div ${type}`}>
        {type != "new" && (
          <button type="button" onClick={deleteItem}>
            <i className="fa-solid fa-trash"></i> Delete
          </button>
        )}

        <div>
          <button
            type="button"
            onClick={() => {
              setFocused(!focused);
            }}
          >
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
