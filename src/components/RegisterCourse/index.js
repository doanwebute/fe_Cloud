import React from 'react'

import { Wrapper,  Course,HeaderList} from './RegisterCoursestyles';


import HeaderListSinhVien from './HeaderListKH';
import TableKH from './TableKH'
const RegisterCourse = () =>{   
    
    return(
        <Wrapper>        
            <HeaderList><HeaderListSinhVien/></HeaderList>        
            <Course><TableKH></TableKH></Course>
        </Wrapper>
    )
}


export default RegisterCourse;