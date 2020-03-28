import React from 'react';
// import "../font-awesome.min.css"
class TitleContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }
    render() {
        return (
            <div>
                <hr></hr>
                <h3>{this.state.content.head}</h3>
                <p>{this.state.content.head_content}</p>
                {this.state.content.small_content_lists.map((item)=>{
                    return (
                        <div>
                            <h4>{item.small_head_item}</h4>
                            <p>{item.small_content_item}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TitleContents;