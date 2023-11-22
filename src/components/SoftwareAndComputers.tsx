import React from "react";
import cpu from "../assets/cpu.svg";
import "../css/SoftwareAndComputers.css";

function SoftwareAndComputers() {
  return (
    <>
      <div className="p-5 p-md-5 mb-4 rounded ">
        <div className="row lg-4">
          <div className="col-md-8">
            <h1 className="text-center fs-1 fw-bold">Software and Computers</h1>
            <p className="text-secondary text-center">C++, C, Python, VHDL</p>
          </div>
          <div className="col-md-4">
            <img className="image rotated" src={cpu} />
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-8">
          <div className="row sm-5">
            <h1>Software</h1>
            <div className="col-lg-8 text-center">
              <h3 className="border-bottom "> Code Linting</h3>
              <p>
                Linting tools are commonly used for languages like Python and
                Javascript to catch basic errors and to ensure consistency in
                style. It is important to keep in mind that C compilers are
                fairly basic and do not have array checking.
              </p>
            </div>
            <div className="col-lg-8 text-center">
              <h3 className="border-bottom ">Unity and Vuforia</h3>
              <p>
                The game development engine unity comes with a vuforia package
                that enables you to apply augmented reality to projects created
                through unity.
              </p>
            </div>
          </div>
          <div className="row sm-5">
            <h1>Computers</h1>
            <div className="col-lg-8 text-center">
              <h3 className="border-bottom "> Embedded systems testing</h3>
              <p>TBD</p>
            </div>
            <div className="col-md-8 text-center">
              <h3 className="border-bottom ">
                Principles of Compilers and the benefits of bytecode
              </h3>
              <p>
                Typically programming language code needs to be compiled to
                specific operating systems and computer hardware. With bytecode
                the compilation of the high level programming language only
                needs to happen once. As the bytecode is interpreted by the
                virtual machine which is then responsible for coverting this
                compiled code to specific hardware. Java uses bytecode where the
                JVM (java virtual machine) is responsible for coverting the
                bytecode to the machine specific code
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h1>Projects</h1>
        </div>
      </div>
    </>
  );
}

export default SoftwareAndComputers;
