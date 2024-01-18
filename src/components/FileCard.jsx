import styled from "styled-components"
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { PDF, Word, PowerPoint, Excel } from '../assets/';
import { Link } from 'react-router-dom'

const FileCard = ({ data }) => {
    const [showTools, setShowTools] = useState(false);

    const typesDoc = {
        ".pdf": PDF,
        ".doc": Word,
        ".docx": Word,
        ".xls": Excel,
        ".xlsx": Excel,
        ".ppt": PowerPoint,
        ".pptx": PowerPoint
    }

    console.log(data)

    return (
        <Container>
            <Image src={typesDoc[data?.type]} alt="FileLogo" />
            <span>{data?.name.length > 15 ? `${data?.name.slice(0, 15)}...` : data?.name}</span>

            <Dots
                onMouseEnter={() => setShowTools(s => !s)}
                color="black"
            />

            {showTools && (
                <Tools
                    onMouseLeave={() => setShowTools(s => !s)}
                >
                    <Link
                        to={`https://cloud-object-storage-wo-cos-standard-kjy.s3.us-south.cloud-object-storage.appdomain.cloud/${data?.name}`}
                    >
                        <li>
                            <HiOutlineDownload />
                            <span>Descargar</span>
                        </li>
                    </Link>

                </Tools>
            )}
        </Container>
    )
}

const Container = styled.div`
    position : relative;
    width : 130px;
    height : 100px;
    padding : 1em;
    border-radius : 1em;
    box-shadow : var(--Shadow);
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : .5em;

    span{
        color : gray;
        font-size : .8rem;
    }
`
const Dots = styled(BsThreeDots)`
    position : absolute;
    top : 5%;
    right : 10%;

    &:hover{
        cursor : pointer;
    }
`
const Image = styled.img`
    width : 100%;
    height : 70%;
    object-fit : cover;
`
const Tools = styled.ul`
    position : absolute;
    top : 15%;
    right : 5%;
    width : 120px;
    height : 25px;
    border-radius : 1em;
    box-shadow : var(--Shadow);
    background-color : white;

    li{
        display : flex;
        flex-direction : row;
        justify-content : start;
        align-items : center;
        gap: 1em;
        max-width : 200px;
        text-decoration : none;
        list-style : none;
        font-size : .9rem;
        font-weight : 600;
        transition : .3s all ease;
        color : black;
        padding-left : 1em;
        border-radius : 1em;

        &:hover{
            cursor : pointer;
            background-color : var(--Blue);
            color : white;

            span{
                color : white;
            }
        }
    }
`

export default FileCard