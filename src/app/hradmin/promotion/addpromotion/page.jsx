"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import Displaycard from "@/components/Card";
import FormWrapper from "@/components/FormWrapper";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import TextArea from "@/components/TextArea";
import { clearStatus, createPromo } from "@/slices/promo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "../../../../../node_modules/next/navigation";

const initialState = {
  title: "",
  description: "",
  images: new FormData()
};

const page = () => {
  const [promo, setPromo] = useState(initialState);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagebox, setImageBox] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, message, error } = useSelector(state => state.promo);

  const handleSelectFile = e => {
    setImageBox(true);
    const files = Array.from(e.target.files);
    setSelectedFiles([
      ...selectedFiles,
      ...files.map(file => URL.createObjectURL(file))
    ]);
    Array.from(files).forEach(file => {
      promo.images.append("images", file);
    });
    setPromo({ ...promo });
  };
  const onInputChange = e => {
    const { name, value } = e.target;
    setPromo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePreviewLoad = index => {
    URL.revokeObjectURL(selectedFiles[index]); // free memory
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", promo.title);
    formData.append("description", promo.description);
    for (const [key, file] of promo.images.entries()) {
      formData.append(key, file);
    }
    dispatch(createPromo(formData))
  };

  useEffect(() => {
    if (message) {
      toast.success("Promotion post created successfully");
      setPromo(initialState);
      dispatch(clearStatus());
      router.push("/hradmin/promotion");
    }
    if (error) {
      toast.error(error);
      setSignupError("Failed to create Promotion post");
      dispatch(clearStatus());
    }
  }, [message, error, dispatch]);

  return (
    <div className="flex justify-center">
       <ToastContainer
        position="top-right"
        autoClose={2000}
        className="absolute  right-0 top-0 mt-20 w-[40px]  max-w-sm p-4"
      />
      <Displaycard variant="card2">
        <FormWrapper className="flex flex-col max-w-full gap-y-[20px] p-4" onSubmit={handleSubmit}>
          <div>
            <Text
              className="pb-[5px] md:pb-[10px]"
              content="Title"
            />
            <InputField
              type="text"
              placeholder="Enter title for promotion"
              name="title"
              value={promo.title}
              onChange={onInputChange}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Description" />
            <TextArea
              type="text"
              placeholder="Enter detail of the promotion"
              name="description"
              value={promo.description}
              rows={8}
              onChange={onInputChange}
            />
          </div>
          <div className="w-[250px] md:w-[550px]">
            <Text
              className="pb-[5px] md:pb-[10px]"
              content="Image"
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
            <Button color="bt_primary" type="submit" disabled={loading}>
            {loading ? "Adding..." : " Add Promotion"}
            </Button>
          </div>
        </FormWrapper>
      </Displaycard>
    </div>
  );
};

export default page;