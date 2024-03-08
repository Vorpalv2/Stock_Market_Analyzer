import { useState } from "react";

const FormHandle = () => {
  const [formData, setFormData] = useState("");
  const [value, setValue] = useState("pdf");

  function valueHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function fetchData(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const data = await fetch("/api/formsubmit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, value }),
    });
    console.log(data);
    console.log(
      `Data Fetched for ${formData} in ${value} format, Open your Downloads and look inside Storage Folder`
    );
  }

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData(event?.target.value);
  }
  console.log(value);
  console.log(formData);

  return (
    <>
      <div className="flex flex-col pt-10 h-auto justify-center items-center">
        <h1 className="dark:text-white text-2xl">Company Information</h1>
        <h3 className="dark:text-white text-2xl">
          Entered Company Name : {formData}
          Entered Value : {value}
        </h3>
        <form
          onSubmit={fetchData}
          className="flex flex-col pt-2"
          action="/formsubmit"
          method="post"
        >
          <input
            className="p-2 mb-2"
            type="text"
            name="company"
            id="company"
            value={formData}
            onChange={handleSubmit}
            placeholder="Enter Company Name/Symbol"
          />
          <select
            onChange={valueHandler}
            className="p-2 mb-2"
            name="filetype"
            id="filetype"
          >
            <option defaultChecked value="pdf">
              PDF
            </option>
            <option value="png">PNG</option>
          </select>
          <button
            className="dark:bg-black dark:text-white dark:border-solid dark:border-neutral-200 p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormHandle;
