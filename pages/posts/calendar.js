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
          <div style={{display: 'flex', flexDirection: 'row', color: 'black'}}>
              {event.image}  {event.title}
          </div>
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
          description: 'The date is: ' + (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear(),
          image: <img src="/favicon.png" style={{width: 30, height: 30, marginRight: 5}} />
      },
      {
          id: 2,
          title: 'Blockchain 101',
          start: new Date(2020, 8, 15, 17, 0),
          end: new Date(2020, 8, 15, 18, 30),
          description: 'Introduction to Blockchain@IU and blockchain technology',
          image: <img src="/favicon.png" style={{width: 30, height: 30, marginRight: 5}} />
      },
      {
          id: 3,
          title: 'Courses Begin',
          start: new Date(2020, 8, 21, 17, 0),
          end: new Date(2020, 8, 21, 18, 0),
          description: "Tenative start to our Business Applications and Development courses. Learn more about our courses at Blockchain101 on September 15th!",
          image: <img src="/favicon.png" style={{width: 30, height: 30, marginRight: 5}} />
      },
      {
          id: 99,
          title: 'Semester Begins',
          start: new Date(2020, 7, 24),
          end: new Date(2020, 7, 24),
          description: 'Start of Fall 2020 Semester.',
          image: <img src="/iu.png" style={{width: 25, height: 30, marginRight: 5}} />
      },
      {
          id: 100,
          title: 'Thanksgiving Break',
          start: new Date(2020, 10, 23),
          end: new Date(2020, 10, 28),
          description: 'Thanksgiving Break. No Classes.',
          image: <img src="/iu.png" style={{width: 25, height: 30, marginRight: 5}} />
      },
      {
          id: 101,
          title: 'Final Exams',
          start: new Date(2020, 11, 14),
          end: new Date(2020, 11, 19),
          description: "Final exams and end of Fall 2020 semester",
          image: <img src="/iu.png" style={{width: 25, height: 30, marginRight: 5}} />
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
        <div style={{ display: 'flex',
                      flexDirection: 'row',
                      marginBottom: 30,
                      marginTop: 10,
                      marginLeft: 40}}>
          <img
              src="/favicon.png"
              style={{ width: '5rem',
                       heigh: '5rem',}}
          />
          <h2 style={{textAlign: 'center',
                      color: "#990000",
                      marginLeft: 15}}>
            Blockchain@IU Calendar
          </h2>
          <div style={{ width: 500 }}></div>
          <a href="https://linktr.ee/blockchainIU">
            <img src="/linkIcon.png"
                 style={{ width: '20rem', height: '3rem'}} />
          </a>
        </div>
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
                backgroundColor: "#FFFFFF",
                border: "2px solid #990000"
              },
            })}
          />
        </div>
      </div>
    );
  }
}

export default BigCalendar;
