import React from 'react';

import { Card } from 'react-bootstrap';

export default class NewsCard extends React.Component {
    render() {
        return (
            <Card body className={"stock-card " + this.props.curr.toLowerCase().replace(' ', '-')}>
                <Card.Title><h5>{this.props.stock + ' ' + this.props.curr} <small className="text-muted">{this.props.date.format('MMMM D, YYYY')}</small></h5></Card.Title>
                <Card.Text>
                    {this.props.text}
                </Card.Text>
            </Card>
        )
    }
}