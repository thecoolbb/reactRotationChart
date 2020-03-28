import React,{Component,Fragment} from 'react'
import '../scss/adWheel.scss'
class AdWheel extends Component{
    constructor(props){
        super(props);
        this.state={
            chooseIndex: 0,
            leftToRightWheel: true ,
            interval: null,
        }
    }
    adWheelFun(){
        if(this.state.chooseIndex===3){
            this.setState({
                leftToRightWheel: false,
            })
        }
        if(this.state.chooseIndex===0){
            this.setState({
                leftToRightWheel: true,
            })
        }
        var chooseIndex=this.state.chooseIndex;
        if(this.state.leftToRightWheel){
            this.setState({
                chooseIndex: chooseIndex+1
            })
        }else{
            this.setState({
                chooseIndex: chooseIndex-1
            })
        }
    }
    componentWillMount(){
        var interval = setInterval(this.adWheelFun.bind(this), 1500); 
        this.setState({interval});     
    }
    chooseFruite(index){
        this.setState({chooseIndex:index});
    }
    imgHover(){
        clearInterval(this.state.interval);
    }
    imgLeave(){
        var interval = setInterval(this.adWheelFun.bind(this), 1500); 
        this.setState({interval});
    }
    leftRightWheel(num){
        var chooseIndex;
        if(this.state.chooseIndex===0&&num===-1){
            chooseIndex = 3;
        }else{
            chooseIndex = (this.state.chooseIndex+num)%4;
        }
        this.setState({
            chooseIndex: chooseIndex
        })
    }
    render(){
        var adWheelConStyle={
            marginLeft: '-' + this.state.chooseIndex*100 + '%'
        }
        return (
            <Fragment>
                <div className="adWheelContainer" onMouseLeave={this.imgLeave.bind(this)} onMouseOver={this.imgHover.bind(this)}>
                    <div className="adWheelCon" style={adWheelConStyle}>
                        <img key="apple" src="imgs/apple.jpg" alt="苹果" title="苹果">
                        </img>
                        <img key="banana" src="imgs/banana.jpg" alt="香蕉" title="香蕉">
                        </img>
                        <img key="pineapple" src="imgs/pineapple.jpg" alt="榴莲" title="榴莲">
                        </img>
                        <img key="durian" src="imgs/durian.jpg" alt="菠萝" title="菠萝">
                        </img>
                    </div>
                    <button className="leftBtn" onClick={this.leftRightWheel.bind(this,-1)}>{'<'}</button>
                    <button className="rightBtn" onClick={this.leftRightWheel.bind(this,1)}>></button>
                    <div className="adButtonGroup">
                        <button className={`${this.state.chooseIndex===0?"choosedBtn":null}`} onMouseOver={this.chooseFruite.bind(this,0)}></button>
                        <button className={`${this.state.chooseIndex===1?"choosedBtn":null}`} onMouseOver={this.chooseFruite.bind(this,1)}></button>
                        <button className={`${this.state.chooseIndex===2?"choosedBtn":null}`} onMouseOver={this.chooseFruite.bind(this,2)}></button>
                        <button className={`${this.state.chooseIndex===3?"choosedBtn":null}`} onMouseOver={this.chooseFruite.bind(this,3)}></button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default AdWheel;
