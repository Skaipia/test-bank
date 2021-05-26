import React, {Component} from 'react';


class TicketSorting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="sorted-penal">
                    <a className="sorted-penal_item" href="">Самый дешевый</a>
                    <a className="sorted-penal_item" href="">Самый быстрый</a>
                    <a className="sorted-penal_item" href="">Оптимальный</a>
                </div>
            </>
        )
    }
}

export default TicketSorting