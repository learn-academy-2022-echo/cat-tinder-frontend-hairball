import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const CatIndex = ({ cats }) => {

    return (

        <div className="cat-cards">
        { cats.map((cat, index) => {
            return (
            <Card body style={{width: '18px'}} key={index}>
                <img
                    alt="Cat Image"
                    src={cat.image}
                    style={{width:'90%', margin: 'auto', borderRadius: '10px'}}
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