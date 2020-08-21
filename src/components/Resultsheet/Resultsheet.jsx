import React, {useState, useEffect, useCallback} from "react";
import Spreadsheet from "react-spreadsheet";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {selectData, selectIsFetching, selectToken} from '../../store/selector'
import { uploadTitleStart } from '../../store/actions'
import Loader from '../Loader/Loader'
import classes from "./Resultsheet.module.css"

function Resultsheet({repos, isLoading, uploadTitleStart, token}) {
  const [repoData, setRepoData] = useState([])


  useEffect(() => {
      repos && setRepoData(prev => [...prev, ...repos])
  }, [repos])

  const handleCellChange = (data) => {
    setRepoData(data)
  }

  const handleCellCommit = (prevCell, nextCell, coords) => {
    const id = repoData[coords.row -1][4].value
    uploadTitleStart({token, id, title:nextCell.value})
  }

  return (
    <div className={classes.wrapper}>
      {repoData && repoData.length > 0 ? <Spreadsheet data={repoData} 
      onChange={data=> handleCellChange(data)}
      token = {token}
      onCellCommit={handleCellCommit}/> : isLoading ? <Loader/> : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  repos:selectData,
  isLoading:selectIsFetching,
  token:selectToken
});

const mapDispatchToProps = dispatch => ({
  uploadTitleStart: data => dispatch(uploadTitleStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resultsheet);
