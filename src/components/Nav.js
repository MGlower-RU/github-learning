import { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { DataContext } from './Context'

// New test branch comment
// Will is branch be upstreamed if i push without params (2 test)
export default function Navigation() {
  const { routingArray } = useContext(DataContext)

  return (
    <Nav defaultActiveKey="/" as="ul" className='mb-3'>
      {
        routingArray.map(({path, name}) => (
          <Nav.Item as="li" key={name}>
            <Nav.Link as={NavLink} to={path}>
              {name}
            </Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  )
}