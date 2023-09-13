import "./Steps.css";
import type { StepToRender } from "../../types";
import StepCard from "./StepCard";
import LoadingSpinner from "../LoadingSpinner";

interface IProps {
  steps: StepToRender[] | null;
}

export default function Steps({ steps }: IProps) {
  return (
    <div className="steps">
      <div className="container">
        <h2>How It Works</h2>
        <div className="step-cards">
          {steps ? (
            steps.map((step) => (
              <StepCard
                key={step.id}
                stepNumber={step.stepNumber}
                title={step.title}
                body={step.body}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
}
