import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Table = () => {
    const data = [
        { label: "Experience", value: "4 years" },
        { label: "Technologies", value: "HTML, CSS, WordPress, UI/UX Design, React, Sass, Bootstrap" },
        { label: "Current Focus", value: "Frontend Development" },
        { label: "Year in Software Engineering", value: "3rd Year" },
        { label: "Projects Completed", value: "Over 40 Website Projects, 25+ UI/UX Projects, 10+ React Projects" },
        { label: "Tools & Frameworks", value: "React, Sass, Bootstrap, Figma" },
        { label: "Professional Goal", value: "Building beautiful, responsive, and dynamic websites" },
        { label: "Previous Roles", value: "Web Designer, WordPress Developer" },
        { label: "Education", value: "Software Engineering Student" },
        { label: "Location", value: "Turkey" },
      ];
  return (
    <>
    <Navbar />
    <table className="container table table-striped mt-5">
    <thead>
      <tr>
        <th scope="col">Attribute</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item,index)=>(
          <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
          </tr>
      ))}
    </tbody>
  </table>
  <Footer /></>
    
  )
}

export default Table