import React, {Component} from "react";
import IRequest from "./IRequest"
import GetDataRequest from "./DataRequest";
import { Task } from "@mui/icons-material";

export class TestComponent extends Component{

    static displayName=TestComponent.name;

    constructor(props){
        super(props);
        this.state={requests:[], loading:true};
    }

    componentDidMount(){
        this.populatedRequests();
    }

    async populatedRequests(){
        
        const reqs=await fetch('request');
        const data =await reqs.json();
        this.setState({requests:data, loading:false});
    }

    render(){
        let content = this.state.loading ? <p><em>Загрузка данных</em></p>:
            <GetDataRequest data={this.state.requests}></GetDataRequest>;
        return(        

            <div>
                {content}
            </div>
        )
    }
}