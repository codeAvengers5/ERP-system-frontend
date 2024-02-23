import React, { useState } from "react";
import InputField from "./InputField";
import Text from "./TextField";
import Button from "./Button";
import TextArea from "./TextArea";

export const BasicForm = ({ fields, onSubmit, btnText, className }) => {
  const [formData, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formDataAll = {
      ...formData,
      selectedValue: selectedValue,
      selectedFile: selectedFile
    };
    onSubmit(formDataAll);
    console.log("form data", formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          className ||
          "flex w-full flex-col gap-y-[14px] px-[30px] py-[60px] md:w-[580px] md:max-w-full"
        }>
        {fields.map(field => (
          <div key={field.id}>
            {field.feildType === "textFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <InputField
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                />
              </>
            )}
            {field.feildType === "areaFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <TextArea
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                  rows="5"
                  cols="53"
                />
              </>
            )}
            {field.feildType === "radioFeild" && (
              <div className="flex flex-row gap-[10px]">
                <input
                  type={field.type}
                  id={field.name}
                  value={field.name}
                  checked={selectedValue === field.name}
                  onChange={() => handleRadioChange(field.name)}
                />
                <label htmlFor={field.name}>{field.name}</label>
              </div>
            )}
          </div>
        ))}
        <Button type="submit" size="large" color="bt_primary">
          {btnText}
        </Button>
      </form>
    </div>
  );
};

export const AdditionalForm = ({ fields, onSubmit, btnText, className }) => {
  const [formData, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  const handleFileChange = e => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prevSelectedFiles => [
      ...prevSelectedFiles,
      ...files.map(file => URL.createObjectURL(file))
    ]);
    console.log("file", files);
  };

  const handlePreviewLoad = index => {
    URL.revokeObjectURL(selectedFiles[index]); // free memory
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formDataAll = {
      ...formData,
      selectedValue: selectedValue,
      selectedFiles: selectedFiles
    };
    onSubmit(formDataAll);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          className ||
          "grid w-full grid-cols-2 gap-x-[100px] gap-y-[15px] p-4 md:w-[580px] md:max-w-full"
        }>
        {fields.map(field => (
          <div key={field.id}>
            {field.feildType === "textFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <InputField
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                />
              </>
            )}
            {field.feildType === "areaFeild" && (
              <>
                <Text className="pb-[14px]" content={field.label} />
                <TextArea
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  {...field.props}
                  placeholder={field.placeholder}
                  rows="5"
                  cols="53"
                />
              </>
            )}
            {field.feildType === "radioFeild" && (
              <div className="flex flex-row gap-[10px]">
                <input
                  type={field.type}
                  id={field.name}
                  value={field.name}
                  checked={selectedValue === field.name}
                  onChange={() => handleRadioChange(field.name)}
                />
                <label htmlFor={field.name}>{field.name}</label>
              </div>
            )}
            {field.feildType === "fileFeild" && (
              <div className="w-[550px]">
                <Text className="pb-[14px]" content={field.label} />
                <div className="flex w-full flex-row items-center rounded border-2 border-br_primary bg-bg_primary px-4 py-2 hover:bg-bt_primary hover:opacity-[25%]">
                  <input
                    type="file"
                    id="custom-input"
                    multiple
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={e => handleFileChange(e)}
                    hidden
                  />
                  <label
                    htmlFor="custom-input"
                    className="mr-[200px] block cursor-pointer rounded-md border-0 px-4
                  py-2 text-sm 
                 text-tx_addtional">
                    Choose file
                  </label>
                  <label className="text-sm text-tx_addtional">
                    {field.placeholder}
                  </label>
                </div>
                <div className="mt-[15px] flex justify-center gap-[30px]">
                  {selectedFiles ? (
                    selectedFiles.map((file, index) => (
                      <img
                        key={index}
                        src={file}
                        onLoad={() => handlePreviewLoad(index)}
                        alt="Preview"
                        className="h-[135px] w-[140px] object-cover"
                      />
                    ))
                  ) : (
                    <>
                      <div className="h-[135px] w-[140px] bg-meke-600" />
                      <div className="h-[135px] w-[140px] bg-meke-600" />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="col-span-2">
          <Button type="submit" size="medium" color="bt_primary">
            {btnText}
          </Button>
        </div>
      </form>
    </div>
  );
};
