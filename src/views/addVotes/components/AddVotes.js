import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class AddVotes extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
    this.state = {
      value: 0,
      checked:false
    };
    this.optionStyles = {
      display:'inline-block',
      width:36,
      lineHeight:48,
      height:48,
      top: 11
    }
  }
  goToHome = () => {
    this.props.history.push("/home")
  }
  handleChange = (event, index, value) => this.setState({value});
  addOption = () => {

  }
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render() {
    return (
      <div className='add-vote-container'>
        <h2>添加个投票</h2>
        <TextField
          hintText="请输入投票内容"
          floatingLabelText="投票内容"
          multiLine={true}
          rows={1}
          fullWidth={true}
        />
        <SelectField
          floatingLabelText="单选"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value={0} primaryText="单选" />
          <MenuItem value={1} primaryText="多选" />
        </SelectField>
        <div>
          <TextField
            hintText="选项一"
            multiLine={true}
            fullWidth={true}
          />
        </div>

        <div className='button add-vote-button-add'>
          <RaisedButton  label="添加选项" labelStyle={styles}  onClick={this.addOption}/>
        </div>
        <div>
          <div className='button add-vote-button-submit'>
            <RaisedButton label="提交" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
          </div>
          <div className='button add-vote-button-back'>
            <RaisedButton label="返回" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVotes;
