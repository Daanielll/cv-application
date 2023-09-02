import "../styles/expForm.css";
import { useState } from "react";
import { EducationalInformation } from "./educationalInformation";
import { ExperienceInformation } from "./ExperienceInformation";
export function ExpandableForm({ details, setDetails, formType }) {
  const [expanded, setExpanded] = useState(false);
  const [focused, setFocused] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const componentMap = {
    Education: EducationalInformation,
    Experience: ExperienceInformation,
  };
  const Component = componentMap[formType];
  let formTemplate =
    formType == "Education"
      ? [
          {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
          },
        ]
      : [
          {
            companyName: "",
            title: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          },
        ];
  const [newFormDetails, setNewFormDetails] = useState(formTemplate);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDetails([...details, newFormDetails[0]]);
    setNewFormDetails(formTemplate);
    setFocused(!focused);
  };
  const handleDelete = () => {
    let detailsCopy = [...details];
    detailsCopy.splice(showForm, 1);
    setDetails(detailsCopy);
    setShowForm(false);
  };
  const forms =
    formType == "Education"
      ? details.map((obj) => {
          return obj.school;
        })
      : details.map((obj) => {
          return obj.companyName;
        });
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-cont ${expanded}`}>
      <div id="heading" onClick={toggleExpansion}>
        <h1>{formType}</h1>
        {expanded ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {expanded && !focused && !showForm && (
        <div className="extended-forms">
          {forms.map((form, index) => {
            return (
              <button
                className="extended-btn"
                key={`form${index}`}
                name={`${index}`}
                onClick={(e) => setShowForm(e.target.name)}
              >
                {form}
              </button>
            );
          })}
          <button
            id="new-btn"
            onClick={() => {
              setFocused(!focused);
            }}
          >
            {`+ ${formType}`}
          </button>
        </div>
      )}
      {expanded && !focused && showForm && (
        <Component
          index={showForm}
          details={details}
          setDetails={setDetails}
          focused={showForm}
          setFocused={setShowForm}
          onSubmit={(e) => {
            e.preventDefault();
            setShowForm(!showForm);
          }}
          deleteItem={handleDelete}
        ></Component>
      )}
      {expanded && focused && (
        <Component
          details={newFormDetails}
          setDetails={setNewFormDetails}
          onSubmit={handleFormSubmit}
          focused={focused}
          setFocused={setFocused}
          type="new"
        ></Component>
      )}
    </div>
  );
}
