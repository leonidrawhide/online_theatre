import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import './styles.css'

const AdminPage = () => {
    const [name, setName] = useState('')
    const [description, setDesc] = useState('')
    const [concept, setConcept] = useState('')
    const [iframeLink, setIframeLink] = useState('')
    const [linkPicture, setPoster] = useState('')
	const [removeId, setId] = useState(0)
    const dispatch = useDispatch()

	const next = useSelector(state => state.filmList[state.filmList.length - 1])
	console.log(next)
	

    const addProduct = (e) => {
        e.preventDefault()
		console.log("Adding film")
		let nextId = 1
		if (next) {
			nextId = next.id + 1
		}
        const data = {
            id: nextId,
			idMovie: "",
			name: name,
			concept: concept,
			description: description,
			linkPicture: linkPicture,
			iframeLink: iframeLink
        }
        dispatch({type:'ADD_MOVIE', data})
    }

	const removeProduct = (e) => {
		e.preventDefault()
		console.log("removing film " + removeId)
		const id = removeId
		dispatch({type: 'REMOVE_MOVIE', id})
	}

    return (
            <Container className="admin-page">
                <Form className="admin-page__form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Название</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="text"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Краткое описание в два слова</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="text"
                            value={description}
                            onChange={e=>setDesc(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Полное описание</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="text"
                            value={concept}
                            onChange={e=>setConcept(e.target.value)}/>
                    </Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ссылка на плакат (прямая ссылка на картинку)</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="text"
                            value={linkPicture}
                            onChange={e=>setPoster(e.target.value)}/>
                    </Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ссылка на фильм (прямая ссылка на видео)</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="text"
                            value={iframeLink}
                            onChange={e=>setIframeLink(e.target.value)}/>
                    </Form.Group>
                    <Button
						className="admin-page__form_button"
                        variant="primary"
                        type="submit"
                        onClick={addProduct}
                    >
                        Submit
                    </Button>
                </Form>
				<Form className='admin-page__form'>
				<Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Выберите фильм который хотите удалить</Form.Label><br/>
                        <Form.Control
							className='admin-page__form_control'
                            type="number"
                            value={removeId}
                            onChange={e=>setId(e.target.value)}/>
                    </Form.Group>
                    <Button
						className="admin-page__form_button"
                        variant="primary"
                        type="submit"
                        onClick={removeProduct}
                    >
                        Delete
                    </Button>
				</Form>
            </Container>
    );
};

export default AdminPage;
