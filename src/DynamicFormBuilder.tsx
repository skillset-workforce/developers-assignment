import React, { useState } from "react";

type ComponentType = "input" | "select" | "textarea";

type ComponentProps = {
  type?: string;
  placeholder?: string;
  options?: string[];
  [key: string]: any; // Allow additional props
};

type Component = {
  type: ComponentType;
  label: string;
  props: ComponentProps;
};

type FormField = {
  id: number;
  type: ComponentType;
  props: ComponentProps;
};

// Default components that can be added dynamically
const COMPONENTS: Component[] = [
  {
    type: "input",
    label: "Text Input",
    props: { type: "text", placeholder: "Enter text" },
  },
  { type: "input", label: "Checkbox", props: { type: "checkbox" } },
  {
    type: "select",
    label: "Dropdown",
    props: { options: ["Option 1", "Option 2"] },
  },
  {
    type: "textarea",
    label: "Textarea",
    props: { placeholder: "Enter multiline text" },
  },
];

const styles = {
  container: {
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    width: "100%",
  },
  heading: {
    marginBottom: "10px",
  },
  description: {
    fontSize: "25px",
    marginBottom: "10px",
    color: "blue",
    width: "300px",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    textAlign: "left",
  },
  listItem: {
    fontSize: "20px",
    marginBottom: "5px",
    textAlign: "left",
  },
  select: {
    marginTop: "10px",
  },
};

const DynamicFormBuilder: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [livePreview, setLivePreview] = useState<React.ReactNode[]>([]);

  const addComponent = (component: Component) => {
    const newField: FormField = {
      id: Date.now(),
      type: component.type,
      props: { ...component.props },
    };

    setFormFields([...formFields, newField]);

    if (component.type === "select") {
      setLivePreview([
        ...livePreview,
        React.createElement(
          component.type,
          { ...component.props, key: newField.id },
          component.props.options?.map((option, index) =>
            React.createElement("option", { key: index, value: option }, option)
          )
        ),
      ]);
    } else {
      setLivePreview([
        ...livePreview,
        React.createElement(component.type, {
          ...component.props,
          key: newField.id,
        }),
      ]);
    }
  };

  const removeField = (id: number) => {
    setFormFields(formFields.filter((field) => field.id !== id));
    setLivePreview(
      livePreview.filter(
        (_, index) => index !== formFields.findIndex((f) => f.id === id)
      )
    );
  };

  const renderField = (field: FormField) => {
    const { type, props } = field;

    if (type === "select") {
      return React.createElement(
        type,
        { ...props, key: field.id },
        props.options?.map((option, index) =>
          React.createElement("option", { key: index, value: option }, option)
        )
      );
    }

    return React.createElement(type, { ...props, key: field.id });
  };

  return (
    <div style={{ padding: "20px", width: "100%", alignItems: "center" }}>
      <h2>Dynamic Form Builder</h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
        }}
      >
        {/* <Explanation></Explanation> */}
        <div style={{ width: "800px" }}>
          <div style={{ marginBottom: "20px" }}>
            <select style={styles.select}>
              <option value="edit">Edit Mode</option>
              <option value="player">Player Mode</option>
            </select>
            <h3>Add Components</h3>
            {COMPONENTS.map((component, index) => (
              <button
                key={index}
                onClick={() => addComponent(component)}
                style={{ margin: "5px" }}
              >
                {component.label}
              </button>
            ))}
          </div>

          <div
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <h3>Live Preview</h3>
            {livePreview.length === 0 ? (
              <p>No components added yet.</p>
            ) : (
              livePreview
            )}
          </div>

          <div style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h3>Final Form</h3>
            {formFields.map((field) => (
              <div key={field.id} style={{ marginBottom: "10px" }}>
                {renderField(field)}
                <button
                  onClick={() => removeField(field.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            style={{
              marginTop: "20px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={() => console.log("Form Data:", formFields)}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;
