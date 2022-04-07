import logo from './logo.svg';
import './App.css';
import { Stepper } from './components/Stepper';
import { StepperControl } from './components/StepperControl';

// Importing the step components
import { PersonalInformation } from './components/steps/PersonalInformation';
import { Education } from './components/steps/Education';
import { WorkExperience } from './components/steps/WorkExperience';
import { SkillProjects } from './components/steps/SkillProjects';

//Import the context
import { StepperContext } from './contexts/StepperContext';

// react state
import { useState } from 'react';

function App() {
  const  [currentStep , setCurrentStep] = useState(1);
  const [userData , setUserData] = useState('');
  const [finalData , setFinalData] = useState([]);

  const steps=[
    "Personal Information",
    "Education",
    "Work Experience",
    "Skills and Projects",
  ];

  const displayStep = (step) =>{
    switch(step){
      case 1:
        return <PersonalInformation/>
      case 2:
        return <Education/>
      case 3:
        return <WorkExperience/>
      case 4:
        return <SkillProjects/>
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    scrollToTop();
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/5">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper
        steps={steps}
        currentStep = {currentStep}
        />
        {/* Display Stepper Components */}
        <div className="my-10 py-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
        {/* Navigation */}
        <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        /> 
    </div>
  );
}

export default App;
