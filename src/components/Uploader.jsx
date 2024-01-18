import styled from 'styled-components'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { button } from '../utils/button'
import { FetchData } from '../api/'
import Uploader from '../api/upload.service'
import toast from 'react-hot-toast'



const DocumentUploader = () => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const handleInputClick = () => {
    inputRef.current.click();
  }

  const handleFilechange = (e) => {
    const file = e.target.files[0];
    setLoading(true);
    console.log(file)

    if (file) {

      const formData = new FormData();
      formData.append('File', file);

      const uploadDocument = FetchData(Uploader.uploadDocument(formData));

      toast.promise(uploadDocument, {
        loading: 'Porfavor espere...',
        success: (response) => {
          setLoading(false)
          return 'Documento Respaldado.'
        },
        error: e => `${e.message}`,
      });
    }
  };

  return (
    <>
      <Container>
        <input
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
          onChange={handleFilechange}
          ref={inputRef}
          type="file"
          name="File"
          id="File"
        />

        <Button
          onClick={handleInputClick}
          whileHover={button.Hover}
          whileTap={button.Tap}
          transition={button.transition}
        >
          Subir Archivo
        </Button>

      </Container>

    </>
  )
}

const Container = styled.div`
  position : relative;
  width : 100%;
  padding : 15px;
  border-radius : 5px;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  gap : 10px;

  input{
    display : none;
  }
`
const Button = styled(motion.button)`
    width : 150px;
    height : 40px;
    position : absolute;
    right : 5%;
    bottom : 5%;
    border-radius : 1em;
    background-color : var(--BlueHover);
    border: none;
    outline : none;

    &:hover{
        cursor : pointer;
        background-color : var(--BlueHover);
    }
`

export default DocumentUploader