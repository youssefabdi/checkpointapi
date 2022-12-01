import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function Detaill ({users})
{
  const { idd } = useParams();
  const oneUser = users.find( el => el.id == +idd )

    return (
    <div className="detail">
      <Card className='detail'>
      <Card.Body>
          < Card.Title > { oneUser.name } </Card.Title>
             < Card.Subtitle className="mb-2 text-muted" > { oneUser.email } </Card.Subtitle>
                < Card.Text > { oneUser.email } </Card.Text>
                < Card.Text > { oneUser.username} </Card.Text>
                < Card.Text > { oneUser.phone } </Card.Text>
                < Card.Text > { oneUser.street } </Card.Text>
                < Card.Text > { oneUser.suite } </Card.Text>
                < Card.Text > { oneUser.city } </Card.Text>
                < Card.Text > { oneUser.zipcode } </Card.Text>
                < Card.Text > { oneUser.lat } </Card.Text>
                < Card.Text > { oneUser.lng } </Card.Text>

                <Card.Link as={Link} to='/'>go to home</Card.Link>

                </Card.Body>
            </Card >

     </div>
    );

}