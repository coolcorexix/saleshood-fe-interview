// Header from antd Layout can not be used as Server Component hence this component
import { BellFillIcon, BellIcon, MarkGithubIcon } from "@primer/octicons-react";
import { Badge, Space, Tooltip, Typography } from "antd";

function AppHeader() {
  

  return (
    <div className="w-full border-b-gray-700 border-b-2">
      <div className="max-w-screen-md w-100 flex flex-row m-auto justify-between p-4  ">
        <Space>
          <MarkGithubIcon size="medium" />
          <h1 className=" font-bold">GitHnb</h1>
        </Space>
        <div className="flex flex-row items-center justify-center">
          
        </div>

        <Space>
          <Tooltip title="Notification">
              <BellFillIcon fill="white" />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
}

export default AppHeader;
