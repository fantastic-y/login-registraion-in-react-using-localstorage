import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      error:''
    }
  }

  onChangeName = (e) =>{
    this.setState({username:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onSubmit = (e) =>{
    let { history } = this.props
    let ele;
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.username.length > 0 && this.state.password.length > 0){
          if (arr.username == this.state.username && (arr.password == this.state.password)) {
            let user = this.state.username;
            history.push({ pathname: "/welcome", user: this.state.username });
          }else{
            this.setState({error:'Please check your email or password'})
          }
        }
      }
      )
  }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  render() {
    
    return (
      <form onSubmit={this.onSubmit}>
        <p className="error">
          {this.state.error}
        </p>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeName} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={this.props.onLogin}>Login</button>
      </form>
    )
  }
}

export default Login;
