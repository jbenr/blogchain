import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Link from 'next/link'
import {Overlay} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';

const localizer = momentLocalizer(moment);

function Event({ event }) {
  let popoverClickRootClose = (
    <Popover
      id="popover-trigger-click-root-close"
      style={{
        zIndex: 10000,
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        padding: 5,
        border: "1px solid black",
        borderRadius: 12,
      }}>
          <strong>{event.title}</strong>
          <br/>
          <br/>
          <p>{event.description}</p>
    </Popover>
  );

  console.log(event);
  return (
    <div>
      <div>
        <OverlayTrigger id="help" trigger="click" rootClose container={this} placement="top" overlay={popoverClickRootClose}>
          <div>{event.title}</div>
        </OverlayTrigger>
      </div>
    </div>
  );
}

class BigCalendar extends Component {
  constructor() {
    super();
    const now = new Date();
    const events = [
      {
          id: 1,
          title: 'Today',
          start: now,
          end: now,
          description: 'The date is: ' + (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear()
      },
      {
          id: 2,
          title: 'Blockchain 101',
          start: new Date(2020, 8, 15, 17, 0),
          end: new Date(2020, 8, 15, 18, 30),
          description: 'Introduction to Blockchain@IU and blockchain technology'
      }
    ]
    this.state = {
      name: 'React',
      events
    };
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
        <h2 style={{textAlign: 'center',
                    color: 'red',}}>
          Blockchain@IU Calendar
        </h2>
        <div style={{ height: '500pt',
                      marginLeft: 40,
                      marginRight: 40,}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
            components={{
              event: Event
            }}
            eventPropGetter={event => ({
              style: {
                backgroundColor: 'red',
              },
            })}
          />
        </div>
      </div>
    );
  }
}

export default BigCalendar;
