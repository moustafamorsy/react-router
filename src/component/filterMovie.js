

function Filter(props) {

    const styles={
        main:{
            maxWidth: "1000px",
            margin: "0 auto",
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-around",
           
        },input:{
            textIndent: "2px",
        }
    }

  

   
    return(

        <div style={styles.main}>
            <div>
 <label htmlFor="favColor">Rating : </label>
            <select value={props.rating} onChange={props.rrating}  id="favColor">
           
                <option>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
     <input style={styles.input} placeholder="Enter Movie Name" value={props.search} onChange={props.ssearch} />

     <button onClick={props.addopen}> + Add Movie</button>


        </div>

    )
    
}


export default Filter;