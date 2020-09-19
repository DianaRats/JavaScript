function solve(params) {
    params.pop();
    let events = {};
   
    for (let param of params) {
      let [id, eventName, ...participants] = param.split(" ");
   
      if (!eventName.includes("#")) {
        continue;
      }
   
      if (!events.hasOwnProperty(id)) {
        events[id] = {
          eventId: id,
          eventName: eventName,
          participants: []
        };
      }
   
      if (events[id].eventId === id && events[id].eventName === eventName) {
        participants.forEach(participant => {
          if (!events[id].participants.includes(participant)) {
            events[id].participants.push(participant);
          }
        });
      }
    }
   
    Object.entries(events)
      .sort((a, b) => b[1].participants.length - a[1].participants.length)
      .forEach(event => {
        console.log(
          `${event[1].eventName.slice(1)} - ${event[1].participants.length}`
        );
        event[1].participants
          .sort((a, b) => a.localeCompare(b))
          .forEach(participant => console.log(participant));
      });
  }
  solve(['1 #Beers @roli @trophon @alice',
    '2 #GameDevMeetup @sino @valyo',
    '3 #Karaoke @nakov @royal @ROYAL @ivo',
    'Time for Code'
    ])