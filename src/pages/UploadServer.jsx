import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
import { Select } from "antd";
import { Container } from "../components/Container";

const propsDragger = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadServer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Container>
      <div className="p-5">
        <h1 className="mb-10 text-3xl font-semibold">Create New</h1>
        <Upload style={{ margin: "10px 0" }} {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Dragger style={{ margin: "10px 0" }} {...propsDragger}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
        <div className="flex gap-2 my-10">
          <div>
            <h6>Project Location</h6>
            <Select
              defaultValue="lucy"
              className="w-96 mt-2"
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div>
            <h6>Communication Name (optional)</h6>
            <input
              type="text"
              className="mt-2 rounded border-gray-300 w-full border p-1"
            />
          </div>
        </div>
        <Button>Create</Button>
      </div>
    </Container>
  );
};

export default UploadServer;
