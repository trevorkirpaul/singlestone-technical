import "./StepCard.css";

interface IProps {
  stepNumber: string;
  title: string;
  body: string;
}

export default function StepCard({ stepNumber, title, body }: IProps) {
  return (
    <div className="step-card">
      <span>{stepNumber}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
