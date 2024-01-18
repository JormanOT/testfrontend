import styled from "styled-components"
import TableFiles from "./TableFiles"
import DocumentUploader from "./Uploader"

const FilesContainer = () => {
    return (
        <Container>

            <TableFiles />

            <DocumentUploader />

        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    position : relative;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    background-color: white;
    height: 80vh;
    margin-top: 5em;
    box-shadow : var(--Shadow);
    border : 3px solid rgb(227 221 221);
    margin-right : 2em;
    padding : 1em;


    h1, h3{
      color : black;
    }
`


export default FilesContainer