import * as React from "react";

const TestPage = () => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-black">
      <iframe
        title="test"
        src="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html"
        className="h-[100vh] w-[100vw]"
      ></iframe>
    </div>
  );
};

export default TestPage;

export const Head = () => <title>Test Page</title>;
