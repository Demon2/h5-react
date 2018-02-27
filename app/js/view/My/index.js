import React , { Component,PropTypes } from 'react';
import {
  Container,
  Group,
  Slider,
  List,
} from 'amazeui-touch';

var TreeNode = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },
  render: function() {
    var childNodes;
    var classObj;

    if (this.props.node.childNodes != null) {
        childNodes = this.props.node.childNodes.map(function(node, index) {
      return <li key={index}><TreeNode node={node} /></li>
  });

  classObj = {
    togglable: true,
    "togglable-down": this.state.visible,
    "togglable-up": !this.state.visible
  };
}

var style;
if (!this.state.visible) {
  style = {display: "none"};
}

return (
  <div>
    <h5 onClick={this.toggle}  >
      {this.props.node.title}
    </h5>
    <ul style={style}>
      {childNodes}
    </ul>
  </div>
);
  },
  toggle: function() {
    this.setState({visible: !this.state.visible});
  }
});

var tree = {
  title: "中国",
  childNodes: [
    {title: "河北",
  childNodes: [
      {title: "济南", childNodes: [
        {title: "泉城路"}
      ]},
      {title: "泰安"}
    ]},
    {title: "山东", childNodes: [
      {title: "济南", childNodes: [
        {title: "泉城路"}
      ]},
      {title: "泰安"}
    ]}
  ]
};

const sliderIntance = (
  <Slider>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
    </Slider.Item>
  </Slider>
);

class OpacityWord extends Component{
  constructor(){
    super();
    this.state={
      opacity:1.0
    }
  }
  
  componentWillMount(){
    let time  =  setInterval(()=>{
      let opacity = this.state.opacity;
      opacity -= 0.5;
      if (opacity<0.1) {
        opacity=1.0;
      }
      this.setState({opacity:opacity});
    },100);
  }

  render(){
    return (
      <div style={{ opacity:this.state.opacity }}>
        Hello, {this.props.name}!
      </div>
    );
  }

}

export default class My extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container {...this.props}>
        <Group>
           <TreeNode node={tree} />
        </Group>
      </Container>
    );
  }
}