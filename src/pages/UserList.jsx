import { Modal, Radio, Select, Table } from "antd";
import { Container } from "../components/Container";
import { useState } from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    image: (
      <img
        className="w-10 h-10 rounded-full"
        src={
          "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg"
        }
        alt="avatar_img"
      />
    ),
  },
  {
    key: "2",
    name: "John",
    image: (
      <img
        className="w-10 h-10 rounded-full"
        src={
          "https://blog.photoadking.com/wp-content/uploads/2021/06/1673927931336-735x400.jpg"
        }
        alt="avatar_img"
      />
    ),
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="p-5">
      <Container>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                showModal();
              }, // click row
            };
          }}
          dataSource={dataSource}
          columns={columns}
        />
        <Modal
          footer={null}
          width={"60%"}
          title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <div className="md:flex justify-between">
            <h6 className="w-1/2 font-semibold text-xl">Permissions</h6>
            <div>
              <h6>Set Chanel Moderation Preferences</h6>
              <div className="my-5">
                <h6>Chanel Moderation</h6>
                <Select
                  defaultValue="lucy"
                  className="w-full"
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
                <h6>Who can start a new post?</h6>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Everyone can start a new post</Radio>
                  <Radio value={2}>
                    Everyone except a guest can start a new post
                  </Radio>
                </Radio.Group>
              </div>
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default UserList;
