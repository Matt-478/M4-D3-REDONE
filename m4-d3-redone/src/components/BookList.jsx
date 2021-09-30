import {Container, Col, Row} from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = (props) => (
  <Container>
    <Row>
      {
        props.books.map(b => (
          <Col xs={3}>
            <SingleBook book={b}/>
          </Col>
          )
        )
      }
    </Row>
  </Container>
)

export default BookList