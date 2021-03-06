import styled from 'styled-components';
import logo from './logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/',
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 1050px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  
  &.right {
    float: right;
    color: #969696;
  }
  
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  overflow: hidden;
  position: relative;
  
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  
  
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder: #999;
  
  &.slide-enter {
    transition: all .5s ease-out;
  }
  
  &.slide-enter-active {
    width: 200px;
  }
  
  &.slide-exit {
    transition: all .5s ease-out;
  }
  
  &.slide-exit-active {
    width: 160px;
  }
  
  &.focused {
    width: 200px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 30px;
  border: 1px solid #ec6149;
  font-size: 14px;
  
  &.reg {
    color: #ec6149;
  }
  
  &.writing {
    color: #fff;
    background: #ec6149;
  }
  
  .iconfont {
    margin-right: 15px;
    font-size: 15px;
  }
`;