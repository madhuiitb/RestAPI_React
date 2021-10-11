/*
Large public digital archive
It shows the large public digital library which gives 
the size of the file
the name of the file
the sha1 md5's and etc.
In this used fetch method
*/

import React from 'react';

class RestApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            members: []
        };
    }

    componentDidMount(){
        fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303")
            .then(response => response.json())
            .then(
                (data)=>{
                    this.setState({
                        isLoaded: true,
                        members: data.files
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render(){
        const {error, isLoaded, members} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{
          return(
           <div>
               
               {members.map(item=>
                <li key={item.id}>
                    {item.name}{"-->"} 
                    {item.size} {"==>"}
                    {item.format}
                </li>
                )}
           </div>
          ); 
        }
    }
}

export default RestApiComponent;
