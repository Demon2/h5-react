import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {
  Container,
  Group,
  Modal,
  Accordion,
  Slider,
} from 'amazeui-touch';

var HelloMessage = React.createClass({  
    getDragonKillingSword: function(){  
        alert("OK");  
    },  
  render: function() {  
    return <div> <h1>Hello {this.props.name}</h1>  <button onClick={this.getDragonKillingSword}>OK</button></div>  
  }  
});  
  
  
var ImDaddyComponent = React.createClass({  
    getDS: function(){  
        //父组件调用子主键进行通信  
        this.refs.getSwordButton.getDragonKillingSword();  
    },  
    render: function(){  
        return (  
            <div>  
                <HelloMessage name="John" ref="getSwordButton" />  
                <button onClick={this.getDS}>OK2</button>  
            </div>  
        );  
    }  
});  


export default class Doing extends React.Component {

  goNext() {
    this.refs.doingSlider.next();  
  }

  goPrev() {
    this.refs.doingSlider.prev();
  }
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <a onClick={ev=>this.goPrev()}>上一题</a>
          <a onClick={ev=>this.goNext()}>下一题</a>
          <Slider controls={false} pager={false} autoPlay={false} loop={false} ref="doingSlider">
            <Slider.Item>
              1、单选题
              题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的
            </Slider.Item>
            <Slider.Item>
              2、单选题
              题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的
            </Slider.Item>
            <Slider.Item>
              3、单选题
             题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的
            </Slider.Item>
            <Slider.Item>
              4、单选题
              题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息 题干信息
              说的是德国官方代购阿双方撒发的发生的发生地方
              史蒂夫到沙发上的
            </Slider.Item>
          </Slider>
        </Group>
      </Container>
    );
  }
}