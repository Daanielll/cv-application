import "../src/styles/App.css";
import { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExpandableForm } from "./components/ExpandableForm";
import { EducationCard } from "./components/EducationCard";

function App() {
  const defaultEducationalDetails = [
    {
      school: "Stanford University",
      degree: "MBA (Master of Business Administration)",
      startDate: "2019-09-01",
      endDate: "2021-06-01",
      location: "Stanford, CA",
    },
    {
      school: "Harvard University",
      degree: "B.Sc. in Computer Science",
      startDate: "2015-09-01",
      endDate: "2019-07-01",
      location: "Cambridge, MA",
    },
  ];
  const defaultPersonalDetails = {
    fullName: "John Doe",
    address: "New York, NY",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  };
  const defaultExperienceDetails = [
    {
      title: "Product Manager",
      companyName: "InnovateTech Ltd.",
      startDate: "2021-06-15",
      endDate: "",
      location: "New York, NY",
      description:
        "Led product development teams and managed product lifecycles.",
    },
    {
      title: "Software Engineer",
      companyName: "TechCorp Inc.",
      startDate: "2018-08-15",
      endDate: "2021-05-30",
      location: "San Francisco, CA",
      description:
        "Developed and maintained software applications for clients. Collaborated with cross-functional teams to design and implement complex features. Resolved critical bugs and improved application performance, resulting in a 20% increase in user satisfaction. Mentored junior developers and conducted code reviews to ensure code quality and adherence to coding standards.",
    },
  ];
  const [educationalDetails, setEducationalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [generalDetails, setGeneralDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleLoadExample = () => {
    setEducationalDetails(defaultEducationalDetails);
    setExperienceDetails(defaultExperienceDetails);
    setGeneralDetails(defaultPersonalDetails);
  };
  const handleFormClear = () => {
    setEducationalDetails([]);
    setExperienceDetails([]);
    setGeneralDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
    });
  };
  return (
    <div className="all">
      <div id="forms">
        <div className="forms-btns">
          <button onClick={handleFormClear}>
            {" "}
            <i className="fa-solid fa-trash"></i> Clear Resume
          </button>
          <button onClick={handleLoadExample}>Load Example</button>
        </div>
        <GeneralInformation
          details={generalDetails}
          setDetails={setGeneralDetails}
        ></GeneralInformation>

        <ExpandableForm
          formType="Education"
          details={educationalDetails}
          setDetails={setEducationalDetails}
        ></ExpandableForm>
        <ExpandableForm
          formType="Experience"
          details={experienceDetails}
          setDetails={setExperienceDetails}
        ></ExpandableForm>
      </div>
      {console.log(educationalDetails)}

      <div id="application">
        <div>{generalDetails.fullName}</div>
        <div id="additional-info">
          <span>
            <span className="icons phone">{generalDetails.phone}</span>
            <span className="icons email">{generalDetails.email}</span>
            <span className="icons address">{generalDetails.address}</span>
          </span>
        </div>
        <div className="all-info">
          {educationalDetails[0] && (
            <div>
              <h4>Education</h4>
              {educationalDetails.map((detail, i) => (
                <EducationCard
                  key={i}
                  educationalDetails={detail}
                ></EducationCard>
              ))}
            </div>
          )}
          {experienceDetails[0] && (
            <div>
              <h4>Experience</h4>
              {experienceDetails.map((detail, i) => (
                <ExperienceCard
                  key={i}
                  experienceDetails={detail}
                ></ExperienceCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
