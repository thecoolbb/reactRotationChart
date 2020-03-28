import React from 'react';
import '../scss/Title.scss'
// import "../font-awesome.min.css"
class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heads: [
                'Docs',
                'Tutorial',
                'Blog',
                'Community'
            ],
            chooseTab: 'Docs',
            version:'v16.9.0',
        }
    }
    searchClick(){
        var searchInput = document.getElementById('searchInput');
        searchInput.style.display = 'inline';
    }
    render() {
        return (
            <div className='header'>
                <div className='headerName'>
                    <i className = "fa fa-table"> </i>
                    <label>React</label>
                </div>
                {
                    this.state.heads.map((head)=>{
                        return (
                            <button className={this.state.chooseTab == head ? 'buttonGroup buttonChoosed' : 'buttonGroup'}>
                                {head}
                            </button>
                        )
                    })
                }
                <div className='searchInput'>
                    <button onClick={this.searchClick} className='searchButton'>222</button>
                    <input type='search' id='searchInput' placeholder='Search' className='userInput'></input>
                </div>
                <label className='versionclassName'>{this.state.version}</label>
                <div className='languages'>
                    <img></img>
                    <label>Languages</label>
                </div>
                <div className='shareSite'>
                    <label>Github</label>
                    <img></img>
                </div>
            </div>
        )
    }
}
export default Title;
