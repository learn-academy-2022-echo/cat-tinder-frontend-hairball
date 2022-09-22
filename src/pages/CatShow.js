import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'

const CatShow = ({ cats }) => {
    const { id } = useParams()
    const cat = cats.find(cat => cat.id === +id)
    
    return (
        <>
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
                    <CardText>
                        {cat.age} years old
                        <br/>
                        {cat.name} enjoys {cat.enjoys}
                    </CardText>
                    
                    <NavLink to={`/catedit/${cat.id}`}>
                        <Button>
                        Edit {cat.name}'s Profile
                        </Button>
                    </NavLink>
                    
                </CardBody>
            </Card>    
        </>
    )
}

export default CatShow