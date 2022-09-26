import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const CatShow = ({ cats, deleteCat }) => {
    const { id } = useParams()
    const cat = cats.find(cat => cat.id === +id)
    const navigate = useNavigate()

    const handleDelete = () => {
        let userAnswer = window.confirm(`Are you sure you want to delete ${cat.name}?`)
        if (userAnswer) {
            alert(`${cat.name}'s profile has been deleted`)
            deleteCat(id)
            navigate('/catindex')
            navigate(0)
        }
    }
    
    return (
        <>
         <Card body style={{width: '18rem', margin: 'auto'}}>
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
                    <Button onClick={handleDelete}>Delete {cat.name}?</Button>
                </CardBody>
            </Card>    
        </>
    )
}

export default CatShow