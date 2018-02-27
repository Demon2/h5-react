import React,{Component} from 'react';
import {Link} from 'react-router'
 
export   class GroupItem extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      checked: -1,
      height: 0,
    };
  }

  sonGetInto(id){
    this.setState({
      checked: id == this.state.checked ? -1 : id,
      height: 100,
    })
  }

  render() {
    let items = this.props.items; 
    let arr =  [];
    var that = this;
    items.forEach(function(item , index){
      var checked = false;
      if(item.id == that.state.checked ) {
        checked = true;
      }
      var temp = (<Item items = { item } key = { index } checked={ checked } index = { 0 } getInto= {id=>that.sonGetInto(id)}></Item>);
      arr.push(temp);
    });
    return(
      <div className="accordion">
        { arr }
      </div>
    );
  }
}
export  class Item extends Component {
  constructor(prop) {
    super(prop); 
    this.state = {
      id: this.props.items.id,
      checked: -1,
      height: 0,
    };
  }

  sonGetInto(id){
    this.setState({
      checked: id == this.state.checked ? -1 : id,
      height: 100,
    })
  }

  send(e) {
    this.props.getInto(this.state.id);
    e.preventDefault();
    e.stopPropagation();
  }

  render(){
    let subs = this.props.items.subs; 
    let index = this.props.index;
    let checked = this.props.checked;

    let sonIndex = index + 1; 
    let px = index * 10;
    px = px + 'px';
   
    let subsarry = [];
    if(subs) {
      const that = this; 
      subs.forEach(function(item , index){
        var checked = false; 
        if( item.id == that.state.checked ) {
          checked = true;
        }
        var temp = (<Item index = { sonIndex } items = { item } checked={ checked } key={index} getInto= { id=>that.sonGetInto(id)}></Item>);
        subsarry.push(temp);
      });
    }
    return (
      <div style = { {marginLeft: px } } className={`accordion-item ${checked ? 'active':""}`} id = { this.props.items.id } onClick = { this.send.bind(this) }>
        <div className="accordion-title">{this.props.items.name}<Link to="/Doing">去做题</Link></div>
        <div className={`${checked ? 'in':""} ${"accordion-body collapse"}`} style={{height:this.state.height+"px"}}>{subsarry}</div>
      </div>
    )
  }
}