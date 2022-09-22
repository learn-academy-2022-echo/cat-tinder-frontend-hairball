import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CatNew = ({createCat}) => {
    
    const navigate = useNavigate()

    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleCats = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        createCat(newCat)
        console.log(newCat)
        alert("Cat has been added!")
        navigate('/catindex')
    }

    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Add a cat</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Enter your cat's name</Label>
                    <Input type="text" name="name" placeholder="Enter text here" onChange={handleCats} value={newCat.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Enter your cat's age</Label>
                    <Input type="number" name="age" placeholder="Enter text here" onChange={handleCats} value={newCat.age} onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 ) && e.preventDefault() }/>
                </FormGroup>
                <FormGroup>
                    <Label for="enjoys">Does your cat have any quirky interests?</Label>
                    <Input type="text" name="enjoys" placeholder="Enter text here" onChange={handleCats} value={newCat.enjoys}/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL for your cat</Label>
                    <Input type="url" name="image" placeholder="Enter URL here" onChange={handleCats} value={newCat.image}/>
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default CatNew