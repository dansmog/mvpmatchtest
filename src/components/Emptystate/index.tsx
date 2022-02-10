import "./emptystate.styles";

interface IEmptystate {
  title: string,
  description: string,
  img: string
}

const Emptystate = ({title, description, img}: IEmptystate) => {
  return (
    <div className="emptystate__wrapper">
      <h6>{title}</h6>
      <p>{description}</p>
      <img src={img} alt=""/>
    </div>
  )
}

export default Emptystate