import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    // const lower = word.toLowerCase();
    // return lower.charAt(0).toUpperCase() = lower.slice(1);
}
  return (
    props.alert&&<div
      className={`alert alert-warning alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
    </div>
  );
}

export default Alert;

// import React from "react";
// import PropTypes from "prop-types";

// export default function Navbar(props) {
//   return (
//     <div>
//
//     </div>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here",
// };
