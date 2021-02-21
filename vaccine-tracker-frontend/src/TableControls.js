//Most Wasteful Counties
//Least Wasteful Counties
//filter on county

export default function TableControls() {
    return (
        <div>
            <input type="radio" id="bottom" value="bottom" name="b1"></input>
            <label for="bottom">10 Least Wasteful Counties</label>
            <br/>
            <input type="radio" id="top" value="top" name="b1"></input>
            <label for="top">10 Most Wasteful Counties</label>
        </div>
    )
}