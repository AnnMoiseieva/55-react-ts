import { EmployeeCardProps } from "./types"
import "./Style.css"
// children - additional props, a special prop that can be used to pass JSX elements to a component

function EmployeeCard({name, position, department, image, children }: EmployeeCardProps) {
    return (
        <div className="employee-card-container">
            <h2>{name}</h2>
            <img src={image} />
            <div>{position}</div>
            <div>{department}</div>
            {children}
        </div>
    )
}

export default EmployeeCard