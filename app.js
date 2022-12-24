
    let heading = React.createElement("h1",{},"namaste react")
    let heading2 = React.createElement("h1",{},"namaste react2")
    let container = React.createElement("div",{
        id:"container"
    }, [heading,heading2])
    let root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(container)
