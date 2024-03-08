/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import Displaycard from "@/components/Card";
import CustomSelect from "@/components/CustomSelect";
import FormWrapper from "@/components/FormWrapper";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import { register } from "@/slices/auth";
import { clearMessage } from "@/slices/message";
<<<<<<< HEAD:src/app/it_admin/users/adduser/page.jsx
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
=======
>>>>>>> dev:src/app/itadmin/users/adduser/page.jsx

const initialState = {
  full_name: "",
  email: "",
  password: "",
  position: "",
  role_name: "" || "Employee",
  start_date: new Date(),
  salary: "",
  gender: "",
  images: new FormData()
};

const page = () => {
  const [user, setUser] = useState(initialState);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagebox, setImageBox] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSelectFile = e => {
    setImageBox(true);
    const files = Array.from(e.target.files);
    setSelectedFiles(prevSelectedFiles => [
      ...prevSelectedFiles,
      ...files.map(file => URL.createObjectURL(file))
    ]);
<<<<<<< HEAD:src/app/it_admin/users/adduser/page.jsx

    // const formData = new FormData();

    Array.from(files).forEach(file => {
      user.images.append("images", file);
    });
    // setUser({ ...user});
=======
    const formData = new FormData();
    files.forEach(file => {
      formData.append("images", file);
    });
    for (const value of formData.values()) {
      console.log(value);
    }
    setUser(prevUser => ({
      ...prevUser,
      images: formData.values()
    }));
>>>>>>> dev:src/app/itadmin/users/adduser/page.jsx
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
<<<<<<< HEAD:src/app/it_admin/users/adduser/page.jsx
    console.log("user data", user);
    setSuccessful(false);

=======
    setSuccessful(false);
    console.log(user.images);
>>>>>>> dev:src/app/itadmin/users/adduser/page.jsx
    dispatch(register(user))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
    setUser(initialState);
  };

  const genderdata = ["Male", "Female"];
  const roledata = ["Manager", "HR", "Employee"];
<<<<<<< HEAD:src/app/it_admin/users/adduser/page.jsx

=======
>>>>>>> dev:src/app/itadmin/users/adduser/page.jsx
  return (
    <div className="flex justify-center">
      <div className="align-self-end">
        {message && (
          <div>
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert">
              {message}
            </div>
          </div>
        )}
      </div>
      <Displaycard variant="card2">
        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <Text
              className="pb-[5px] md:pb-[10px]"
              content="Name Of Employee"
            />
            <InputField
              type="text"
              placeholder="Enter full name of employee"
              name="full_name"
              value={user.full_name}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Email" />
            <InputField
              type="text"
              placeholder="Enter email of the employee"
              name="email"
              value={user.email}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Password" />
            <InputField
              type="password"
              placeholder="Enter default password for the employee"
              name="password"
              value={user.password}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Position" />
            <InputField
              type="text"
              placeholder="Enter occupation of the employee"
              name="position"
              value={user.position}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Role" />
            <CustomSelect
              data={roledata}
              name="role_name"
              title="Select role"
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[14px]" content="Work start date" />
            <InputField
              type="date"
              placeholder="Enter occupation of the employee"
              name="start_date"
              value={user.start_date}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Salary/Wage" />
            <InputField
              type="text"
              placeholder="Enter salary of the employee"
              name="salary"
              value={user.salary}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Gender" />
            <CustomSelect
              data={genderdata}
              name="gender"
              title="Select gender"
              onSelect={onInputChange}
            />
          </div>
          <div className="w-[250px] md:w-[550px]">
            <Text
              className="pb-[5px] md:pb-[10px]"
              content="Image of National ID/ License ID"
            />
            <div className="flex w-full items-center rounded border-2 border-br_primary bg-bg_primary px-2 py-2 hover:bg-bt_primary hover:opacity-[25%] md:px-4">
              <input
                type="file"
                id="custom-input"
                multiple
                name="images"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleSelectFile}
                hidden
              />
              <label
                htmlFor="custom-input"
                className="mr-[20px] block cursor-pointer rounded-md border-0 px-4 py-2
                  text-sm text-tx_addtional 
                 md:mr-[200px]">
                Choose file
              </label>
              <label className="text-sm text-tx_addtional">
                You can add multiple image
              </label>
            </div>
            <div className="mt-[15px] flex flex-col items-center justify-center gap-[15px] md:flex-row md:gap-[30px]">
              {imagebox ? (
                selectedFiles.map((file, index) => (
                  <img
                    key={index}
                    src={file}
                    onLoad={() => handlePreviewLoad(index)}
                    alt="Preview"
                    className="h-[67px] w-[70px] object-cover md:h-[135px] md:w-[140px]"
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
          <div className="col-span-1 md:col-span-2">
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
