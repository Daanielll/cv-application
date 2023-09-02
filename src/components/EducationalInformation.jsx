import "../styles/details.css";
export function EducationalInformation({
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
    //console.log(name, value, index, details);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="input-div">
        <label htmlFor="details-school">School *</label>
        <input
          type="text"
          name="school"
          placeholder="Enter School / University"
          id="details-school"
          value={details[index].school}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-degree">Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Enter Degree"
          id="details-degree"
          value={details[index].degree}
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
          placeholder="Enter location"
          id="details-location"
          value={details[index].location}
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
