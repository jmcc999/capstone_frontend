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
            { props.scripts.map((script, i) => {
                return (
                  <tr key={script.id}>
                    <td style={{textDecoration: "underline", color: "blue"}} onClick={()=>{navigate(`${script.id}`)}}>
                    { script.name }
                    </td>
                    <td>
                     { script.breed }
                    </td>
                    <td>
                     { script.owner }
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