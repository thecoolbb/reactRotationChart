import React from 'react';
import "../scss/content.scss"
import TitleContent from "./TitleContent"
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentList: this.props.contentList
        }
    }
    componentWillMount()
    {
       
    }
    render() {
        return (
            <div className='content'>
                <h1>Getting Started</h1>
                <p></p>
                <p></p>
                <br></br>
                <ul>
                {
                    this.state.contentList.heads.map((head)=>{
                        return (
                            <li>{head}</li>
                        )
                    })
                }
                </ul>
                <div>
                    {
                        this.state.contentList.contents.map((content)=>{
                            return (
                                <TitleContent content={content}></TitleContent>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Content;