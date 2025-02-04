import React from "react";
import NavigationBar from "../../../CommomComponents/NavigationBar";

interface DetailsNavigationProps {
  className?: string;
}

const DetailsNavigation: React.FC<DetailsNavigationProps> = ({ className }) => {
  const handleGoBack = () => {
    console.log("Go Back clicked");
  };

  const handlenavigation = () => {
    console.log("Design a Dashboard for Sokofund clicked");
  };

  return (
    <div className={className}>
      <NavigationBar
        onGoBack={handleGoBack}
        title="Challenges & Hackathons"
        actionText="Design a Dashboard for Sokofund"
        onActionClick={handlenavigation}
      />
    </div>
  );
};

export default DetailsNavigation;
