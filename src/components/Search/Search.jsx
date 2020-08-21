import React, {useState} from 'react';
import { connect } from "react-redux";
import { loadDataStart } from "../../store/actions";
import classes from "./Search.module.css"
import { createStructuredSelector } from "reselect";
import { ReactComponent as SearchIcon } from './search_icon.svg'
import {selectError} from '../../store/selector'
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function Search({loadDataStart, error}) {
    const [value, setValue] = useState("");

   const keypressHandler = (e) => {
    if(e.keyCode === 13){
        e.target.blur(); 
        loadDataStart(value);
    }
    }

    const handleOnChange = e => {
        const { value } = e.target;
        setValue(value);
      };

      const handleClick = () => {
        loadDataStart(value);
      }

    return (
        <div className={classes.wrap}>
            <div className={classes.search}>
            <input placeholder="Enter GitHub token"   
            type="text"
            className={classes.searchTerm}
            autoFocus={true}
            onKeyDown={keypressHandler}
            onChange = {handleOnChange}
            value={value}></input>
           
<button className={classes.searchButton} onClick={handleClick}>
    <SearchIcon className={classes.searchIcon}/>
	</button>
        </div>
        {error ? <ErrorComponent error={error}/>: null}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    loadDataStart: token => dispatch(loadDataStart(token))
  });
  const mapStateToProps = createStructuredSelector({
    error:selectError
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
