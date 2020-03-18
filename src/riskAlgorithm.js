export default function riskAlgorithm(ticketId, tickets) {
  const stuff = { "ticket id": ticketId, "tickets arr": tickets };
  tickets.map(ticket => {});

  return stuff;
}

///// * if the ticket is the only ticket of the author, add 10%

// in SingleTicket I have the userId and the "author" property
// I also have the tickets arr.
// map over tickets and count the amout of tickets from that user

///// * if the ticket price is lower than the average ticket price for that event, that's a risk

// map over the tickets arr th get the price and calculate the average

/////    * if a ticket is X% cheaper than the average price, add X% to the risk
/////	  * if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction

// then use the average to increase or decrease the %

///// * if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
//  within SingleTicket I have the createdAt.

///// * if there are >3 comments on the ticket, add 5% to the risk
// do like in the CommentSection:  map over all comments and compare comment.ticketId to that specific ticketId
// (probably getting it by props); then count it

///// The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.

///// The calculated risk of a ticket depends on many factors. Make sure that the risk value is always "live" (i.e. up to date).

///// > "We calculated that the risk of this ticket being a fraud is XX%"
