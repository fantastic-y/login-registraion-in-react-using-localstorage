import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:''
    }
  }
  
  onChangeName = (e) =>{
    this.setState({username:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  onSubmit = (e) =>{
    let ob = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('formdata');
    if(olddata==null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formdata', JSON.stringify(olddata));
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("formdata", JSON.stringify(oldArr))
      console.log(oldArr,'hhg')
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onRegister}>Register</button>
      </form>
    )
  }
}

export default Register;