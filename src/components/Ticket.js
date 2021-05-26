import React, {Component} from 'react';


class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsToShow: 5,
        };
        this.formatDate = this.formatDate.bind(this);
        this.formatEndDate = this.formatEndDate.bind(this);
        this.inWay = this.inWay.bind(this);
        this.showMoreTickets = this.showMoreTickets.bind(this);
        this.stopCount = this.stopCount.bind(this);
    }

    formatDate(time) {
        let hours = new Date(time).getHours();
        let minutes = new Date(time).getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (hours < 10) {
            hours = "0" + hours
        }
        return `${hours}:${minutes}`
    }

    formatEndDate(timeStart, duration) {
        let start = this.formatDate(timeStart)
        let time1 = new Date(timeStart);
        let end = new Date(+time1 + duration * 6e4);
        let hours = new Date(end).getHours();
        let minutes = new Date(end).getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (hours < 10) {
            hours = "0" + hours
        }
        return `${start} – ${hours}:${minutes} `
    }

    inWay(duration) {
        let hours = Math.floor(duration / 60);
        let minutes = duration - (hours * 60);
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        return `${hours}ч ${minutes}м`
    }

    stopCount(stopArray) {
        let stopLength = stopArray.length;
        switch (stopLength) {
            case 0:
                return 'без пересадок';
            case 1:
                return '1 пересадка';
            case 2:
                return '2 пересадки';
            case 3:
                return '3 пересадки';
            default:
                return 'без пересадок';
        }
    }

    showMoreTickets() {
        this.setState({itemsToShow: this.state.itemsToShow + 5});
    }

    render() {
        return (
            <>
                {
                    this.props.ticketInfo.slice(0, this.state.itemsToShow).map(({price, carrier, segments}) => (
                        <div className="ticket">
                            <div className="ticket_price-and-logo">
                                <span className="ticket_price">{`${price} P`}</span>
                                <img className="ticket_logo" src={`//pics.avs.io/99/36/${carrier}.png`}
                                     alt="logotype company"/>
                            </div>
                            <div className="ticket-segment__route">
                                <div className="route_block">
                                    <div
                                        className="route_from">{`${segments[0].origin} - ${segments[0].destination}`}</div>
                                    <div
                                        className="route_from_date">{this.formatEndDate(segments[0].date, segments[0].duration)}</div>
                                </div>
                                <div className="route_block">
                                    <div className="route_from_duration_header">В пути</div>
                                    <div
                                        className="route_from_duration">{this.inWay(segments[0].duration)}</div>

                                </div>
                                <div className="route_block">
                                    <div
                                        className="route_from_stop_header">{this.stopCount(segments[0].stops)}</div>
                                    <div className="route_from_stop">{segments[0].stops.join(', ')}</div>
                                </div>
                            </div>
                            <div className="ticket-segment__route">
                                <div className="route_block">
                                    <div
                                        className="route_to">{`${segments[1].origin} - ${segments[1].destination}`}</div>
                                    <div
                                        className="route_to_date">{this.formatEndDate(segments[1].date, segments[1].duration)}</div>
                                </div>
                                <div className="route_block">
                                    <div className="route_to_duration_header">В пути</div>
                                    <div className="route_to_duration">{this.inWay(segments[1].duration)}</div>
                                </div>
                                <div className="route_block">
                                    <div
                                        className="route_to_stop_header">{this.stopCount(segments[1].stops)}</div>
                                    <div className="route_to_stop">{segments[1].stops.join(', ')}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <button className="show-more" onClick={this.showMoreTickets}>Показать еще 5 билетов!</button>
            </>
        )
    }
}

export default Ticket