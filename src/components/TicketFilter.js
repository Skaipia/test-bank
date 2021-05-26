import React, {Component} from 'react';
import Ticket from "./Ticket";


class TicketFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stops: [
                {id: 1, name: "Все", checked: true},
                {id: 2, name: "Без пересадок", checked: true},
                {id: 3, name: "1 пересадка", checked: true},
                {id: 4, name: "2 пересадки", checked: true},
                {id: 5, name: "3 пересадки", checked: true},
            ],
            checked: true,
            result: [],
        };
        this.onToggle = this.onToggle.bind(this);
        this.filterStops = this.filterStops.bind(this);
    }

    filterStops(checkedItem) {

    }

    onToggle(index) {
        let newItems = this.state.stops.slice();
        newItems[index].checked = !newItems[index].checked;
        this.setState({
            stops: newItems
        });
        this.filterStops(newItems[index])
    }

    render() {
        return (
            <>
                <div className="filter">
                    <h3 className="filter_header">Количество пересадок</h3>
                    <div className="filter_controls">
                        {this.state.stops.map((item, acc) =>
                            <label className="filter_label">
                                <input key={item.id} className="filter_input" type="checkbox"
                                       defaultChecked={this.state.checked}
                                       onChange={this.onToggle.bind(this, acc)}/>{item.name}
                            </label>
                        )}
                    </div>
                </div>
                {/*<Ticket ticketInfo={this.state.result}/>*/}
            </>
        )
    }
}

export default TicketFilter