import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Home extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
    this.goToAdd = this.goToAdd.bind(this);
    this.getReport = this.getReport.bind(this);
  }
  logout = ()=>{
    this.props.history.push("/login")
  }
  search = ()=>{
    alert('clicked');
  }
  goToAdd = ()=>{
    this.props.history.push("/addVotes")
  }
  getReport = ()=>{
    this.props.history.push("/report")
  }
  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <div className='home-container'>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2 className='home-title'>RM小助手管理端</h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton label="退出" labelStyle={styles} onClick={this.logout}/>
          </ToolbarGroup>
        </Toolbar>
        <div className='home-content'>
        <div className='home-search'>
          <TextField hintText="输入关键字进行查询"/>
          <span className='button'>
            <RaisedButton label="查询" labelStyle={styles} onClick={this.search}/>
          </span>
        </div>
        <div className='home-table'>
          <RaisedButton label="新增投票" labelStyle={styles} onClick={this.goToAdd}/>
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>投票内容</TableHeaderColumn>
                  <TableHeaderColumn>操作</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>你了解全栈开发吗</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="投票结果" labelStyle={styles} onClick={this.getReport}/>
                    &nbsp;
                    <RaisedButton label="编辑" labelStyle={styles}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>2</TableRowColumn>
                  <TableRowColumn>你了解全栈开发吗</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="投票结果" labelStyle={styles} onClick={this.getReport}/>
                    &nbsp;
                    <RaisedButton label="编辑" labelStyle={styles}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>3</TableRowColumn>
                  <TableRowColumn>你了解做饭技巧吗</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="投票结果" labelStyle={styles} onClick={this.getReport}/>
                    &nbsp;
                    <RaisedButton label="编辑" labelStyle={styles}/>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>4</TableRowColumn>
                  <TableRowColumn>你愿意走怎样的发展路线</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton label="投票结果" labelStyle={styles} onClick={this.getReport}/>
                    &nbsp;
                    <RaisedButton label="编辑" labelStyle={styles}/>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className='button'>
          <RaisedButton label="back" labelStyle={styles} fullWidth={true} onClick={this.logout}/>
        </div>
      </div>
    );
  }
}

export default Home;
