import "../styles/details.css";

export function GeneralInformation({ details, setDetails }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedDetails = {
      ...details,
      [name]: value,
    };
    setDetails(updatedDetails);
  };
  return (
    <form id="general-div">
      <h1>General Information</h1>
      <div className="input-div">
        <label htmlFor="details-fullName">Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          name="fullName"
          id="details-fullName"
          value={details.fullName}
          onChange={handleInputChange}
          autoComplete="name"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="details-email"
          onChange={handleInputChange}
          value={details.email}
          autoComplete="email"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-number">Phone number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phone"
          onChange={handleInputChange}
          value={details.phone}
          id="details-number"
          autoComplete="tel"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-address">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          name="address"
          onChange={handleInputChange}
          value={details.address}
          id="details-address"
          autoComplete="country-name"
        />
      </div>
    </form>
  );
}
