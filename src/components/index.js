/* eslint-disable react/button-has-type */
import './index.css'

const Card = props => {
  const {detail, click} = props
  const {title, logoUrl, domainUrl, timeAccessed, id} = detail

  const dlt = () => {
    click(id)
  }

  return (
    <li className="boxing">
      <div className="row">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p className="text">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button type="button" onClick={dlt} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Card
