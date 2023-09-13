const { getLatestVersionedContent } = require("./useFetchSteps");
const { mockSteps, mockStepsSorted } = require("./__mock__/steps");

describe("getLatestVersionContent", () => {
  it("should handle sorting Steps Response", () => {
    const response = getLatestVersionedContent(mockSteps);
    expect(response).toEqual(mockStepsSorted);
  });
});
