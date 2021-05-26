import React, {Component} from 'react';
import main from "../styles/main.css"
import logoFlight from "../img/Logo.svg"
import TicketFilter from "./TicketFilter";
import Ticket from "./Ticket";
import TicketSorting from "./TicketSorting";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchId: '',
            isLoading: false,
            result: [],
        }

    }

    componentDidMount() {
        fetch("https://front-test.beta.aviasales.ru/search")
            .then(data => data.json())
            .then(data => this.setState({searchId: data.searchId}));

        let search = setInterval(() => {
            if (this.state.isLoading) {
                clearInterval(search)
            }

            fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.state.searchId}`)
                .then(data => data.json())
                .then(data => {
                        this.setState({isLoading: data.stop})
                        this.setState({result: data.tickets})
                    }
                );

        }, 100);


    }

    render() {
        let {isLoading, result} = this.state;
        return (
            <>
                <div className="container">
                    <img className="main-logo" src={logoFlight} alt="logotype tickets"/>
                    <div className="flex-container">
                        <div className="left-block">
                            <TicketFilter ticketInfo={this.state.result}/>
                        </div>
                        <div className="right-block">
                            <TicketSorting/>
                            <Ticket ticketInfo={this.state.result}/>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Main