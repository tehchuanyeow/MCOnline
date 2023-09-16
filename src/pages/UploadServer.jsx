import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { RiDragDropFill } from "react-icons/ri";
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
    <div className="bg-dark2 text-white min-h-screen">
      <Container>
        <div className="p-5">
          <h1 className="mb-10 text-3xl font-semibold">Create New</h1>
          <Upload style={{ margin: "10px 0" }} {...props}>
            <Button className="text-white" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
          <Dragger style={{ margin: "10px 0" }} {...propsDragger}>
            <p className="flex justify-center text-6xl mb-10 text-white">
              <RiDragDropFill />
            </p>
            <p className="text-white text-xl">
              Click or drag file to this area to upload
            </p>
            <p className="text-white">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="flex md:flex-row flex-col gap-2 my-10">
            <div>
              <h6>Project Location</h6>
              <select
                className="md:w-80 w-full md:p-1 p-1.5 rounded mt-2 text-dark1"
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <h6>Communication Name (optional)</h6>
              <input
                type="text"
                className="mt-2 rounded border-gray-300 w-full border p-1"
              />
            </div>
          </div>
          <Button className="text-white">Create</Button>
        </div>
      </Container>
    </div>
  );
};

export default UploadServer;
