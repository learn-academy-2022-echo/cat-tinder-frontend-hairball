import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const CatIndex = ({ cats }) => {

    return (

        <div className="cat-cards">
        { cats.map(cat => {
            return (
                
            <Card body style={{width: '18rem'}}
            >
                <img
                    alt="Cat Image"
                    src={cat.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {cat.name}
                    </CardTitle>
                    <NavLink to={`/catshow/${cat.id}`}>
                        <Button>
                        Meet {cat.name}
                        </Button>
                    </NavLink>
                </CardBody>
            </Card>    
            )
        }) }
        </div>

    )
}

export default CatIndex