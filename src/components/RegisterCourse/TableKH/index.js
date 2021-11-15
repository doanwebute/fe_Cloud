import React  from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal} from 'react-bootstrap';


const TableKH = ()=>{    
    return(
      <Table striped  hover size="sm" style={{marginLeft:'1%'}}>
        <thead>
          <tr>
            <th></th>
            <th>Môn</th>
            <th>Nội dung</th>
            <th>Số lượng</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
          <td>1</td>
          <td>Toán</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Button>Đăng ký</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Lý</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Button>Đăng ký</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hóa</td>
          <td>Bazo</td>
          <td>@twitter</td>
          <td><Button>Đăng ký</Button></td>
        </tr> 
        </tbody>
        
                          
                          
                  
      </Table>
      
    )
}

export default TableKH;