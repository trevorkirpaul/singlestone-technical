import LoadingSpinnerLogo from "../../assets/loader.svg";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img src={LoadingSpinnerLogo} />
    </div>
  );
}
