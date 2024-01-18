import styled from "styled-components"
import FileCard from "./FileCard";
import { PDF, Word, PowerPoint, Excel } from '../assets/';
import { useEffect, useState } from 'react'
import { FetchData } from '../api/'
import Uploader from '../api/upload.service'

const Files = [
    { name: 'test', image: PDF },
    { name: 'Datos de prue...', image: Word },
    { name: 'archivo 1', image: PowerPoint },
    { name: 'informacion', image: Excel },
    { name: 'test', image: PDF },
    { name: 'Datos de prue...', image: Word },
    { name: 'archivo 1', image: PowerPoint },
    { name: 'informacion', image: Excel },
    { name: 'test', image: PDF },
    { name: 'Datos de prue...', image: Word },
    { name: 'archivo 1', image: PowerPoint },
    { name: 'informacion', image: Excel },
    { name: 'test', image: PDF },
    { name: 'Datos de prue...', image: Word },
    { name: 'archivo 1', image: PowerPoint },
    { name: 'informacion', image: Excel }
]

const TableFiles = () => {
    const [document, setDocument] = useState(null);
    const [loading, setLoading] = useState(false)

    const getDocuments = async () => {
        setLoading(true)
        const data = await FetchData(Uploader.getDocument());
        setDocument(data);
        setLoading(false)
    }

    useEffect(() => {
        getDocuments();
    }, [])


    if (loading) return <h1>Cargando..</h1>


    return (
        <Container>
            {document?.map((file, i) => (
                <FileCard data={file} key={i} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    width : 100%;
    height : 80%;
    padding : 1em;
    display : grid;
    grid-template-columns: repeat(auto-fit,minmax(130px,1fr));
    overflow-y : scroll;
    gap : .7em;
`

export default TableFiles