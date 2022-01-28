import React,{useState} from 'react';

const FilterTag = ({name,setSelectedTags}) => {

  const [selected, setSelected] = useState(false);

  const select = () =>{
    if(!selected){
      setSelected(true)
      setSelectedTags((pre)=>{
        return [...pre,name]
      })
    }else{
      setSelected(false)
      setSelectedTags((pre)=>{
        return pre.filter((e)=>{
          return e !== name;
        })
      })
    }
  }

  return <>
    <div className='tag' style={{
      backgroundColor: selected ? 'rgb(72 72 230 / 18%)'  : 'rgba(231, 231, 231, 0.459)'
    }}
    onClick={()=>select()}
    >
      {name}
    </div>
  </>;
};

export default FilterTag;
