import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Title from './Title';
import RightMenu from './RightMenu'
import AdWheel from './AdWheel';
class ReactWebSite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuList: {
                Docs: [
                    {
                        title_name: 'INSTALLATION',
                        items: [
                            'Getting Started',
                            'Add React to a Website',
                            'Create a New React APP'
                        ]
                    },
                    {
                        title_name: 'MAIN CONCEPTS',
                        items: [
                            'Hello World',
                            'Introducing JSX',
                            'Rendering Elements'
                        ]
       
                    }
                ],
                Tutorial: [
                    {
                        title_name: 'INSTALLATION',
                        items: [
                            'Getting Started',
                            'Add React to a Website',
                            'Create a New React APP'
                        ]
                    },
                    {
                        title_name: 'MAIN CONCEPTS',
                        items: [
                            'Hello World',
                            'Introducing JSX',
                            'Rendering Elements'
                        ]
       
                    }
                ],
                Blog: [
                    {
                        title_name: 'INSTALLATION',
                        items: [
                            'Getting Started',
                            'Add React to a Website',
                            'Create a New React APP'
                        ]
                    },
                    {
                        title_name: 'MAIN CONCEPTS',
                        items: [
                            'Hello World',
                            'Introducing JSX',
                            'Rendering Elements'
                        ]
       
                    }
                ],
                Community: [
                    {
                        title_name: 'INSTALLATION',
                        items: [
                            'Getting Started',
                            'Add React to a Website',
                            'Create a New React APP'
                        ]
                    },
                    {
                        title_name: 'MAIN CONCEPTS',
                        items: [
                            '1.Hello World',
                            '2.Introducing JSX',
                            '3.Rendering Elements'
                        ]
       
                    }
                ]
            },
            chooseTab:"Docs",
            contentList:{
                Docs: {
                    heads: [
                        'Try React',
                        'Learn React',
                    ],
                    contents: [
                        {
                            head: 'Try React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        },
                        {
                            head: 'Learn React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        }
                    ]
                },
                Tutorial: {
                    heads: [
                        'Try React',
                        'Learn React',
                    ],
                    contents: [
                        {
                            head: 'Try React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        },
                        {
                            head: 'Learn React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        }
                    ]
                },
                Blog: {
                    heads: [
                        'Try React',
                        'Learn React',
                    ],
                    contents: [
                        {
                            head: 'Try React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        },
                        {
                            head: 'Learn React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        }
                    ]
                },
                Community: {
                    heads: [
                        'Try React',
                        'Learn React',
                    ],
                    contents: [
                        {
                            head: 'Try React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        },
                        {
                            head: 'Learn React',
                            head_content: 'aaaaaa',
                            small_content_lists:[
                                {
                                    small_head_item: '11111',
                                    small_content_item: 'bbb'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
    render(){
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Title></Title>
                <AdWheel></AdWheel>
                <Content contentList={this.state.contentList[this.state.chooseTab]}></Content>
                <RightMenu menuList={this.state.menuList[this.state.chooseTab]}></RightMenu>
                <Footer></Footer>
            </div>
        )
    }
}
export default ReactWebSite;
