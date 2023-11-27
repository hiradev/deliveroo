import React, { FunctionComponent } from "react";
import { Breadcrumb as AntBreadcrumb, Menu, Dropdown, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/BreadCrumb.module.css";

interface BreadCrumbProps {
  breadcrumbs: string[];
  onItemClick: (index: number) => void;
  selectedBreadcrumb: { value: string; label: string } | null;
  onDropdownMenuChange: (
    selectedItem: { value: string; label: string } | null
  ) => void;
}

const BreadCrumb: FunctionComponent<BreadCrumbProps> = ({
  breadcrumbs,
  onItemClick,
  selectedBreadcrumb,
  onDropdownMenuChange,
}) => {
  const menu = (
    <Menu>
      <Menu.Item key="ItemList" disabled>
        <h1 style={{ color: "black", fontWeight: "bold" }}>Item List</h1>
      </Menu.Item>
      <Row gutter={[24, 24]}>
        {[1, 2, 3].map((categoryIndex) => (
          <Col span={8} key={categoryIndex}>
            <Menu.ItemGroup title={`Category ${categoryIndex}`}>
              {[2, 3, 4, 5, 6].map((itemIndex) => (
                <Menu.Item
                  key={`ItemList${itemIndex} ${categoryIndex}`}
                  onClick={() =>
                    onDropdownMenuChange({
                      value: `ItemList${itemIndex}`,
                      label: `ItemList${itemIndex}`,
                    })
                  }
                >
                  ItemList{itemIndex}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </Col>
        ))}
      </Row>
    </Menu>
  );

  return (
    <AntBreadcrumb>
      <AntBreadcrumb.Item
        className={styles.homeLink}
        onClick={() => onItemClick(0)}
      >
        <Link href="/">Home</Link>
      </AntBreadcrumb.Item>
      <AntBreadcrumb.Item>
        <Dropdown overlay={menu}>
          <span>
            Item <DownOutlined />
          </span>
        </Dropdown>
      </AntBreadcrumb.Item>
      {breadcrumbs.map((breadcrumb, index) => (
        <AntBreadcrumb.Item key={index} onClick={() => onItemClick(index + 2)}>
          {breadcrumb}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};

export default BreadCrumb;
