import "./style.css"


const Mycomponent = () => {
    // const text = "Dai ca"
    // const text = 21
    // const text = true
    // const text = undefined
    // const text = null
    // const text = [1, 2, 3]
    const text = {
        name: "Nguyen Thiet Do",
        age: 20

    }
    return (
        <>
            <div> {JSON.stringify(text)} Nguyen Thiet DO </div>
            <div>{console.log("donopro")}</div>
            <div className="child"> Nguyen Thiet DO </div>

        </>
      

    );
  }
  export default Mycomponent