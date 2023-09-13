export interface VersionedContent {
  title: string;
  body: string;
  effectiveDate: string;
}

export interface Step {
  id: string;
  stepNumber: string;
  versionContent: VersionedContent[];
}

export interface StepToRender {
  id: string;
  stepNumber: string;
  title: string;
  body: string;
}
