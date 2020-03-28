import React,{Component,Fragment} from 'react';
import "../scss/footer.scss"
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List: [
                {
                    head: 'DOCS',
                    listMenu: [
                        'Installation',
                        'Main Concepts'
                    ]
                },
                {
                    head: 'CHANNELS',
                    listMenu: [
                        'Github',
                        'Stack Overflow'
                    ]
                }
            ]

        }
    }
    render() {
        return (
            <div className='footer'>
                <div className='footerTop'>
                    <label className='topLabel'>Next article</label>
                    <a className='topA' href=''>Add React to a Website</a>
                </div>
                <div className='footerBottom'>
                    <i></i>
                    <label>Facebook Open Source</label>
                    <label>Copyright</label>
                    {/* <div className='bottomList'> */}
                        {
                            this.state.List.map((item)=>{
                                return (
                                    <Fragment>
                                        <h4>{item.head}</h4>
                                        <ul>
                                            {item.listMenu.map((item)=>{
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </Fragment>
                                )
                            })
                        }
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
export default Footer;