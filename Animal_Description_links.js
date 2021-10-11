/*

this rest api is for giving the animals category and link for them
and it gives the small description about that category 


Used fetch rest api method
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
       fetch("https://api.publicapis.org/entries")
        .then(response=>response.json())
        .then(
            (data)=>{
                this.setState({
                    isLoaded: true,
                    members: data.entries
                });
            },    
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
                    {item.API}{"-->"} 
                    {item.Description} {"==>"}
                    {item.Link}
                </li>
                )}
           </div>
          ); 
        }
    }
}

export default RestApiComponent;
