"use client";

import Button from "@/components/Button";
import Displaycard from "@/components/Card";
import CustomSelect from "@/components/CustomSelect";
import FormWrapper from "@/components/FormWrapper";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import { useState } from "react";

const initialState = {
  nameOfEmployee: "",
  email: "",
  password: "",
  position: "",
  salary: "",
  gender: "",
  nationalId: [],
};

const page = () => {
  const [user, setUser] = useState(initialState);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagebox , setImageBox] = useState(false);

  const handleSelectFile = e => {
    setImageBox(true);
    const files = Array.from(e.target.files);
    setSelectedFiles(prevSelectedFiles => [
      ...prevSelectedFiles,
      ...files.map(file => URL.createObjectURL(file))
    ]);
  
    setUser({ ...user, nationalId: [...user.nationalId, ...files] });
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handlePreviewLoad = index => {
    URL.revokeObjectURL(selectedFiles[index]); // free memory
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("user data", user);
    setUser(initialState);
  };

  const data = ["male", "female"];

  return (
    <div className="flex justify-center">
      <Displaycard variant="card2">
        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <Text className="pb-[14px]" content="Name Of Employee" />
            <InputField
              type="text"
              placeholder="Enter full name of employee"
              name="nameOfEmployee"
              value={user.nameOfEmployee}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Email" />
            <InputField
              type="text"
              placeholder="Enter email of the employee"
              name="email"
              value={user.email}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Password" />
            <InputField
              type="password"
              placeholder="Enter default password for the employee"
              name="password"
              value={user.password}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Position" />
            <InputField
              type="text"
              placeholder="Enter occupation of the employee"
              name="position"
              value={user.position}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Salary/Wage" />
            <InputField
              type="text"
              placeholder="Enter salary of the employee"
              name="salary"
              value={user.salary}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Gender" />
            <CustomSelect
              data={data}
              name="gender"
              title="Select gender"
              onSelect={onInputChange}
            />
          </div>
          <div className="w-[550px]">
            <Text
              className="pb-[14px]"
              content="Image of National ID/ License ID"
            />
            <div className="flex w-full flex-row items-center rounded border-2 border-br_primary bg-bg_primary px-4 py-2 hover:bg-bt_primary hover:opacity-[25%]">
              <input
                type="file"
                id="custom-input"
                multiple
                name="nationalId"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleSelectFile}
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
                You can add multiple image
              </label>
            </div>
            <div className="mt-[15px] flex justify-center gap-[30px]">
              {imagebox ? (
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
          <div className="col-span-2">
            <Button color="bt_primary" type="submit">
              submit
            </Button>
          </div>
        </FormWrapper>
      </Displaycard>
    </div>
  );
};

export default page;
