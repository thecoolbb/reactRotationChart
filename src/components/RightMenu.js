import React from 'react';
import ReactDom from 'react-dom';
import "../scss/rightMenu.scss"
class RightMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList : this.props.menuList,
        }
    }
    openCloseMenu(e){
        // console.log('eeeee',e.currentTarget.nextSibling)
        var target = e.currentTarget;
        var targetMenu = e.currentTarget.nextSibling;
        target.style.transform = target.style.transform == 'rotate(90deg)' ? 'rotate(-90deg)' : 'rotate(90deg)';
        targetMenu.style.display = targetMenu.style.display == 'none' ? 'block' : 'none';
    }
    render() {
        return (
            <div className='rightMenu'>
                {
                    this.state.menuList.map((item)=>{
                        return (
                            <div>
                                <label>{item.title_name}</label>
                                <div className='arrowTip' onClick={this.openCloseMenu.bind(this)} style={{ transform: 'rotate(90deg)'}}>></div>
                                <ul style={{display:'none'}}>
                                    {
                                        item.items.map((item)=>{
                                            return (
                                               <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default RightMenu;
