import React,{useState} from 'react'
import "../Css Designs/SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
function SearchBar({placeholder, data}) {

    const [popup, setPopUp] = useState(false)

    const togglePopUp = () => {
        setPopUp(!popup)
    }
    const [filteredData, setFilteredData] = useState([]);
    const [productSearched, setProductSearched] = useState("");

    const handleFilter = (event) => {
        const searchProduct = event.target.value
        setProductSearched(searchProduct);
        const newFilter = data.filter((value) =>{
            return value.name.toLowerCase().includes(searchProduct.toLowerCase());
        });

        if(searchProduct === "") {
            setFilteredData([])
        }
        else{
            setFilteredData(newFilter)
        }
    };

    const clearInput =() => {
        setFilteredData([]);
        setProductSearched("");
    }
    return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder={placeholder} value={productSearched} onChange={handleFilter}/>
            <div className='searchIcon'>
                {filteredData.length === 0 ? (<SearchIcon />)  : (<CloseIcon id="clearBtn" onClick ={clearInput}/> )}
                </div>
        </div>
        {filteredData.length != 0 && (
        <div className='dataResult'>
            {filteredData?.map((value, key) => {
                return <><button onClick={togglePopUp} className='btn-popup'>
                    {value.name}
                </button>
                {popup && (<div className='popup'>
                <div className='overlay'></div>
                <div className='popup-content'>
                    <h2>{value.infoheader}</h2>
                    <img className='small' src={value.image} alt={value.name}></img>
                    <p>{value.info}</p>
                    <h3>Visit store page to add this item to your cart!</h3>
                    <button onClick={togglePopUp} className='close-popup'>Close</button>
                </div>
            </div>)}
            </> 
                // return <a className ="dataItem" href={value.info} target="_blank">
                //     <p>{value.name}</p>
                //     </a>
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar