import React from "react";
import PropTypes from "prop-types";
const Student = ({ name, age, isStudent }) => {
    return (
        <div>
            <h2>Сведения о студенте</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Студент: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
};

export default Student;