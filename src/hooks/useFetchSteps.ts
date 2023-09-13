import { useEffect, useState } from "react";

import type { StepToRender, Step } from "../types";

const URL = import.meta.env.VITE_STEPS_ENDPOINT;

/**
 * This function returns the latest `versionContent`
 * for the given `Steps`. We map through the given `Steps`,
 * extract the latest `versionContent`, then return the `Steps`
 * sorted by `stepNumber`
 */
export const getLatestVersionedContent = (stepsResponse: Step[]) => {
  const getLatestDate = (versionedContent: Step["versionContent"]) => {
    return versionedContent.sort(
      (a, b) => new Date(b.effectiveDate) - new Date(a.effectiveDate)
    )[0];
  };

  return stepsResponse
    .map(({ id, stepNumber, versionContent }) => {
      const { title, body } = getLatestDate(versionContent);
      return {
        id,
        stepNumber,
        title,
        body,
      };
    })
    .sort((a, b) => a.stepNumber - b.stepNumber);
};

/**
 * `useFetchSteps` is a custom hook which will automatically
 * fetch the data used to populate the "Steps" section.
 *
 * We're also returning `handleFetchSteps` if we want to
 * manually trigger an update.
 */
export default function useFetchSteps() {
  const [steps, setSteps] = useState<StepToRender[] | null>(null);

  const handleFetchSteps = async (): Promise<void> => {
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const parsed = await response.json();
        setSteps(getLatestVersionedContent(parsed));
      } else {
        throw new Error("Error: Failed to fetch step content.");
      }
    } catch (e) {
      throw new Error("Error: Failed to fetch step content...");
    }
  };

  useEffect(() => {
    handleFetchSteps();
  }, []);

  return {
    handleFetchSteps,
    steps,
  };
}
