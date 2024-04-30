import React, { useState, useRef } from "react";
import ReactDOMServer from "react-dom/server";

import { Button, Text } from "../../ui";

export const ComponentGenerator: React.FC = () => {
  const [isComponentSelected, setIsComponentSelected] = useState<string | null>(
    null
  );
  const [componentCode, setComponentCode] = useState<string | null>(null);
  const [textProps, setTextProps] = useState<string>("");

  const compoentRef = useRef<HTMLDivElement>(null);

  const COMPONENTS = [
    {
      name: "Button",
      component: <Button label="Click me" />,
    },
    { name: "Text", component: <Text children={textProps} /> },
  ];

  const generateButtonCode = () => {
    if (!compoentRef.current) return;
    const componentCodeRef = compoentRef.current.innerHTML.trim();
    setComponentCode(componentCodeRef);
  };

  const handleTextPropsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextProps(e.target.value);

    const newTextComponent = <Text children={e.target.value} />;
    const updatedComponents = COMPONENTS.map((comp) => {
      if (comp.name === "Text") {
        return { ...comp, component: newTextComponent };
      }
      return comp;
    });

    const foundComponent = updatedComponents.find(
      (comp) => comp.name === isComponentSelected
    )?.component;
    if (foundComponent) {
      const generatedCode = ReactDOMServer.renderToStaticMarkup(foundComponent);
      setComponentCode(generatedCode);
    }
  };

  return (
    <div>
      <h1>Component Generator</h1>
      <select
        onChange={(e) => {
          setIsComponentSelected(e.target.value);
        }}
      >
        <option value="">Select a component</option>
        {COMPONENTS.map((comp) => (
          <option key={comp.name} value={comp.name}>
            {comp.name}
          </option>
        ))}
      </select>
      {isComponentSelected === "Text" && (
        <div>
          <label htmlFor="textProps">Text Props:</label>
          <input
            type="text"
            id="textProps"
            value={textProps}
            onChange={handleTextPropsChange}
          />
        </div>
      )}
      <div ref={compoentRef}>
        {isComponentSelected &&
          COMPONENTS.find((comp) => comp.name === isComponentSelected)
            ?.component}
      </div>
      <button onClick={generateButtonCode}>Generate Code</button>
      {componentCode && (
        <div>
          <h2>Generated Code:</h2>
          <pre>{componentCode}</pre>
        </div>
      )}
    </div>
  );
};
