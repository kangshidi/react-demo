import React from "react";
import {Table, Icon} from "antd";
import request from "superagent";

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

export default class CompoA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    // 获取dataSource
    this.serverRequest = request
      .get("mock/dataSource.json")
      .query({})
      .end((err, res) => {
        if (err) {
          alert("数据获取失败。");
          return false;
        }
        let dataSource = JSON.parse(res.text);
        this.setState({
          dataSource
        });
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <Table
          rowKey="name"
          columns={columns}
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}
