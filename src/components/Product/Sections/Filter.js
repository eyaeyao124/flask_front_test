import React,{ useState, useEffect } from 'react';
import FilterList from '../../../dummy/filter/filter.json';

const Filter = ({filterFunc}) => {
    const [CheckList, setCheckList] = useState([])

    useEffect(() => {
        setCheckList(FilterList)
    }, [])

    return (
        <div>
            {
                CheckList.map((item,index)=>{
                    return <label key={index}>{item.name}<input type="radio" name="filter" value={item.value} defaultChecked={item.default === true ? true : false} onChange={(e)=>filterFunc(e.target.value)}/></label>
                })
            }
        </div>
    )
}

export default Filter