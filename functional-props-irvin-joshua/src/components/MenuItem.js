

const MenuItem = (props) => {
  console.log("props: ", props)

  return(
    <>
    <h4>{props.menuItem.name}</h4>
    {props.menuItem.ordered && <h5>Ordered</h5>}
    <button>Order</button>

    </>
  )
}




export default MenuItem