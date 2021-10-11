/*
  It will give the name of the exchange rates
  User fetch method
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
        fetch("https://api.coingecko.com/api/v3/exchange_rates")
            .then(response => response.json())
            .then(
                (data)=>{
                    this.setState({
                        isLoaded: true,
                        members: data.rates
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
               
               {members.btc.name}
           </div>
          ); 
        }
    }
}

export default RestApiComponent;
