
import {useNavigate} from 'react-router-dom';

const ScriptContainer = (props) =>{

    const navigate = useNavigate()

    return (
      <>
        <h2> Perscriptions List </h2>
        <table>
        <tbody>
          <tr>
            <th>Prescription Name</th>
            <th>Info</th>
            <th>Pharmacy</th>
          </tr>
            { props.scripts.map((scripts, i) => {
                return (
                  <tr key={scripts.id}>
                    <td style={{textDecoration: "underline"}} onClick={()=>{navigate(`${scripts.id}`)}}>
                    { scripts.name }
                    </td>
                    <td>
                     { scripts.NDC }
                    </td>
                    <td>
                     { scripts.Pharmacy }
                    </td>
                  </tr>
                )
               })
            }
          </tbody>
        </table>
      </>
    )
}

export default ScriptContainer