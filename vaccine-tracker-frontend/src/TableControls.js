//Most Wasteful Counties
//Least Wasteful Counties
//filter on county

export default function TableControls() {
    return (
        <div>
            <label class="dataselection" for="tablevalues">View:</label>
            <select className="form-control mb-3" onChange={(e) => this.setState({ tableDataDescription: e.target.value})}>
                <option value="topten">10 Most Wasteful Counties</option>
                <option value="bottomten">10 Least Wasteful Counties</option>
            </select>
        </div>
    )
}


