import React, { FormEvent } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: { value: string; label: string }[]; // Add options for select fields
}

const LoginRegisterForm = ({
  fields,
  btnTitle,
  loading,
  onSubmit,
}: {
  fields: Field[];
  btnTitle: String;
  loading: boolean;
  onSubmit: (e: FormData) => Promise<void>;
}) => {
  return (
    <form
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      action={onSubmit}
    >
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label
            htmlFor={field.name}
            className="block text-gray-700 font-bold mb-2"
          >
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center min-w-max"
      >
        {loading && <LoadingSpinner />}
        <span className="ml-2">{btnTitle}</span>
      </button>
    </form>

    // <div>Test Div</div>
  );
};

export default LoginRegisterForm;
