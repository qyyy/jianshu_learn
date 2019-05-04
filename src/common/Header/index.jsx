import React, {Component, Fragment} from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style';
import { IconFont } from "../../static/iconfont";

import classNames from 'classnames';
import { CSSTransition } from "react-transition-group";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
  }

  handleInputFocused = () => {
    const newState = {focused: true};
    this.setState(newState);
  };

  handleInputBlur = () => {
    const newState = {focused: false};
    this.setState(newState);
  };

  render() {
    return (
      <Fragment>
        <IconFont/>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <SearchWrapper>
              <CSSTransition timeout={500} classNames="slide" in={this.state.focused}>
              <NavSearch className={classNames(this.state)} onFocus={this.handleInputFocused} onBlur={this.handleInputBlur}/>
              </CSSTransition>
              <i className={classNames('iconfont', this.state)}>&#xe637;</i>
            </SearchWrapper>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <Addition>
              <Button className="reg">注册</Button>
              <Button className="writing"><i className="iconfont">&#xe617;</i>写文章</Button>
            </Addition>
          </Nav>
        </HeaderWrapper>
      </Fragment>
    );
  }
}

export default Header;